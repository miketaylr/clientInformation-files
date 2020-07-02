//	Ð·Ð°Ð¿ÑÑÐº ÑÑÐ½ÐºÑÐ¸Ð¹ ÑÐµÐ½ÑÑÐ°Ð»ÑÐ½ÑÑ ÑÑÑÐ°Ð½Ð¸Ñ
window.onload = function () {
  if (document.getElementById("tdmessagewindowhead")) {
    document.getElementById(
      "tdmessagewindowhead"
    ).onmousedown = funcmessageDrag;
  }
  if (document.getElementById("tdmessagehelpwindowhead")) {
    document.getElementById(
      "tdmessagehelpwindowhead"
    ).onmousedown = funcmessageDrag;
  }
  if (document.getElementById("tdmessageerrwindowhead")) {
    document.getElementById(
      "tdmessageerrwindowhead"
    ).onmousedown = funcmessageDrag;
  }
  if (document.getElementById("divmessage")) {
    document.getElementById("divmessage").onmouseup = funcmessageDrop;
  }
  if (document.getElementById("divmessage")) {
    document.getElementById("divmessage").onmousemove = funcmessageMove;
  }
  document.onkeydown = funcKeyDownBase;
  if (typeof funcShadowRollMove == "function") {
    window.onresize = funcShadowRollMove;
    window.onscroll = funcShadowRollMove;
  }
  funcshowprint();
  if (typeof bodyloader == "function") {
    bodyloader();
  }
};

//	ÐºÐ¾Ð½ÑÑÐ°Ð½ÑÑ Ð¸ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½ÑÐµ
varmessageMove_startX = 0; //	Ð½Ð°ÑÐ°Ð»ÑÐ½Ð°Ñ Ð¿Ð¾Ð·Ð¸ÑÐ¸Ñ ÐºÑÑÑÐ¾ÑÐ° Ð²Ð½ÑÑÑÐ¸ Ð¾Ð±Ð»Ð°ÑÑÐ¸ Ð°ÐºÑÐ¸Ð²Ð½Ð¾Ð¹ Ð´Ð»Ñ (drag)
varmessageMove_startY = 0; //	Ð½Ð°ÑÐ°Ð»ÑÐ½Ð°Ñ Ð¿Ð¾Ð·Ð¸ÑÐ¸Ñ ÐºÑÑÑÐ¾ÑÐ° Ð²Ð½ÑÑÑÐ¸ Ð¾Ð±Ð»Ð°ÑÑÐ¸ Ð°ÐºÑÐ¸Ð²Ð½Ð¾Ð¹ Ð´Ð»Ñ (drag)
varmessageMove_start = 0; //	ÑÐ»Ð°Ð³ Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ñ Ð¾ÐºÐ½Ð° ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ
varmessageTabIndexId1 = ""; //	id ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð½Ð° ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð½ÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼Ð¾ ÑÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÐ¾ÐºÑÑ Ð² Ð¾ÐºÐ½Ðµ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ
varmessageHelpTabIndexId1 = ""; //	id ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð½Ð° ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð½ÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼Ð¾ ÑÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÐ¾ÐºÑÑ Ð² Ð¾ÐºÐ½Ðµ help
varmessageErrTabIndexId1 = ""; //	id ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð½Ð° ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð½ÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼Ð¾ ÑÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ ÑÐ¾ÐºÑÑ Ð² Ð¾ÐºÐ½Ðµ err

//	Ð¿ÑÑÑÐ°Ñ ÑÑÐ½ÐºÑÐ¸Ñ
function funcNull() {}

//	ÑÑÐ½ÐºÑÐ¸Ñ Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð¾ÐºÐ¾Ð½ÑÐ°Ð½Ð¸Ð¹
function funcNumberEndings(number, type) {
  var l = "";
  var i = "0" + number;
  var j = i.substr(i.length - 1, 1) - 1 + 1;
  var k = i.substr(i.length - 2, 2) - 1 + 1; //																						number =	0			1			2			...
  if (type == 0) {
    l = "";
    if (j == 0) {
      l = "";
    }
    if (j == 1) {
      l = "Ð°";
    }
    if (j == 2) {
      l = "Ñ";
    }
    if (j == 3) {
      l = "Ñ";
    }
    if (j == 4) {
      l = "Ñ";
    }
    if (k > 10 && k < 20) {
      l = "";
    }
  } //	$type = 0	ÑÐ°Ð±Ð»Ð¸Ñ		ÑÐ°Ð±Ð»Ð¸ÑÐ		ÑÐ°Ð±Ð»Ð¸ÑÐ«		...
  if (type == 1) {
    l = "ÐµÐ¹";
    if (j == 0) {
      l = "ÐµÐ¹";
    }
    if (j == 1) {
      l = "Ñ";
    }
    if (j == 2) {
      l = "Ð¸";
    }
    if (j == 3) {
      l = "Ð¸";
    }
    if (j == 4) {
      l = "Ð¸";
    }
    if (k > 10 && k < 20) {
      l = "ÐµÐ¹";
    }
  } //	$type = 1	Ð·Ð°Ð¿Ð¸ÑÐÐ		Ð·Ð°Ð¿Ð¸ÑÐ¬		Ð·Ð°Ð¿Ð¸ÑÐ		...
  if (type == 2) {
    l = "Ð¾Ðº";
    if (j == 0) {
      l = "Ð¾Ðº";
    }
    if (j == 1) {
      l = "ÐºÐ°";
    }
    if (j == 2) {
      l = "ÐºÐ¸";
    }
    if (j == 3) {
      l = "ÐºÐ¸";
    }
    if (j == 4) {
      l = "ÐºÐ¸";
    }
    if (k > 10 && k < 20) {
      l = "Ð¾Ðº";
    }
  } //	$type = 2	ÐºÐ¾Ð»Ð¾Ð½ÐÐ		ÐºÐ¾Ð»Ð¾Ð½ÐÐ		ÐºÐ¾Ð»Ð¾Ð½ÐÐ		...
  if (type == 3) {
    l = "ÑÐ¾Ð²";
    if (j == 0) {
      l = "ÑÐ¾Ð²";
    }
    if (j == 1) {
      l = "ÐµÑ";
    }
    if (j == 2) {
      l = "ÑÐ°";
    }
    if (j == 3) {
      l = "ÑÐ°";
    }
    if (j == 4) {
      l = "ÑÐ°";
    }
    if (k > 10 && k < 20) {
      l = "ÑÐ¾Ð²";
    }
  } //	$type = 3	ÑÑÐ¾Ð»Ð±Ð¦ÐÐ	ÑÑÐ¾Ð»Ð±ÐÐ¦		ÑÑÐ¾Ð»Ð±Ð¦Ð		...
  if (type == 4) {
    l = "Ñ";
    if (j == 0) {
      l = "Ñ";
    }
    if (j == 1) {
      l = "Ð¹";
    }
    if (j == 2) {
      l = "Ñ";
    }
    if (j == 3) {
      l = "Ñ";
    }
    if (j == 4) {
      l = "Ñ";
    }
    if (k > 10 && k < 20) {
      l = "Ñ";
    }
  } //	$type = 4	Ð°ÑÑÐ¸Ð²Ð½ÑÐ¥	Ð°ÑÑÐ¸Ð²Ð½ÑÐ	Ð°ÑÑÐ¸Ð²Ð½ÑÐ¥	...
  if (type == 5) {
    l = "Ð¾Ð²";
    if (j == 0) {
      l = "Ð¾Ð²";
    }
    if (j == 1) {
      l = "";
    }
    if (j == 2) {
      l = "Ð°";
    }
    if (j == 3) {
      l = "Ð°";
    }
    if (j == 4) {
      l = "Ð°";
    }
    if (k > 10 && k < 20) {
      l = "Ð¾Ð²";
    }
  } //	$type = 5	ÑÐ°Ð¹Ð»ÐÐ		ÑÐ°Ð¹Ð»		ÑÐ°Ð¹Ð»Ð		...
  if (type == 6) {
    l = "ÑÐ¸";
    if (j == 0) {
      l = "";
    }
    if (j == 1) {
      l = "Ð½Ð¾";
    }
    if (j == 2) {
      l = "ÑÑ";
    }
    if (j == 3) {
      l = "ÑÑ";
    }
    if (j == 4) {
      l = "ÑÑ";
    }
    if (j == 7) {
      l = "Ð¼Ð¸";
    }
    if (j == 8) {
      l = "Ð¼Ð¸";
    }
    if (k > 10 && k < 20) {
      l = "ÑÐ¸";
    }
  } //	$type = 6				Ð¾Ð´ÐÐ		Ð´Ð²Ð£Ð¥		...
  if (type == 7) {
    l = "Ð´Ð½ÐµÐ¹";
    if (j == 0) {
      l = "Ð´Ð½ÐµÐ¹";
    }
    if (j == 1) {
      l = "Ð´ÐµÐ½Ñ";
    }
    if (j == 2) {
      l = "Ð´Ð½Ñ";
    }
    if (j == 3) {
      l = "Ð´Ð½Ñ";
    }
    if (j == 4) {
      l = "Ð´Ð½Ñ";
    }
    if (k > 10 && k < 20) {
      l = "Ð´Ð½ÐµÐ¹";
    }
  } //	$type = 7	ÐÐÐÐ		ÐÐÐÐ¬		ÐÐÐ¯			...
  if (type == 8) {
    l = "";
    if (j == 0) {
      l = "";
    }
    if (j == 1) {
      l = "";
    }
    if (j == 2) {
      l = "Ð°";
    }
    if (j == 3) {
      l = "Ð°";
    }
    if (j == 4) {
      l = "Ð°";
    }
    if (k > 10 && k < 20) {
      l = "";
    }
  } //	$type = 8	ÑÐµÐ»Ð¾Ð²ÐµÐº		ÑÐµÐ»Ð¾Ð²ÐµÐº		ÑÐµÐ»Ð¾Ð²ÐµÐºÐ	...
  if (type == 9) {
    l = "";
    if (j == 0) {
      l = "";
    }
    if (j == 1) {
      l = "Ð¾";
    }
    if (j == 2) {
      l = "Ð°";
    }
    if (j == 3) {
      l = "Ð°";
    }
    if (j == 4) {
      l = "Ð°";
    }
    if (k > 10 && k < 20) {
      l = "";
    }
  } //	$type = 9	Ð¼ÐµÑÑ		Ð¼ÐµÑÑÐ		Ð¼ÐµÑÑÐ		...
  if (type == 10) {
    l = "Ð¾";
    if (j == 1) {
      l = "";
    }
    if (k > 10 && k < 20) {
      l = "Ð¾";
    }
  } //	$type = 10	Ð¾Ð±Ð½Ð°ÑÑÐ¶ÐµÐ½Ð	Ð¾Ð±Ð½Ð°ÑÑÐ¶ÐµÐ½	Ð¾Ð±Ð½Ð°ÑÑÐ¶ÐµÐ½Ð	...
  if (type == 11) {
    l = "ÐµÐ¹";
    if (j == 0) {
      l = "ÐµÐ¹";
    }
    if (j == 1) {
      l = "Ñ";
    }
    if (j == 2) {
      l = "Ñ";
    }
    if (j == 3) {
      l = "Ñ";
    }
    if (j == 4) {
      l = "Ñ";
    }
    if (k > 10 && k < 20) {
      l = "ÐµÐ¹";
    }
  } //	$type = 11	Ð¿Ð¾Ð»ÑÐ·-Ð»ÐÐ	Ð¿Ð¾Ð»ÑÐ·-Ð»Ð¬	Ð¿Ð¾Ð»ÑÐ·-Ð»Ð¯	...
  if (type == 12) {
    l = "Ð¹";
    if (j == 0) {
      l = "Ð¹";
    }
    if (j == 1) {
      l = "Ðµ";
    }
    if (j == 2) {
      l = "Ñ";
    }
    if (j == 3) {
      l = "Ñ";
    }
    if (j == 4) {
      l = "Ñ";
    }
    if (k > 10 && k < 20) {
      l = "Ð¹";
    }
  } //	$type = 11	Ð´ÐµÐ¹ÑÑÐ²Ð¸Ð	Ð´ÐµÐ¹ÑÑÐ²Ð¸Ð	Ð´ÐµÐ¹ÑÑÐ²Ð¸Ð¯	...
  if (type == 13) {
    l = "";
    if (j == 0) {
      l = "";
    }
    if (j == 1) {
      l = "Ñ";
    }
    if (j == 2) {
      l = "Ñ";
    }
    if (j == 3) {
      l = "Ñ";
    }
    if (j == 4) {
      l = "Ñ";
    }
    if (k > 10 && k < 20) {
      l = "Ð¹";
    }
  } //	$type = 11	ÑÐµÐºÑÐ½Ð´		ÑÐµÐºÑÐ½Ð´Ð£		ÑÐµÐºÑÐ½Ð´Ð«		...
  return l;
}

//	Ð¿ÑÐµÐ¾Ð±ÑÐ°Ð·Ð¾Ð²Ð°Ð½Ð¸Ðµ ÐºÐ¸ÑÐ¸Ð»Ð»Ð¸ÑÑ Ð´Ð»Ñ url
function funcUrlCoder(action, str) {
  str += "";
  if (action == "code") {
    var l = Array();
    for (i = 0; i < str.length; i++) {
      l[i] = str.charCodeAt(i);
    }
    l = l.join("_");
  }
  if (action == "incode") {
    var l = "";
    str = str.split("_");
    for (i = 0; i < str.length; i++) {
      l += String.fromCharCode(str[i]);
    }
  }
  return l;
}

//	Ð¿ÑÐµÐ¾Ð±ÑÐ°Ð·Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¼Ð½Ð¾Ð³Ð¾Ð¼ÐµÑÐ½Ð¾Ð³Ð¾ Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð² ÑÑÑÐ¾ÐºÑ Ð¸ Ð¾Ð±ÑÐ°ÑÐ½Ð¾
function funcArrayString(action, obj_str) {
  if (action == "array_to_string") {
    if (typeof obj_str == "object") {
      var l0 = Array();
      for (i0 in obj_str) {
        if (typeof obj_str[i0] == "object") {
          var l1 = Array();
          for (i1 in obj_str[i0]) {
            if (typeof obj_str[i0][i1] == "object") {
              var l2 = Array();
              for (i2 in obj_str[i0][i1]) {
                if (typeof obj_str[i0][i1][i2] == "object") {
                  var l3 = Array();
                  for (i3 in obj_str[i0][i1][i2]) {
                    if (typeof obj_str[i0][i1][i2][i3] == "object") {
                      var l4 = Array();
                      for (i4 in obj_str[i0][i1][i2][i3]) {
                        l4.push(i4 + "|" + obj_str[i0][i1][i2][i3][i4]);
                      }
                      l4 = l4.join("|-|");
                    } else {
                      var l4 = obj_str[i0][i1][i2][i3];
                    }
                    l3.push(i3 + "|-|-|" + l4);
                  }
                  l3 = l3.join("|-|-|-|");
                } else {
                  var l3 = obj_str[i0][i1][i2];
                }
                l2.push(i2 + "|-|-|-|-|" + l3);
              }
              l2 = l2.join("|-|-|-|-|-|");
            } else {
              var l2 = obj_str[i0][i1];
            }
            l1.push(i1 + "|-|-|-|-|-|-|" + l2);
          }
          l1 = l1.join("|-|-|-|-|-|-|-|");
        } else {
          var l1 = obj_str[i0];
        }
        l0.push(i0 + "|-|-|-|-|-|-|-|-|" + l1);
      }
      l0 = l0.join("|-|-|-|-|-|-|-|-|-|");
    } else {
      var l0 = obj_str;
    }
  }
  if (action == "string_to_array") {
    if (typeof obj_str == "string") {
      var l0 = Array();
      var tmp = obj_str.split("|-|-|-|-|-|-|-|-|-|");
      for (i0 = 0; i0 < tmp.length; i0++) {
        tmp[i0] = tmp[i0].split("|-|-|-|-|-|-|-|-|");
        if (tmp[i0].length > 1) {
          if (i0 == 0) {
            l0 = Array();
          }
          l0[tmp[i0][0]] = tmp[i0][1];
          tmp[i0][1] = tmp[i0][1].split("|-|-|-|-|-|-|-|");
          for (i1 = 0; i1 < tmp[i0][1].length; i1++) {
            tmp[i0][1][i1] = tmp[i0][1][i1].split("|-|-|-|-|-|-|");
            if (tmp[i0][1][i1].length > 1) {
              if (i1 == 0) {
                l0[tmp[i0][0]] = Array();
              }
              l0[tmp[i0][0]][tmp[i0][1][i1][0]] = tmp[i0][1][i1][1];
              tmp[i0][1][i1][1] = tmp[i0][1][i1][1].split("|-|-|-|-|-|");
              for (i2 = 0; i2 < tmp[i0][1][i1][1].length; i2++) {
                tmp[i0][1][i1][1][i2] = tmp[i0][1][i1][1][i2].split(
                  "|-|-|-|-|"
                );
                if (tmp[i0][1][i1][1][i2].length > 1) {
                  if (i2 == 0) {
                    l0[tmp[i0][0]][tmp[i0][1][i1][0]] = Array();
                  }
                  l0[tmp[i0][0]][tmp[i0][1][i1][0]][tmp[i0][1][i1][1][i2][0]] =
                    tmp[i0][1][i1][1][i2][1];
                  tmp[i0][1][i1][1][i2][1] = tmp[i0][1][i1][1][i2][1].split(
                    "|-|-|-|"
                  );
                  for (i3 = 0; i3 < tmp[i0][1][i1][1][i2][1].length; i3++) {
                    tmp[i0][1][i1][1][i2][1][i3] = tmp[i0][1][i1][1][i2][1][
                      i3
                    ].split("|-|-|");
                    if (tmp[i0][1][i1][1][i2][1][i3].length > 1) {
                      if (i3 == 0) {
                        l0[tmp[i0][0]][tmp[i0][1][i1][0]][
                          tmp[i0][1][i1][1][i2][0]
                        ] = Array();
                      }
                      l0[tmp[i0][0]][tmp[i0][1][i1][0]][
                        tmp[i0][1][i1][1][i2][0]
                      ][tmp[i0][1][i1][1][i2][1][i3][0]] =
                        tmp[i0][1][i1][1][i2][1][i3][1];
                      tmp[i0][1][i1][1][i2][1][i3][1] = tmp[i0][1][i1][1][
                        i2
                      ][1][i3][1].split("|-|");
                      for (
                        i4 = 0;
                        i4 < tmp[i0][1][i1][1][i2][1][i3][1].length;
                        i4++
                      ) {
                        tmp[i0][1][i1][1][i2][1][i3][1][i4] = tmp[i0][1][i1][1][
                          i2
                        ][1][i3][1][i4].split("|");
                        if (tmp[i0][1][i1][1][i2][1][i3][1][i4].length > 1) {
                          if (i4 == 0) {
                            l0[tmp[i0][0]][tmp[i0][1][i1][0]][
                              tmp[i0][1][i1][1][i2][0]
                            ][tmp[i0][1][i1][1][i2][1][i3][0]] = Array();
                          }
                          l0[tmp[i0][0]][tmp[i0][1][i1][0]][
                            tmp[i0][1][i1][1][i2][0]
                          ][tmp[i0][1][i1][1][i2][1][i3][0]][
                            tmp[i0][1][i1][1][i2][1][i3][1][i4][0]
                          ] = tmp[i0][1][i1][1][i2][1][i3][1][i4][1];
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
    } else {
      var l0 = obj_str;
    }
  }
  return l0;
}

//	Ð²ÑÐ²Ð¾Ð´ Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð¸Ð· Ð·Ð½Ð°ÑÐµÐ½Ð¸Ð¹ Ð¼Ð°ÑÑÐ¸Ð²Ð°, Ð¸Ð»Ð¸ ÑÐ¾ÑÑÐ¸ÑÐ¾Ð²ÐºÐ° Ð¼Ð°ÑÑÐ¸Ð²Ð°, Ð¸Ð»Ð¸ ÐºÐ¾Ð¿Ð¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð±ÐµÐ· ÑÐ²ÑÐ·ÐµÐ¹
function funcArraySelect(action, obj, param) {
  var l = "",
    l1 = "",
    i = 0,
    i1 = 0,
    i2 = 0,
    i3 = 0,
    i4 = 0,
    i5 = 0,
    j = 0;
  if (typeof obj == "object") {
    if (action == "max_length") {
      j = 0;
      for (i in obj) {
        if (typeof obj[i] != "object") {
          obj[i] = obj[i] + "";
          if (obj[i].length > j) {
            j = obj[i].length;
            l = obj[i];
          }
        }
      }
    }
    if (action == "min_length") {
      j = 2147483647;
      for (i in obj) {
        if (typeof obj[i] != "object") {
          obj[i] = obj[i] + "";
          if (obj[i].length < j) {
            if (param != "not_null" || obj[i].length != 0) {
              j = obj[i].length;
              l = obj[i];
            }
          }
        }
      }
    }
    if (action == "max_value") {
      l = 0;
      for (i in obj) {
        if (typeof obj[i] != "object") {
          obj[i] = obj[i] - 1 + 1;
          if (obj[i] > l) {
            l = obj[i];
          }
        }
      }
    }
    if (action == "min_value") {
      l = 2147483647;
      for (i in obj) {
        if (typeof obj[i] != "object") {
          obj[i] = obj[i] - 1 + 1;
          if (obj[i] < l) {
            if (param != "not_null" || obj[i] != 0) {
              l = obj[i];
            }
          }
        }
      }
    }
    if (action == "in_array") {
      l = false;
      for (i in obj) {
        if (typeof obj[i] != "object") {
          if (obj[i] == param) {
            l = true;
          }
        }
      }
    }
    if (action == "count") {
      l = 0;
      for (i in obj) {
        if (param) {
          param = param - 1 + 1;
          if (param >= 1) {
            if (typeof obj[i] == "object") {
              for (i1 in obj[i]) {
                if (param >= 2) {
                  if (typeof obj[i][i1] == "object") {
                    for (i2 in obj[i][i1]) {
                      if (param >= 3) {
                        if (typeof obj[i][i1][i2] == "object") {
                          for (i3 in obj[i][i1][i2]) {
                            if (param >= 4) {
                              if (typeof obj[i][i1][i2][i3] == "object") {
                                for (i4 in obj[i][i1][i2][i3]) {
                                  if (param >= 5) {
                                    if (
                                      typeof obj[i][i1][i2][i3][i4] == "object"
                                    ) {
                                      for (i5 in obj[i][i1][i2][i3][i4]) {
                                        l++;
                                      }
                                    }
                                  } else {
                                    l++;
                                  }
                                }
                              }
                            } else {
                              l++;
                            }
                          }
                        }
                      } else {
                        l++;
                      }
                    }
                  }
                } else {
                  l++;
                }
              }
            }
          } else {
            l++;
          }
        } else {
          l++;
        }
      }
    }
    if (action == "sum_value") {
      l = 0;
      for (i in obj) {
        if (typeof obj[i] != "object") {
          obj[i] = obj[i] - 1 + 1;
          l += obj[i];
        }
      }
    }
    if (action == "ksort") {
      l = Array();
      l1 = Array();
      for (i in obj) {
        l1.push(i);
      }
      l1.sort();
      for (i = 0; i < l1.length; i++) {
        l[l1[i]] = obj[l1[i]];
      }
    }
    if (action == "copy") {
      l = Array();
      for (i in obj) {
        if (typeof obj[i] != "object") {
          l[i] = obj[i];
        } else {
          l[i] = Array();
          for (i1 in obj[i]) {
            if (typeof obj[i][i1] != "object") {
              l[i][i1] = obj[i][i1];
            } else {
              l[i][i1] = Array();
              for (i2 in obj[i][i1]) {
                if (typeof obj[i][i1][i2] != "object") {
                  l[i][i1][i2] = obj[i][i1][i2];
                } else {
                  l[i][i1][i2] = Array();
                  for (i3 in obj[i][i1][i2]) {
                    if (typeof obj[i][i1][i2][i3] != "object") {
                      l[i][i1][i2][i3] = obj[i][i1][i2][i3];
                    } else {
                      l[i][i1][i2][i3] = Array();
                      for (i4 in obj[i][i1][i2][i3]) {
                        if (typeof obj[i][i1][i2][i3][i4] != "object") {
                          l[i][i1][i2][i3][i4] = obj[i][i1][i2][i3][i4];
                        } else {
                          l[i][i1][i2][i3][i4] = Array();
                          for (i5 in obj[i][i1][i2][i3][i4]) {
                            if (typeof obj[i][i1][i2][i3][i4][i5] != "object") {
                              l[i][i1][i2][i3][i4][i5] =
                                obj[i][i1][i2][i3][i4][i5];
                            } else {
                              l[i][i1][i2][i3][i4][i5] = Array();
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
      }
    }
  }
  return l;
}

//	Ð²ÑÐ²Ð¾Ð´ Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð² Ð¾ÐºÐ½Ðµ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ð¹
function funcPrint_r(var_name) {
  var l = "";
  if (typeof var_name == "string") {
    if (var_name == "l") {
      l =
        "ÐÑÐ²Ð¾Ð´ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½Ð¾Ð¹ Â«lÂ» - Ð½ÐµÐ²Ð¾Ð·Ð¼Ð¾Ð¶ÐµÐ½, Ñ.Ðº. Ð¾Ð½Ð° Ð¸ÑÐ¿Ð¾Ð»ÑÐ·ÑÐµÑÑÑ Ð² ÑÑÐ½ÐºÑÐ¸Ð¸ Ð²ÑÐ²Ð¾Ð´Ð° Ð¼Ð°ÑÑÐ¸Ð²Ð°!";
    } else {
      try {
        eval("var obj_str=" + var_name + ";");
      } catch (err) {
        l =
          "ÐÐµÑÐµÐ¼ÐµÐ½Ð½Ð°Ñ Â«" +
          var_name +
          "Â» Ð½Ðµ ÑÑÑÐµÑÑÐ²ÑÐµÑ\r\rÐÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼Ð¾ Ð²Ð²ÐµÑÑÐ¸ ÐÐÐÐÐÐÐÐ ÑÑÑÐµÑÑÐ²ÑÑÑÐµÐ¹ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½Ð¾Ð¹!";
      }
    }
  } else {
    var_name = "";
    l =
      "ÐÐ²ÐµÐ´ÑÐ½Ð½Ð¾Ðµ ÐÐÐÐÐÐÐÐ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½Ð¾Ð¹ Ð½Ðµ ÑÐ²Ð»ÑÐµÑÑÑ ÑÑÑÐ¾ÐºÐ¾Ð¹!";
  }
  if (l == "") {
    var i0 = "";
    var j0 = "";
    var i1 = "";
    var j1 = "";
    var i2 = "";
    var j2 = "";
    var i3 = "";
    var j3 = "";
    var i4 = "";
    var j4 = "";
    var i5 = "";
    var j5 = "";
    if (typeof obj_str == "object") {
      l += "Array(";
      for (i0 in obj_str) {
        j0 = "\r\n ";
        l += j0 + "[" + i0 + "] => ";
        if (typeof obj_str[i0] == "object") {
          l += "Array(";
          for (i1 in obj_str[i0]) {
            j1 = j0 + Array(1 + i0.length + 7).join(" ");
            l += j1 + "[" + i1 + "] => ";
            if (typeof obj_str[i0][i1] == "object") {
              l += "Array(";
              for (i2 in obj_str[i0][i1]) {
                j2 = j0 + Array(1 + i0.length + 7 + i1.length + 7).join(" ");
                l += j2 + "[" + i2 + "] => ";
                if (typeof obj_str[i0][i1][i2] == "object") {
                  l += "Array(";
                  for (i3 in obj_str[i0][i1][i2]) {
                    j3 =
                      j0 +
                      Array(
                        1 + i0.length + 7 + i1.length + 7 + i2.length + 7
                      ).join(" ");
                    l += j3 + "[" + i3 + "] => ";
                    if (typeof obj_str[i0][i1][i2][i3] == "object") {
                      l += "Array(";
                      for (i4 in obj_str[i0][i1][i2][i3]) {
                        j4 =
                          j0 +
                          Array(
                            1 +
                              i0.length +
                              7 +
                              i1.length +
                              7 +
                              i2.length +
                              7 +
                              i3.length +
                              7
                          ).join(" ");
                        l += j4 + "[" + i4 + "] => ";
                        if (typeof obj_str[i0][i1][i2][i3][i4] == "object") {
                          l += "Array(";
                          for (i5 in obj_str[i0][i1][i2][i3][i4]) {
                            j5 =
                              j0 +
                              Array(
                                1 +
                                  i0.length +
                                  7 +
                                  i1.length +
                                  7 +
                                  i2.length +
                                  7 +
                                  i3.length +
                                  7 +
                                  i4.length +
                                  7
                              ).join(" ");
                            l +=
                              j5 +
                              "[" +
                              i5 +
                              "] => " +
                              obj_str[i0][i1][i2][i3][i4][i5];
                          }
                          l +=
                            j0 +
                            Array(
                              i0.length +
                                7 +
                                i1.length +
                                7 +
                                i2.length +
                                7 +
                                i3.length +
                                7 +
                                i4.length +
                                7
                            ).join(" ") +
                            ")";
                          j5 = "";
                        } else {
                          l += obj_str[i0][i1][i2][i3][i4];
                        }
                      }
                      l +=
                        j0 +
                        Array(
                          i0.length +
                            7 +
                            i1.length +
                            7 +
                            i2.length +
                            7 +
                            i3.length +
                            7
                        ).join(" ") +
                        ")";
                      j4 = "";
                    } else {
                      l += obj_str[i0][i1][i2][i3];
                    }
                  }
                  l +=
                    j0 +
                    Array(i0.length + 7 + i1.length + 7 + i2.length + 7).join(
                      " "
                    ) +
                    ")";
                  j3 = "";
                } else {
                  l += obj_str[i0][i1][i2];
                }
              }
              l += j0 + Array(i0.length + 7 + i1.length + 7).join(" ") + ")";
              j2 = "";
            } else {
              l += obj_str[i0][i1];
            }
          }
          l += j0 + Array(i0.length + 7).join(" ") + ")";
          j1 = "";
        } else {
          l += obj_str[i0];
        }
      }
      l += "\r\n)";
      j0 = "";
    } else {
      l = obj_str;
    }
  }
  messege_button["close_err_print_r"] =
    "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='2' id='btnErrFocusPrint_r' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessageerrwindow\").style.display==\"\"){if(document.getElementById(\"textareaErrFocusPrint_r\")){document.getElementById(\"textareaErrFocusPrint_r\").focus();}}'																				onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close_err\");'><tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ°ÐºÑÑÑÑ</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
  funcmessage("close");
  funcmessage(
    "open_err",
    800,
    600,
    "ÐÑÐ²Ð¾Ð´ Ð·Ð½Ð°ÑÐµÐ½Ð¸Ð¹ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½Ð¾Ð¹ js:",
    '<font size="2" style="font-family: Arial, sans-serif; color: #000000;">' +
      var_name +
      '=</font><br/><textarea rows="30" cols="94" style="width:774; height:520; resize:none;" wrap="off" tabindex="1" id="textareaErrFocusPrint_r">' +
      l +
      "</textarea><br/>",
    "close_err_print_r",
    "no",
    "no",
    "btnErrFocusPrint_r"
  );
}

//	Ð²ÑÐ²Ð¾Ð´ Ð²ÑÐµÑ js Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½ÑÑ Ð² Ð¾ÐºÐ½Ðµ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ð¹
function funcGetVar() {
  var l = {
      object: Array(),
      string: Array(),
      number: Array(),
      boolean: Array(),
    },
    name = "",
    type = "",
    data = "";
  for (name in window) {
    try {
      type = typeof window[name];
      data = window[name];
    } catch (e) {
      type = "undefined";
      data = "undefined";
    }
    if (type == "object") {
      if (data) {
        if (name != "top") {
          if (name != "window") {
            if (name != "location") {
              if (name != "external") {
                if (name != "chrome") {
                  if (name != "Intl") {
                    if (name != "v8Intl") {
                      if (name != "document") {
                        if (name != "webkitNotifications") {
                          if (name != "localStorage") {
                            if (name != "sessionStorage") {
                              if (name != "applicationCache") {
                                if (name != "webkitStorageInfo") {
                                  if (name != "indexedDB") {
                                    if (name != "webkitIndexedDB") {
                                      if (name != "crypto") {
                                        if (name != "CSS") {
                                          if (name != "performance") {
                                            if (name != "console") {
                                              if (name != "styleMedia") {
                                                if (name != "parent") {
                                                  if (name != "frames") {
                                                    if (name != "self") {
                                                      if (
                                                        name !=
                                                        "clientInformation"
                                                      ) {
                                                        if (
                                                          name != "navigator"
                                                        ) {
                                                          if (
                                                            name != "toolbar"
                                                          ) {
                                                            if (
                                                              name !=
                                                              "statusbar"
                                                            ) {
                                                              if (
                                                                name !=
                                                                "scrollbars"
                                                              ) {
                                                                if (
                                                                  name !=
                                                                  "personalbar"
                                                                ) {
                                                                  if (
                                                                    name !=
                                                                    "menubar"
                                                                  ) {
                                                                    if (
                                                                      name !=
                                                                      "locationbar"
                                                                    ) {
                                                                      if (
                                                                        name !=
                                                                        "history"
                                                                      ) {
                                                                        if (
                                                                          name !=
                                                                          "screen"
                                                                        ) {
                                                                          if (
                                                                            name !=
                                                                            "event"
                                                                          ) {
                                                                            if (
                                                                              name !=
                                                                              "clipboardData"
                                                                            ) {
                                                                              l[
                                                                                type
                                                                              ].push(
                                                                                name +
                                                                                  " =" +
                                                                                  (name.length <
                                                                                  36
                                                                                    ? Array(
                                                                                        36 -
                                                                                          name.length
                                                                                      ).join(
                                                                                        " "
                                                                                      )
                                                                                    : " ") +
                                                                                  (typeof data.length ==
                                                                                  "number"
                                                                                    ? "[object Object]"
                                                                                    : data) +
                                                                                  " (Ð´Ð»Ð¸Ð½Ð½Ð° Ð¼Ð°ÑÑÐ¸Ð²Ð° = " +
                                                                                  funcArraySelect(
                                                                                    "count",
                                                                                    data
                                                                                  ) +
                                                                                  ")"
                                                                              );
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
          }
        }
      }
    }
    if (type == "string") {
      if (name != "defaultstatus") {
        if (name != "defaultStatus") {
          if (name != "status") {
            if (name != "offscreenBuffering") {
              l[type].push(
                name +
                  " =" +
                  (name.length < 36 ? Array(36 - name.length).join(" ") : " ") +
                  data.replace(/\r/g, "\\r").replace(/\n/g, "\\n")
              );
            }
          }
        }
      }
    }
    if (type == "number") {
      if (name != "devicePixelRatio") {
        if (name != "length") {
          if (name != "pageYOffset") {
            if (name != "pageXOffset") {
              if (name != "scrollY") {
                if (name != "scrollX") {
                  if (name != "screenTop") {
                    if (name != "screenLeft") {
                      if (name != "screenY") {
                        if (name != "screenX") {
                          if (name != "innerWidth") {
                            if (name != "innerHeight") {
                              if (name != "outerWidth") {
                                if (name != "outerHeight") {
                                  if (name != "TEMPORARY") {
                                    if (name != "PERSISTENT") {
                                      if (name != "maxConnectionsPerServer") {
                                        l[type].push(
                                          name +
                                            " =" +
                                            (name.length < 36
                                              ? Array(36 - name.length).join(
                                                  " "
                                                )
                                              : " ") +
                                            data
                                        );
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
                }
              }
            }
          }
        }
      }
    }
    if (type == "boolean") {
      if (name != "closed") {
        if (name != "offscreenBuffering") {
          l[type].push(
            name +
              " =" +
              (name.length < 36 ? Array(36 - name.length).join(" ") : " ") +
              data
          );
        }
      }
    }
  }
  l["object"].sort();
  l["string"].sort();
  l["number"].sort();
  l["boolean"].sort();
  l =
    "============= object: ==============\r\n" +
    l["object"].join("\r\n") +
    "\r\n============= string: ==============\r\n" +
    l["string"].join("\r\n") +
    "\r\n============= number: ==============\r\n" +
    l["number"].join("\r\n") +
    "\r\n============= boolean: =============\r\n" +
    l["boolean"].join("\r\n");
  messege_button["close_err_print_r"] =
    "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='2' id='btnErrFocusPrint_r' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessageerrwindow\").style.display==\"\"){if(document.getElementById(\"textareaErrFocusPrint_r\")){document.getElementById(\"textareaErrFocusPrint_r\").focus();}}'																				onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close_err\");'><tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ°ÐºÑÑÑÑ</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
  funcmessage("close");
  funcmessage(
    "open_err",
    800,
    600,
    "ÐÑÐ²Ð¾Ð´ Ð²ÑÐµÑ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½ÑÑ js:",
    '<font size="2" style="font-family: Arial, sans-serif; color: #000000;">ÐÐ¾ÑÑÐµÐºÑÐ½Ð¾ ÑÐ°Ð±Ð¾ÑÐ°ÐµÑ Ð² GoogleChrome</font><br/><textarea rows="30" cols="94" style="width:774; height:520; resize:none;" wrap="off" tabindex="1" id="textareaErrFocusPrint_r">' +
      l +
      "</textarea><br/>",
    "close_err_print_r",
    "no",
    "no",
    "btnErrFocusPrint_r"
  );
}

//	ÑÑÐ½ÐºÑÐ¸Ñ Ð¿ÐµÑÐµÐ´Ð°ÑÐ¸ ÐºÐ¾Ð´Ð° ÐºÐ»Ð°Ð²Ð¸ÑÑ
function funcKeyDownBase(e) {
  var code = 0;
  if (e) {
    code = e.which;
  } else {
    e = window.event;
    code = e.keyCode;
  }
  if (code == 123) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  } else if (typeof funcKeyDown == "function") {
    funcKeyDown(e, code);
  }
}

//	Ð²ÐºÐ»Ð°Ð´ÐºÐ¸
function funcbookmark(action, all, data, bookmarkDefaultColor) {
  switch (action) {
    case "over": {
      document.getElementById("fontbookmarktext_" + data).style.color =
        "#" + varColorLinkActive;
      break;
    }
    case "out": {
      document.getElementById("fontbookmarktext_" + data).style.color =
        "#" + varColorLinkHover;
      break;
    }
    case "click": {
      document.getElementById("imgbookmark_0").style.marginLeft =
        data == 1 ? 0 : -28;
      if (!bookmarkDefaultColor) {
        bookmarkDefaultColor = "000000";
      }
      for (i = 1; i <= all; i++) {
        document.getElementById("fontbookmarktext_" + i).style.color =
          data == i ? "#" + bookmarkDefaultColor : "#" + varColorLinkHover;
        document.getElementById("fontbookmarktext_" + i).style.cursor =
          data == i ? "default" : "pointer";
        document.getElementById("fontbookmarktext_" + i).style.textDecoration =
          data == i ? "none" : "underline";
        document.getElementById("imgbookmark_" + i).style.marginLeft =
          data == i ? -70 : data == i + 1 ? -56 : -84;
        document.getElementById("tdbookmark_" + i).style.background =
          data == i
            ? "url(image/main/bookmark.png) top repeat-x"
            : "url(image/main/bookmark.png) bottom repeat-x";
        document.getElementById("divbookmark_" + i).style.display =
          data == i ? "" : "none";
        document.getElementById("divbookmarkcontext_" + i).style.display =
          data == i ? "" : "none";
      }
      document.getElementById("imgbookmark_" + all).style.marginLeft =
        data == all ? -14 : -42;
      funcshowprint();
      break;
    }
    default: {
    }
  }
}

//	print
function funcshowprint(head, title, body) {
  var i = 1,
    printHead = "",
    printTitle = "",
    printBody = "";
  if (document.getElementById("fonttitle")) {
    printTitle = document.getElementById("fonttitle").innerHTML;
  }
  while (document.getElementById("fontbookmarktext_" + i)) {
    if (
      document.getElementById("fontbookmarktext_" + i).style.cursor == "default"
    ) {
      printHead = document.getElementById("fontbookmarktext_" + i).innerHTML;
      if (document.getElementById("divbookmark_" + i)) {
        printBody = document.getElementById("divbookmark_" + i).innerHTML;
      }
    }
    i++;
  }
  if (document.getElementById("fontprinthead")) {
    document.getElementById("fontprinthead").innerHTML =
      typeof head == "undefined" ? printHead : head;
  }
  if (document.getElementById("fontprinttitle")) {
    document.getElementById("fontprinttitle").innerHTML =
      typeof title == "undefined" ? printTitle : title;
  }
  if (document.getElementById("divprintbody")) {
    document.getElementById("divprintbody").innerHTML =
      typeof body == "undefined" ? printBody : body;
  }
}

//	select
function funcselect(action, name, data, select_index) {
  if (document.getElementById("divselect")) {
    switch (action) {
      case "open": {
        win_x = 0;
        win_y = 0;
        i = document.getElementById("font" + name);
        document.getElementById("divselecttextselected").innerHTML =
          "<font size='" +
          i.size +
          "' style='font-family: " +
          i.style.fontFamily +
          "; color:" +
          i.style.color +
          "; text-decoration:" +
          i.style.textDecoration +
          "; cursor:pointer;' onclick='funcselect(\"close\");'>" +
          i.innerHTML +
          "</font>";
        while (i) {
          win_x += i.offsetLeft;
          win_y += i.offsetTop;
          i = i.offsetParent;
        }
        document.getElementById("divselect").style.marginLeft = win_x - 10;
        document.getElementById("divselect").style.marginTop = win_y - 1;
        l = Array();
        for (i = 0; i < data.length; i++) {
          if (i != select_index) {
            l.push(data[i]);
          } else {
            l.push(
              "<font size='2' style='font-family: Arial, sans-serif; color:#9d9d9d; cursor:default;'>" +
                data[i].replace(/<(([^<>])*)>/gi, "") +
                "</font>"
            );
          }
        }
        document.getElementById("divselecttext").innerHTML = l.join("<br/>");
        document.getElementById("divselect").style.display = "";
        break;
      }
      case "over": {
        document.getElementById("font" + name).style.color =
          "#" + varColorLinkActive;
        document.getElementById("img" + name).style.marginLeft = -28;
        break;
      }
      case "out": {
        document.getElementById("font" + name).style.color =
          "#" + varColorLinkHover;
        document.getElementById("img" + name).style.marginLeft = 0;
        break;
      }
      case "click": {
        document.getElementById("font" + name).innerHTML = data;
      }
      case "close": {
        document.getElementById("divselect").style.display = "none";
        break;
      }
      default: {
      }
    }
  }
}

//	list
function funclist(action, name, data, title) {
  if (document.getElementById("divlist")) {
    switch (action) {
      case "open": {
        if (document.getElementById(name)) {
          var win_x = 0,
            win_y = 0,
            i = document.getElementById(name),
            l = Array();
          while (i) {
            win_x += i.offsetLeft;
            win_y += i.offsetTop;
            if (i.nodeName != "BODY") {
              win_y -= i.scrollTop;
            }
            i = i.offsetParent;
          }
          if (!document.all) {
            win_y += document.body.scrollTop;
          }
          for (i = 0; i < data.length; i++) {
            if (document.getElementById(name).value.length <= data[i].length) {
              if (
                document.getElementById(name).value ==
                data[i].substr(0, document.getElementById(name).value.length)
              ) {
                l.push(
                  "<font size='2' style='font-family: Arial, sans-serif; color:#5d5d5d; cursor:pointer;' onmouseover='this.style.color=\"#" +
                    varColorLinkActive +
                    "\"'; onmouseout='this.style.color=\"#5d5d5d\";' onmousedown='document.getElementById(\"" +
                    name +
                    '").value=this.innerHTML; document.getElementById("' +
                    name +
                    "\").onkeyup();'>" +
                    data[i] +
                    "</font>"
                );
              }
            }
          }
          if (l.length > 0) {
            document.getElementById("divlist").style.marginLeft = win_x;
            document.getElementById("divlist").style.marginTop =
              win_y + document.getElementById(name).clientHeight;
            document.getElementById("divlisttitle").innerHTML =
              "<font size='2' style='font-family: Arial, sans-serif; color:#9d9d9d; cursor:default;'>" +
              title +
              "</font>";
            document.getElementById("divlisttext").innerHTML = l.join("<br/>");
            document.getElementById("divlist").style.display = "";
          } else {
            document.getElementById("divlist").style.display = "none";
          }
        }
        break;
      }
      case "close": {
        document.getElementById("divlist").style.display = "none";
        break;
      }
      default: {
      }
    }
  }
}

//	radio
function funcradio(action, name, data, radio_index) {
  if (data == "red") {
    data = -433;
  }
  switch (action) {
    case "click": {
      var i = 1;
      while (document.getElementById("img" + name + i)) {
        document.getElementById("img" + name + i).style.marginLeft =
          i == radio_index ? data : -391;
        i++;
      }
      break;
    }
    case "default": {
      break;
    }
    case "active": {
      break;
    }
    case "show": {
      var i = 1,
        j = 0;
      while (document.getElementById("img" + name + i)) {
        if (
          document
            .getElementById("img" + name + i)
            .style.marginLeft.replace(/\D/gi, "") != "391"
        ) {
          j = i;
        }
        i++;
      }
      return j;
      break;
    }
    default: {
    }
  }
}

//	context
function funccontext(
  action,
  data,
  posX,
  posY,
  posObj,
  showOnTheLeft,
  showOnTheBottom
) {
  if (document.getElementById("divcontexttext")) {
    switch (action) {
      case "show": {
        document.getElementById("divcontexttext").innerHTML = data;
        document.getElementById("divcontext").style.display = "";
        document.getElementById("divcontext_arrowTopLeft").style.display =
          "none";
        document.getElementById("divcontext_arrowTopRight").style.display =
          "none";
        document.getElementById("divcontext_arrowBottomLeft").style.display =
          "none";
        document.getElementById("divcontext_arrowBottomRight").style.display =
          "none";
        var posL = typeof posX == "number" ? posX : 0;
        var posT = typeof posY == "number" ? posY : 0;
        var arrL =
          showOnTheBottom == "bottom"
            ? "divcontext_arrowTopLeft"
            : "divcontext_arrowBottomLeft";
        var arrR =
          showOnTheBottom == "bottom"
            ? "divcontext_arrowTopRight"
            : "divcontext_arrowBottomRight";
        if (typeof posObj == "object") {
          var i = posObj;
          while (i) {
            posL += i.offsetLeft;
            posT += i.offsetTop;
            i = i.offsetParent;
          }
          posL -= 13;
          posT =
            showOnTheBottom == "bottom"
              ? posT + posObj.offsetHeight
              : posT - document.getElementById("divcontext").clientHeight;
        }
        if (posL != 0) {
          document.getElementById("divcontext").style.marginLeft = posL;
        }
        if (posT != 0) {
          document.getElementById("divcontext").style.marginTop = posT;
        }
        if (
          document.body.clientWidth + document.body.scrollLeft <
          posL + document.getElementById("divcontext").clientWidth
        ) {
          if (
            document
              .getElementById("divcontext")
              .style.marginLeft.replace(/\D/gi, "") -
              document.getElementById("divcontext").clientWidth -
              document.body.scrollLeft >=
            0
          ) {
            showOnTheLeft = "left";
          }
        }
        if (showOnTheLeft == "left") {
          document.getElementById(arrR).style.display = "";
          document.getElementById("divcontext").style.marginLeft =
            posL - document.getElementById("divcontext").clientWidth;
        } else {
          document.getElementById(arrL).style.display = "";
        }
        break;
      }
      case "close": {
        document.getElementById("divcontext").style.display = "none";
        break;
      }
      default: {
      }
    }
  }
}

//	drag&drop Ð¾ÐºÐ¾Ð½ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ð¹
function funcmessageMove(event) {
  if (varmessageMove_start != 0) {
    if (!event) {
      event = window.event;
    }
    if (varmessageMove_start == 1) {
      j = document.getElementById("divmessagewindow");
    }
    if (varmessageMove_start == 2) {
      j = document.getElementById("divmessagehelpwindow");
    }
    if (varmessageMove_start == 3) {
      j = document.getElementById("divmessageerrwindow");
    }
    var i = 0;
    if (event.pageX) {
      i = event.pageX;
    } else {
      if (event.clientX) {
        i = event.clientX;
      }
    }
    j.style.left = 0;
    j.style.left = 0;
    j.style.marginLeft = i - varmessageMove_startX;
    j.style.marginLeft = i - varmessageMove_startX;
    var i = 0;
    if (event.pageY) {
      i = event.pageY;
    } else {
      if (event.clientY) {
        i = event.clientY;
      }
    }
    j.style.top = 0;
    j.style.top = 0;
    j.style.marginTop = i - varmessageMove_startY;
    j.style.marginTop = i - varmessageMove_startY;
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
}
function funcmessageDrag(event) {
  if (!event) {
    event = window.event;
  }
  var i =
    event.srcElement.id != ""
      ? event.srcElement.id
      : event.srcElement.parentNode.id != ""
      ? event.srcElement.parentNode.id
      : event.srcElement.parentNode.parentNode.id;
  varmessageMove_start = 0;
  if (i == "tdmessagewindowhead") {
    varmessageMove_start = 1;
  }
  if (i == "tdmessagehelpwindowhead") {
    varmessageMove_start = 2;
  }
  if (i == "tdmessageerrwindowhead") {
    varmessageMove_start = 3;
  }
  if (event.pageX) {
    varmessageMove_startX = event.pageX;
  } else {
    if (event.clientX) {
      varmessageMove_startX = event.clientX;
    }
  }
  varmessageMove_startX =
    varmessageMove_startX -
    event.srcElement.offsetParent.offsetParent.offsetLeft;
  if (event.pageY) {
    varmessageMove_startY = event.pageY;
  } else {
    if (event.clientY) {
      varmessageMove_startY = event.clientY;
    }
  }
  varmessageMove_startY =
    varmessageMove_startY -
    event.srcElement.offsetParent.offsetParent.offsetTop;
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

function funcmessageDrop() {
  varmessageMove_start = 0;
}

//	Ð¿Ð¾ÑÐ²Ð»ÐµÐ½Ð¸Ðµ Ð»ÐµÐ²Ð¾Ð³Ð¾ Ð´Ð¸Ð²Ð°
function funcdivroll(action) {
  switch (action) {
    case "over": {
      document.getElementById("divroll").style.marginLeft = 0;
      document.getElementById("divroll_txt").style.visibility = "visible";
      break;
    }
    case "out": {
      if (document.getElementById("divroll")) {
        document.getElementById("divroll").style.marginLeft = -210;
      }
      if (document.getElementById("divroll_txt")) {
        document.getElementById("divroll_txt").style.visibility = "hidden";
      }
      break;
    }
    default: {
    }
  }
}

//	ÑÑÐ½ÐºÑÐ¸Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸ Ð·Ð°Ð¿ÑÐ¾ÑÐ° / Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ñ Ð¾ÑÐ²ÐµÑÐ°
var objTransportAjax;
function funcAjaxInportExport(
  method,
  timeout,
  type,
  actions,
  name,
  data,
  page_name,
  func_err
) {
  i = new Date();
  date =
    i.getFullYear() +
    "." +
    i.getMonth() +
    "." +
    i.getDate() +
    "|" +
    i.getHours() +
    "." +
    i.getMinutes() +
    "." +
    i.getSeconds();
  if (method == "GET") {
    l =
      "main/guru.php?type=" +
      type +
      "&actions=" +
      actions +
      "&name=" +
      funcUrlCoder("code", name) +
      "&data=" +
      funcUrlCoder("code", data) +
      "&date=" +
      date +
      "&PHPSESSID=" +
      varsid;
  } //	ÑÐ¾Ð·Ð´Ð°Ð½Ð¸Ðµ get Ð´Ð»Ñ get Ð·Ð°Ð¿ÑÐ¾ÑÐ°
  if (method == "POST") {
    l = "main/guru.php?type=" + type + "&actions=" + actions;
    name = funcUrlCoder("code", name);
    data = funcUrlCoder("code", data);
  } //	ÑÐ¾Ð·Ð´Ð°Ð½Ð¸Ðµ get Ð´Ð»Ñ post Ð·Ð°Ð¿ÑÐ¾ÑÐ°
  try {
    objTransportAjax = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (j) {
    //	ÑÐ¾Ð·Ð´Ð°Ð½Ð¸Ðµ ÑÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ°
    try {
      objTransportAjax = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (j) {
      objTransportAjax =
        typeof XMLHttpRequest != "undefined" ? new XMLHttpRequest() : false;
    }
  }
  objTransportAjax.open(method, l, true); //	Ð¿ÑÑÑ Ð·Ð°Ð¿ÑÐ¾ÑÐ° open(method, URL, async, userName, password)
  objTransportAjax.onreadystatechange = function () {
    if (objTransportAjax.readyState == 4) {
      //	Ð´Ð°Ð½Ð½ÑÐµ Ð¿Ð¾Ð»ÑÑÐµÐ½Ñ
      try {
        clearInterval(editors_Flag);
      } catch (err) {
        //	Ð±Ð»Ð¾ÐºÐ¸ÑÑÐµÐ¼ Ð¾ÑÐ¼ÐµÐ½Ñ Ð·Ð°Ð¿ÑÐ¾ÑÐ°
      }
      if (objTransportAjax.status == 200) {
        //	Ð¿ÑÐ¸ÑÐ»Ð¸ Ð¿Ð¾Ð»Ð½Ð¾ÑÑÑÑ
        try {
          eval(objTransportAjax.responseText);
        } catch (err) {
          //	Ð²ÑÐ¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð»ÑÑÐµÐ½Ð½Ð¾Ð³Ð¾ ÐºÐ¾Ð´Ð°
          eval(func_err + "('js');"); //	Ð·Ð°Ð¿ÑÑÐº ÑÑÐ½ÐºÑÐ¸Ð¸ Ð¾Ð±ÑÐ°Ð±Ð¾ÑÑÐ¸ÐºÐ° Ð¾ÑÐ¸Ð±Ð¾Ðº
          if (document.getElementById("divroll")) {
            l = "ÐÐ¨ÐÐÐÐ Ð ÐÐ ÐÐÐ¯Ð¢ÐÐ AJAX ÐÐ¢ÐÐÐ¢Ð:<br/>";
            for (i in err) {
              l += err[i] + "<br/>";
            }
            l =
              "<HTML>" +
              l +
              "<textarea rows='40' cols='100'>" +
              objTransportAjax.responseText +
              "</textarea></HTML>";
            windAjaxErr = window.open("", "AjaxErr");
            windAjaxErr.document.write(l);
          }
        }
      } else {
        l = func_err + "(" + objTransportAjax.status + ");"; //	ÑÑÐ½ÐºÑÐ¸Ñ Ð¾Ð±ÑÐ°Ð±Ð¾ÑÑÐ¸ÐºÐ° Ð¾ÑÐ¸Ð±Ð¾Ðº
        setTimeout(l, 120000); //	Ð·Ð°Ð¿ÑÑÐºÐ°ÐµÐ¼ ÑÐµÑÐµÐ· 2 Ð¼Ð¸Ð½
      }
    }
  };
  objTransportAjax.setRequestHeader("PAGE_NAME", page_name); //	ÑÐ°Ð¿ÐºÐ° Ð·Ð°Ð¿ÑÐ¾ÑÐ°
  if (method == "POST") {
    objTransportAjax.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
  } //	ÑÐ°Ð¿ÐºÐ° Ð·Ð°Ð¿ÑÐ¾ÑÐ°
  if (method == "GET") {
    objTransportAjax.send(null);
  } //	Ð¾ÑÐ¿ÑÐ°Ð²Ð¸ÑÑ get Ð·Ð°Ð¿ÑÐ¾Ñ
  if (method == "POST") {
    objTransportAjax.send(
      "name=" +
        name +
        "&data=" +
        data +
        "&date=" +
        date +
        "&PHPSESSID=" +
        varsid
    );
  } //	Ð¾ÑÐ¿ÑÐ°Ð²Ð¸ÑÑ post Ð·Ð°Ð¿ÑÐ¾Ñ
  try {
    clearInterval(editors_Flag);
  } catch (err) {}
  editors_Flag = setTimeout(function () {
    objTransportAjax.abort();
  }, timeout); //	Ð·Ð°Ð¿ÑÑÐºÐ°ÐµÐ¼ Ð¾ÑÐ¼ÐµÐ½Ñ Ð·Ð°Ð¿ÑÐ¾ÑÐ° ÑÐµÑÐµÐ· ÑÐºÐ°Ð·Ð°Ð½Ð½Ð¾Ðµ Ð²ÑÐµÐ¼Ñ (ÐµÑÐ»Ð¸ ÑÐ°Ðº Ð¸ Ð½Ðµ Ð¿ÑÐ¸Ð¹Ð´ÐµÑ Ð¾ÑÐ²ÐµÑ)
}

//	Ð²ÑÐ²Ð¾Ð´ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ð¹
function funcmessage(
  action,
  size_w,
  size_h,
  head,
  body,
  button,
  button_help,
  button_exit,
  focus_id,
  size_help_w,
  size_help_h,
  help_head,
  help_body,
  help_button,
  focus_id_help
) {
  var varHelpWindow = "no";
  if (typeof button_exit == "undefined") {
    button_exit = "no";
  } else {
    if (button_exit != "no") {
      button_exit = "yes";
    } else {
      button_exit = "no";
    }
  }
  if (typeof button_help == "undefined") {
    button_help = "no";
  } else {
    if (button_help != "no") {
      button_help = "yes";
    } else {
      button_help = "no";
    }
  }
  if (typeof size_help_w != "undefined") {
    if (typeof size_help_h != "undefined") {
      if (typeof help_head != "undefined") {
        if (typeof help_body != "undefined") {
          if (typeof help_button != "undefined") {
            varHelpWindow = "yes";
          }
        }
      }
    }
  }
  switch (action) {
    case "open": {
      document.getElementById("divmessagewindow").style.width = size_w;
      document.getElementById("divmessagewindow").style.height = size_h;
      document.getElementById("divmessagewindow").style.left = "50%";
      document.getElementById("divmessagewindow").style.top = "50%";
      document.getElementById("divmessagewindow").style.marginLeft =
        -size_w / 2;
      document.getElementById("divmessagewindow").style.marginTop = -size_h / 2;
      document.getElementById("tdmessagewindowhead").innerHTML =
        "<font class='font_shadow_bolder' style='font-family: Arial, sans-serif; font-size: 12px; color: #ffffff;'>" +
        head +
        "/*[if IE]><span class='span_shadow_bolder'>" +
        head +
        "</span><![endif]*/</font>";
      document.getElementById("divmessagewindowbody").innerHTML =
        body +
        "<br/><table class='table_fixed' onselectstart='return false;' style='-moz-user-select: none; -khtml-user-select: none; user-select: none;' width='100%'><tr width='100%'><td width='100%' align='center' valign='middle'>" +
        messege_button[button] +
        "</td></tr></table><br/>";
      document.getElementById("tablebtnclosemessagewindow").style.display =
        button_exit == "yes" ? "" : "none";
      document.getElementById("tablebtnhelpmessagewindow").style.display =
        button_help == "yes" ? "" : "none";
      document.getElementById("divmessagewindow").style.display = "";
      document.getElementById("divmessage").style.visibility = "visible";
      varmessageTabIndexId1 = focus_id;
      varmessageHelpTabIndexId1 = focus_id_help;
      document.getElementById(varmessageTabIndexId1).focus();
      if (varHelpWindow == "yes") {
        document.getElementById(
          "divmessagehelpwindow"
        ).style.width = size_help_w;
        document.getElementById(
          "divmessagehelpwindow"
        ).style.height = size_help_h;
        document.getElementById("divmessagehelpwindow").style.left = "50%";
        document.getElementById("divmessagehelpwindow").style.top = "50%";
        document.getElementById("divmessagehelpwindow").style.marginLeft =
          -size_help_w / 2;
        document.getElementById("divmessagehelpwindow").style.marginTop =
          -size_help_h / 2;
        document.getElementById("tdmessagehelpwindowhead").innerHTML =
          "<font class='font_shadow_bolder' style='font-family: Arial, sans-serif; font-size: 12px; color: #ffffff;'>" +
          help_head +
          "/*[if IE]><span class='span_shadow_bolder'>" +
          help_head +
          "</span><![endif]*/</font>";
        document.getElementById("divmessagehelpwindowbody").innerHTML =
          help_body +
          "<br/><table class='table_fixed' onselectstart='return false;' style='-moz-user-select: none; -khtml-user-select: none; user-select: none;' width='100%'><tr width='100%'><td width='100%' align='center' valign='middle'>" +
          messege_button[help_button] +
          "</td></tr></table><br/>";
      }
      break;
    }
    case "open_err": {
      document.getElementById("divmessageerrwindow").style.width = size_w;
      document.getElementById("divmessageerrwindow").style.height = size_h;
      document.getElementById("divmessageerrwindow").style.left = "50%";
      document.getElementById("divmessageerrwindow").style.top = "50%";
      document.getElementById("divmessageerrwindow").style.marginLeft =
        -size_w / 2;
      document.getElementById("divmessageerrwindow").style.marginTop =
        -size_h / 2;
      document.getElementById("tdmessageerrwindowhead").innerHTML =
        "<font class='font_shadow_bolder' style='font-family: Arial, sans-serif; font-size: 12px; color: #ffffff;'>" +
        head +
        "/*[if IE]><span class='span_shadow_bolder'>" +
        head +
        "</span><![endif]*/</font>";
      document.getElementById("divmessageerrwindowbody").innerHTML =
        body +
        "<br/><table class='table_fixed' onselectstart='return false;' style='-moz-user-select: none; -khtml-user-select: none; user-select: none;' width='100%'><tr width='100%'><td width='100%' align='center' valign='middle'>" +
        messege_button[button] +
        "</td></tr></table><br/>";
      document.getElementById("tablebtnclosemessageerrwindow").style.display =
        button_exit == "yes" ? "" : "none";
      document.getElementById("divmessageerrwindow").style.display = "";
      document.getElementById("divmessageerrshadow").style.display = "";
      document.getElementById("divmessage").style.visibility = "visible";
      varmessageErrTabIndexId1 = focus_id;
      document.getElementById(varmessageErrTabIndexId1).focus();
      break;
    }
    case "close": {
      document.getElementById("divmessagewindow").style.display = "none";
      document.getElementById("divmessagehelpwindow").style.display = "none";
      document.getElementById("divmessageerrwindow").style.display = "none";
      document.getElementById("divmessage").style.visibility = "hidden";
      break;
    }
    case "close_help": {
      document.getElementById("divmessagehelpwindow").style.display = "none";
      document.getElementById(varmessageTabIndexId1).focus();
      break;
    }
    case "close_err": {
      document.getElementById("divmessageerrwindow").style.display = "none";
      document.getElementById("divmessageerrshadow").style.display = "none";
      document.getElementById("divmessage").style.visibility =
        document.getElementById("divmessagewindow").style.display == "" ||
        document.getElementById("divmessagehelpwindow").style.display == ""
          ? "visible"
          : "hidden";
      if (document.getElementById("divmessagehelpwindow").style.display == "") {
        document.getElementById(varmessageHelpTabIndexId1).focus();
      } else {
        if (document.getElementById("divmessagewindow").style.display == "") {
          document.getElementById(varmessageTabIndexId1).focus();
        }
      }
      break;
    }
    case "close_all": {
      document.getElementById("divmessagewindow").style.display = "none";
      document.getElementById("divmessagehelpwindow").style.display = "none";
      document.getElementById("divmessageerrwindow").style.display = "none";
      document.getElementById("divmessageerrshadow").style.display = "none";
      document.getElementById("divmessage").style.visibility = "hidden";
      break;
    }
    default: {
    }
  }
}

//	Ð²ÑÐ²Ð¾Ð´ Ð²Ð¸Ð´ÐµÐ¾ Ð¸ Ð¸Ð·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ð¹
function funcShowVidImg(action, num, arr, param, arrN, arrL) {
  //	Ð³Ð´Ðµ  num	=	0-n			Ð½Ð¾Ð¼ÐµÑ ÑÐ°Ð¹Ð»Ð° Ð² Ð¼Ð°ÑÑÐ¸Ð²Ðµ "arr"
  //	 arr 	=	Ð¼Ð°ÑÑÐ¸Ð²		Ð¿ÑÑÐ¸ Ðº ÑÐ°Ð¹Ð»Ð°Ð¼
  if (!arrN) {
    arrN = Array();
  } //	[arrN]	=	Ð¼Ð°ÑÑÐ¸Ð²		Ð°Ð»ÑÑÐµÑÐ½Ð°ÑÐ¸Ð²Ð½ÑÐµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ñ ÑÐ°Ð¹Ð»Ð¾Ð²
  if (!arrL) {
    arrL = Array();
  } //	[arrL]	=	Ð¼Ð°ÑÑÐ¸Ð²		ÑÑÑÐ»ÐºÐ¸ Ð¿ÑÐ¸ Ð½Ð°Ð¶Ð°ÑÐ¸Ð¸ Ð½Ð° ÐºÐ°ÑÑÐ¸Ð½ÐºÑ Ð¸Ð»Ð¸ Ð²Ð¸Ð´ÐµÐ¾ (ÐµÑÐ»Ð¸ ÑÑÐ¾ ÐºÐ°ÑÑÐ°, ÑÐ¾ [arrL] - Ð¼Ð°ÑÑÐ¸Ð² ÑÐ»Ð¾ÐµÐ² ÐºÐ°ÑÑÑ Ñ Ð¿Ð°ÑÐ°Ð¼ÐµÑÑÐ°Ð¼Ð¸: 'X:Y:M:P', Ð³Ð´Ðµ X Ð¸ Y - Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ Ð¾ÑÐ½Ð¾Ð²Ð½Ð¾Ð³Ð¾ Ð¾Ð±ÑÐµÐºÑÐ° Ð½Ð° Ð´Ð°Ð½Ð½Ð¾Ð¼ ÑÐ»Ð¾Ðµ ÐºÐ°ÑÑÑ Ð² Ð¿Ð¸ÐºÑÐµÐ»Ð°Ñ Ð¾Ñ Ð²ÐµÑÑÐ½ÐµÐ³Ð¾ Ð»ÐµÐ²Ð¾Ð³Ð¾ ÑÐ³Ð»Ð°, Ð° M - ÐºÐ¾Ð»Ð¸ÑÐµÑÑÐ²Ð¾ Ð¼ÐµÑÑÐ¾Ð² Ð² P Ð¿Ð¸ÐºÑÐµÐ»Ð°Ñ Ð´Ð°Ð½Ð½Ð¾Ð³Ð¾ ÑÐ»Ð¾Ñ ÐºÐ°ÑÑÑ, Ð¿Ð¾ÑÐ»Ðµ Ð²ÑÐµÑ ÑÐ»Ð¾ÐµÐ² Ð¸Ð´ÐµÑ Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸ÑÐµÐ»ÑÐ½ÑÐ¹ Ð¿Ð°ÑÐ°Ð¼ÐµÑÑ Ð¼Ð°ÑÑÐ¸Ð²Ð° 'W:N:L' , Ð³Ð´Ðµ: W - ÑÐ¸ÑÐ¸Ð½Ð° ÐºÐ½Ð¾Ð¿ÐºÐ¸, N - Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐºÐ½Ð¾Ð¿ÐºÐ¸, L - ÑÑÑÐ»ÐºÐ° ÐºÐ½Ð¾Ð¿ÐºÐ¸ Ð½Ð° Ð°Ð»ÑÑÐµÑÐ½Ð°ÑÐ¸Ð²Ð½ÑÑ ÐºÐ°ÑÑÑ)
  if (!param) {
    param = "";
  } //	[param]	=	zoom:		0...10; - Ð¿ÑÐ¸Ð±Ð»Ð¸Ð¶ÐµÐ½Ð¸Ðµ (0 Ð·Ð½Ð°ÑÐ¸Ñ ÐºÐ°ÑÑÐ¸Ð½ÐºÐ° Ð¿Ð¾Ð»Ð½Ð¾ÑÑÑÑ Ð²Ð¿Ð¸ÑÐ°Ð½Ð° Ð² Ð¾ÐºÐ½Ð¾);
  //							map;	- ÐºÐ°ÑÑÐ° (ÑÐ¾Ð³Ð´Ð° arr - Ð¼Ð°ÑÑÐ¸Ð² ÑÐ»Ð¾ÐµÐ² Ð¿ÑÐ¸Ð±Ð»Ð¸Ð¶ÐµÐ½Ð¸Ñ);
  //							Ð¾Ð¿ÑÑÐµÐ½	- Ð±ÐµÐ· Ð¿ÑÐ¸Ð±Ð»Ð¸Ð¶ÐµÐ½Ð¸Ñ
  //				avtostart:	1;		- Ð²Ð¸Ð´ÐµÐ¾ Ð½Ð°ÑÐ¸Ð½Ð°ÐµÑ Ð¿ÑÐ¾Ð¸Ð³ÑÑÐ²Ð°ÑÑÑÑ ÑÑÐ°Ð·Ñ
  //							0;		- Ð²Ð¸Ð´ÐµÐ¾ Ð½Ð°ÑÐ¸Ð½Ð°ÐµÑ Ð¿ÑÐ¾Ð¸Ð³ÑÑÐ²Ð°ÑÑÑÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð¿Ð¾ÑÐ»Ðµ ÐºÐ»Ð¸ÐºÐ°
  //							Ð¾Ð¿ÑÑÐµÐ½	- Ð²Ð¸Ð´ÐµÐ¾ Ð½Ð°ÑÐ¸Ð½Ð°ÐµÑ Ð¿ÑÐ¾Ð¸Ð³ÑÑÐ²Ð°ÑÑÑÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð¿Ð¾ÑÐ»Ðµ ÐºÐ»Ð¸ÐºÐ°
  var arrParam = param.split(";");
  for (var i = 0; i < arrParam.length; i++) {
    arrParam[i] = arrParam[i].split(":");
    arrParam[(arrParam[i][0] + "").replace(/^\s*|\s*$/, "")] = (
      arrParam[i][1] + ""
    ).replace(/^\s*|\s*$/, "");
  }
  if (typeof arrParam["zoom"] == "undefined") {
    arrParam["zoom"] = "";
  }
  if (typeof arrParam["avtostart"] == "undefined") {
    arrParam["avtostart"] = "";
  }
  switch (
    action //	Ð³Ð»Ð¾Ð±Ð°Ð»ÑÐ½ÑÐµ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½ÑÐµ: varSlideShowVidImg, varMoveVidImgLnk, arrZoomCenterXYLT, objShowVidImgThisImg, objShowVidImgPrevImg, objShowVidImgNextImg
  ) {
    case "open": {
      varMoveVidImgLnk = 0; //	0-Ð·Ð°Ð´Ð²Ð¸Ð½ÑÑÑ Ð¿ÑÐµÐ²ÑÑÑÐºÐ¸, 1-Ð¿Ð¾ÐºÐ°Ð·Ð°ÑÑ Ð»ÐµÐ²ÑÑ Ð¿ÑÐµÐ²ÑÑÑÐºÑ, 2-Ð¿Ð¾ÐºÐ°Ð·Ð°ÑÑ Ð¿ÑÐ°Ð²ÑÑ Ð¿ÑÐµÐ²ÑÑÑÐºÑ, 3-ÑÐºÑÑÑÑ Ð¿ÑÐµÐ²ÑÑÑÐºÐ¸
      varSlideShowVidImg = 0; //	0-Ð½ÐµÑ, 1-ÐµÑÑÑ
      varMouseDownMoveImg = 0; //	Ð½Ð°Ð¶Ð°ÑÐ° Ð»ÐµÐ²Ð°Ñ ÐºÐ½Ð¾Ð¿ÐºÐ° Ð¼ÑÑÐ¸ Ð´Ð»Ñ ÑÐ´Ð²Ð¸Ð³Ð° ÐºÐ°ÑÑÐ¸Ð½ÐºÐ¸
      arrMoveClickXY = [0, 0]; //	Ð¼ÐµÑÑÐ¾ Ð³Ð´Ðµ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ Ð½Ð°Ð¶Ð°Ð» Ð»ÐµÐ²ÑÑ ÐºÐ½Ð¾Ð¿ÐºÑ Ð¼ÑÑÐ¸ Ð´Ð»Ñ ÑÐ´Ð²Ð¸Ð³Ð° ÐºÐ°ÑÑÐ¸Ð½ÐºÐ¸
      arrZoomCenterXYLT = [240, 160, 0, 0]; //	XY - ÑÐµÐ½ÑÑ ÑÐ¸ÑÑÐ½ÐºÐ°, Ð¸Ð»Ð¸ Ð¾ÑÐ½Ð¾Ð²Ð½Ð¾Ð¹ Ð¾Ð±ÑÐµÐºÑ ÑÐ»Ð¾Ñ ÐºÐ°ÑÑÑ, LT - ÑÐ¼ÐµÑÐµÐ½Ð¸Ðµ ÑÑÐ¾Ð³Ð¾ ÑÐµÐ½ÑÑÐ° Ð¾ÑÐ½Ð¾ÑÐ¸ÑÐµÐ»ÑÐ½Ð¾ Ð²ÐµÑÑÐ½ÐµÐ³Ð¾ Ð»ÐµÐ²Ð¾Ð³Ð¾ ÑÐ³Ð»Ð° ÑÐ¸ÑÑÐ½ÐºÐ°, Ð¸Ð»Ð¸ ÑÐ»Ð¾Ñ ÐºÐ°ÑÑÑ
      if (arrParam["zoom"] == "map") {
        if (arrL[num].split(":").length >= 4) {
          arrZoomCenterXYLT[2] = arrL[num]
            .split(":")[0]
            .replace(/^\s*|\s*$/, "");
          arrZoomCenterXYLT[3] = arrL[num]
            .split(":")[1]
            .replace(/^\s*|\s*$/, "");
        }
      }
      try {
        clearTimeout(timSlideShowVidImg);
      } catch (err) {} //	ÑÐ°Ð¹Ð¼ÐµÑ Ð´Ð»Ñ ÑÐ»Ð°Ð¹Ð´ÑÐ¾Ñ
      for (var i = 0; i < arr.length; i++) {
        if (typeof arrL[i] == "undefined") {
          arrL[i] =
            funcShowVidImg("file_info", i, arr, param, arrN, arrL)[5] == 3
              ? arr[i]
              : "";
        }
      }
      var varBody =
        "<img src='image/main/pset_none.gif' width='5' height='5'/><br/>";
      varBody += "<div class='div_in_back'>";
      varBody +=
        "<img src='image/main/pset_none.gif'	width='480'  height='320'/>";
      varBody +=
        "<div class='div_in_front'				width='100%' height='100%'	><img src='image/main/load.gif' width='68' height='64' style='margin-Left:206; margin-Top:128;'/></div>";
      varBody +=
        "<div class='div_in_front'		 style='width: 480;  height: 320;'	id='divShowVidImgCenter'><div style='width:100%; height:100%; position:absolute; overflow:hidden;'></div><div style='width:100%; height:100%; position:absolute; overflow:hidden; margin-Left:100%;'></div><div style='width:100%; height:100%; position:absolute; overflow:hidden; visibility:hidden;'><img src='image/main/play_video.png' width='50' height='50' style='position:absolute; left:50%; top:50%; margin-Left:-25; margin-Top:-25;'/></div></div>";
      varBody +=
        "<div class='div_in_front'				width='100%' height='100%'	id='divShowVidImgPrevNextMove'>";
      varBody +=
        "<img	src='image/main/pset_none.gif'	width='480'  height='320'  style='position:absolute;' onmousemove='funcShowVidImg(\"mouse_move\",0,event,\"" +
        param +
        '");\'								onmouseout=\'funcShowVidImg("move_img_lnk",0); funcShowVidImg("mouse_up",0,[],"' +
        param +
        '");\' onmousedown=\'funcShowVidImg("mouse_down",0,event,"' +
        param +
        '");\' onmouseup=\'funcShowVidImg("mouse_up",0,[],"' +
        param +
        "\");' onmousewheel='funcShowVidImg(\"mouse_scroll\",0,event);'/>";
      varBody +=
        "<div	id='divShowVidImgFlash'			width='100%' height='100%' style='position:absolute; overflow:hidden; visibility:hidden;'></div>";
      varBody +=
        "<div	id='divShowVidImgPrev'			width='123'  height='113'  style='position:absolute; overflow:hidden; top:50%; margin-Left:-100; margin-Top:-56; visibility:hidden; cursor:pointer;'	onmouseout='funcShowVidImg(\"move_img_lnk\",0);'					onmouseover='funcShowVidImg(\"move_img_lnk\",1);'><div width='123' height='113' class='div_in_back'><img src='image/main/pset_none.gif' width='123' height='113'/><div class='div_in_front' style='width:99; height:67; margin-Left:12; margin-Top:23; background-color:#" +
        varColorTextHead +
        ";'><img src='image/main/pset_none.gif' width='1' height='1'/></div><div class='div_in_front' style='width:18; height:12; margin-Left:35; margin-Top:90; background-color:#" +
        varColorTextHead +
        ";'><img src='image/main/pset_none.gif' width='1' height='1'/></div><div class='div_in_front' style='width:18; height:12; margin-Left:70; margin-Top:11; background-color:#" +
        varColorTextHead +
        ";'><img src='image/main/pset_none.gif' width='1' height='1'/></div><div class='div_in_front'><div style='width:99; height:67; overflow:hidden; margin-Left:12; margin-Top:23;'></div></div><div class='div_in_front' style='visibility:hidden;'><img src='image/main/play_video.png' width='50' height='50' style='margin-Left:36; margin-Top:31;'/></div><div class='div_in_front'><img src='image/main/gallery_prev_or_next.png' width='123' height='113'/></div></div></div>";
      varBody +=
        "<div	id='divShowVidImgNext'			width='123'  height='113'  style='position:absolute; overflow:hidden; top:50%; margin-Left: 458; margin-Top:-56; visibility:hidden; cursor:pointer;'	onmouseout='funcShowVidImg(\"move_img_lnk\",0);'					onmouseover='funcShowVidImg(\"move_img_lnk\",2);'><div width='123' height='113' class='div_in_back'><img src='image/main/pset_none.gif' width='123' height='113'/><div class='div_in_front' style='width:99; height:67; margin-Left:12; margin-Top:23; background-color:#" +
        varColorTextHead +
        ";'><img src='image/main/pset_none.gif' width='1' height='1'/></div><div class='div_in_front' style='width:18; height:12; margin-Left:35; margin-Top:90; background-color:#" +
        varColorTextHead +
        ";'><img src='image/main/pset_none.gif' width='1' height='1'/></div><div class='div_in_front' style='width:18; height:12; margin-Left:70; margin-Top:11; background-color:#" +
        varColorTextHead +
        ";'><img src='image/main/pset_none.gif' width='1' height='1'/></div><div class='div_in_front'><div style='width:99; height:67; overflow:hidden; margin-Left:12; margin-Top:23;'></div></div><div class='div_in_front' style='visibility:hidden;'><img src='image/main/play_video.png' width='50' height='50' style='margin-Left:36; margin-Top:31;'/></div><div class='div_in_front'><img src='image/main/gallery_prev_or_next.png' width='123' height='113'/></div></div></div>";
      varBody +=
        "<div	id='divShowVidImgBtnPlay'		width= '50'  height= '50'  style='position:absolute; overflow:hidden; top:50%; margin-Left: 216; margin-Top:-25; visibility:hidden; cursor:pointer;'	onmouseout='this.childNodes[0].src=\"image/main/pset_none.gif\";'	onmouseover='this.childNodes[0].src=\"image/main/play_video.png\";'><img src='image/main/pset_none.gif' width='50' height='50'/></div>";
      varBody +=
        "<div	id='divShowVidImgBtnOpen'		width= '76'  height= '22'  style='position:absolute; overflow:hidden; top:50%; margin-Left: 202; margin-Top: 40; visibility:hidden;'><div style='overflow:hidden; width:76; height:22;'><a href='.' onmouseover='this.childNodes[0].style.marginLeft=-77;' onmouseout='this.childNodes[0].style.marginLeft=0;'><img src='image/main/video.png' style='margin-Left: 0; margin-Top:-38;'/></a></div></div>";
      varBody +=
        "<div	id='divShowVidImgBtnZoom'		width=  '1'  height=  '1'  style='position:absolute; overflow:auto;                   left:  10;        Top: 10; visibility:hidden;'></div>";
      varBody += "</div>";
      varBody += "</div>";
      varBody +=
        "<img src='image/main/pset_white.gif' width='480' height='2' style='position:relative; margin-Left:0; margin-Top:0;'/>";
      messege_button["show_vid_img"] = funcShowVidImg(
        "create_btn",
        arrParam["zoom"] == "map" ? 3 : 1,
        arr,
        param,
        arrN,
        arrL
      );
      funcmessage(
        "open",
        507,
        390,
        "ÐÑÐºÑÑÑÐ¸Ðµ...",
        varBody,
        "show_vid_img",
        "no",
        "yes",
        "btnSlideShowFocus"
      );
      document.getElementById(
        "tablebtnclosemessagewindow"
      ).onclick = function () {
        funcShowVidImg("close");
      };
      funcShowVidImg("go_to_num", num, arr, param, arrN, arrL);
      break;
    }
    case "close": {
      function i() {
        return navigator.appName.indexOf("Microsoft") >= 0
          ? window["objShowVidImgFlash"]
          : document["objShowVidImgFlash"];
      }
      try {
        i().sendToAS("Close");
      } catch (err) {}
      i = "";
      document.getElementById("tablebtnclosemessagewindow").onclick = "";
      break;
    }
    case "full_screen": {
      var k = document.createElement("div"),
        i = document.createElement("div"),
        j = document.getElementById("divShowVidImgFlash").innerHTML;
      document.getElementById("divShowVidImgCenter").style.width = "100%";
      document.getElementById("divShowVidImgCenter").style.height = "100%";
      k.className = "div_in_back";
      k.id = "divFullScreenShowVidImg";
      k.innerHTML =
        "<img src='image/main/pset_black.gif' width='100%' height='100%' style='filter: alpha(opacity=50); -moz-opacity: .5; opacity: .5; -khtml-opacity: .5;'/>";
      i.style.position = "absolute";
      i.style.left = 40;
      i.style.top = 10;
      i.style.cursor = "default";
      i.innerHTML =
        "<font id='fontShowVidImgName' size='3' style='font-family: Arial, sans-serif; color:#dddddd;'>" +
        document.getElementById("fontShowVidImgName").innerHTML +
        "</font>";
      document
        .getElementById("fontShowVidImgName")
        .parentNode.removeChild(document.getElementById("fontShowVidImgName"));
      document.getElementById("divShowVidImgFlash").innerHTML = "";
      k.appendChild(document.getElementById("divShowVidImgCenter"));
      k.appendChild(document.getElementById("divShowVidImgPrevNextMove"));
      k.appendChild(
        funcShowVidImg(
          "create_btn",
          arrParam["zoom"] == "map" ? 4 : 2,
          arr,
          param,
          arrN,
          arrL
        )
      );
      k.appendChild(i);
      document.getElementById("tablebtnclosemessagewindow").onclick = "";
      funcmessage("close_all");
      document.getElementById("divmessage").appendChild(k);
      document.getElementById("divShowVidImgFlash").innerHTML = j;
      document.getElementById(
        "divShowVidImgPrevNextMove"
      ).childNodes[0].style.width = "100%";
      document.getElementById(
        "divShowVidImgPrevNextMove"
      ).childNodes[0].style.height = "100%";
      arrZoomCenterXYLT[0] +=
        document
          .getElementById("divShowVidImgCenter")
          .childNodes[0].childNodes[0].style.marginLeft.replace(
            /[a-z\s\-]/g,
            ""
          ) -
        1 +
        1 +
        document.body.clientWidth / 2 -
        (document
          .getElementById("divShowVidImgCenter")
          .childNodes[0].childNodes[0].style.marginLeft.replace(
            /[a-z\s\-]/g,
            ""
          ) -
          1 +
          1 +
          240);
      arrZoomCenterXYLT[1] +=
        document
          .getElementById("divShowVidImgCenter")
          .childNodes[0].childNodes[0].style.marginTop.replace(
            /[a-z\s\-]/g,
            ""
          ) -
        1 +
        1 +
        document.body.clientHeight / 2 -
        (document
          .getElementById("divShowVidImgCenter")
          .childNodes[0].childNodes[0].style.marginTop.replace(
            /[a-z\s\-]/g,
            ""
          ) -
          1 +
          1 +
          160);
      funcShowVidImg("win_resize", num, arr, param, arrN, arrL);
      document.getElementById("divmessage").style.visibility = "visible";
      window.onresize = function () {
        funcShowVidImg("win_resize", num, arr, param, arrN, arrL);
      };
      break;
    }
    case "norm_screen": {
      var k = document
        .getElementById("divShowVidImgBtnOpen")
        .childNodes[0].childNodes[0].href.replace(/^.*\//, "");
      funcShowVidImg("win_back");
      document
        .getElementById("divmessage")
        .removeChild(document.getElementById("divFullScreenShowVidImg"));
      for (var i = 0, j = -1; i < arr.length; i++) {
        if (
          objShowVidImgThisImg.src.indexOf(arr[i].replace(/^[\.\/\\]*/, "")) >=
          0
        ) {
          j = i;
        }
      }
      if (j == -1) {
        for (var i = 0, j = 0; i < arr.length; i++) {
          if (k == arr[i].replace(/^.*\//, "")) {
            j = i;
          }
        }
      }
      funcShowVidImg("open", j, arr, param, arrN, arrL);
      break;
    }
    case "loaded_this": {
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[0].innerHTML = funcShowVidImg(
        "create_img",
        1,
        objShowVidImgThisImg,
        param
      );
      if (!document.getElementById("divFullScreenShowVidImg")) {
        document.getElementById(
          "divShowVidImgCenter"
        ).parentNode.childNodes[1].style.visibility = "hidden";
      }
      break;
    }
    case "loaded_prev": {
      if (arrParam["zoom"] != "map") {
        document.getElementById(
          "divShowVidImgPrev"
        ).childNodes[0].childNodes[4].childNodes[0].innerHTML = funcShowVidImg(
          "create_img",
          0,
          objShowVidImgPrevImg,
          param
        );
        document.getElementById("divShowVidImgPrev").onclick = function () {
          funcShowVidImg("go_to_prev", num, arr, param, arrN, arrL);
        };
        document.getElementById("divShowVidImgPrev").style.visibility =
          "visible";
      }
      break;
    }
    case "loaded_next": {
      if (arrParam["zoom"] != "map") {
        document.getElementById(
          "divShowVidImgNext"
        ).childNodes[0].childNodes[4].childNodes[0].innerHTML = funcShowVidImg(
          "create_img",
          0,
          objShowVidImgNextImg,
          param
        );
        document.getElementById("divShowVidImgNext").onclick = function () {
          funcShowVidImg("go_to_next", num, arr, param, arrN, arrL);
        };
        document.getElementById("divShowVidImgNext").style.visibility =
          "visible";
        if (varSlideShowVidImg) {
          timSlideShowVidImg = setTimeout(
            'if(varSlideShowVidImg){document.getElementById("divShowVidImgNext").onclick();}',
            2000
          );
        }
      }
      break;
    }
    case "move_img_lnk": {
      if (typeof num == "number") {
        if (varMoveVidImgLnk != num) {
          varMoveVidImgLnk = varMoveVidImgLnk == 3 ? 3 : num;
          funcShowVidImg("move_img_lnk");
        }
      } else {
        var i = document.getElementById("divShowVidImgPrev"),
          j = document.getElementById("divShowVidImgNext");
        if (i && j) {
          var i1 = i.style.marginLeft.replace(/[a-z\s]/g, "") - 1 + 1,
            j1 = j.style.marginLeft.replace(/[a-z\s]/g, "") - 1 + 1,
            w =
              document.getElementById("divShowVidImgCenter").offsetWidth - 123;
          i1 =
            varMoveVidImgLnk == 0
              ? i1 <= -80
                ? -100
                : i1 - 20
              : varMoveVidImgLnk == 1
              ? i1 >= -20
                ? 0
                : i1 + 20
              : varMoveVidImgLnk == 2
              ? i1 <= -80
                ? -100
                : i1 - 20
              : -200;
          j1 =
            varMoveVidImgLnk == 0
              ? j1 >= w + 80
                ? w + 100
                : j1 + 20
              : varMoveVidImgLnk == 1
              ? j1 >= w + 80
                ? w + 100
                : j1 + 20
              : varMoveVidImgLnk == 2
              ? j1 <= w + 20
                ? w
                : j1 - 20
              : w + 200;
          i.style.marginLeft = i1;
          j.style.marginLeft = j1;
          if (
            (varMoveVidImgLnk == 0 && (i1 > -100 || j1 < w + 100)) ||
            (varMoveVidImgLnk == 1 && (i1 < 0 || j1 < w + 100)) ||
            (varMoveVidImgLnk == 2 && (i1 > -100 || j1 > w))
          ) {
            setTimeout('funcShowVidImg("move_img_lnk")', 24);
          }
        }
      }
      break;
    }
    case "move_img": {
      document.getElementById("divShowVidImgPrev").style.cursor = "default";
      document.getElementById("divShowVidImgNext").style.cursor = "default";
      document.getElementById("divShowVidImgBtnPlay").style.visibility =
        "hidden";
      document.getElementById("divShowVidImgBtnOpen").style.visibility =
        "hidden";
      if (num == 1 || num == 2) {
        var k = document.getElementById("divShowVidImgCenter"),
          i = k.childNodes[1].style.marginLeft.replace(/[\s\%]/g, "") - 1 + 1;
        i = num == 1 ? (i >= -15 ? 0 : i + 15) : i <= 15 ? 0 : i - 15;
        k.childNodes[1].style.marginLeft = i + "%";
        k.childNodes[2].style.marginLeft = i + "%";
        k.childNodes[0].style.opacity = Math.abs(i) / 100;
        k.childNodes[0].style.filter = "alpha(opacity=" + Math.abs(i) + ")";
        if (i != 0) {
          setTimeout('funcShowVidImg("move_img",' + num + ");", 24);
        } else {
          k.childNodes[0].style.opacity = 1;
          k.childNodes[0].style.filter = "alpha(opacity=100)";
          k.childNodes[0].innerHTML = k.childNodes[1].innerHTML;
          k.childNodes[1].style.marginLeft = "100%";
          document.getElementById("divShowVidImgBtnPlay").style.marginLeft =
            document.getElementById("divShowVidImgCenter").offsetWidth / 2 - 25;
          document.getElementById("divShowVidImgBtnPlay").style.visibility =
            k.childNodes[2].style.visibility;
          document.getElementById("divShowVidImgPrev").style.cursor = "pointer";
          document.getElementById("divShowVidImgNext").style.cursor = "pointer";
          document.getElementById("divShowVidImgBtnOpen").style.visibility =
            document.getElementById("divShowVidImgBtnOpen").childNodes[0]
              .childNodes[0].href == "http://ru.ru/"
              ? "hidden"
              : "visible";
        }
      }
      break;
    }
    case "go_to_prev": {
      funcShowVidImg("stop_video");
      num--;
      var k = funcShowVidImg("file_info", num, arr, param, arrN, arrL),
        i = arrN[num] ? arrN[num] : k[4];
      document.getElementById("divShowVidImgPrev").style.visibility = "hidden";
      objShowVidImgNextImg = objShowVidImgThisImg;
      objShowVidImgThisImg = objShowVidImgPrevImg;
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[1].style.marginLeft = "-100%";
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[1].innerHTML = funcShowVidImg(
        "create_img",
        1,
        objShowVidImgThisImg,
        param
      );
      funcShowVidImg("loaded_next", num, arr, param, arrN, arrL);
      if (k[2] != 0) {
        objShowVidImgPrevImg = new Image();
        objShowVidImgPrevImg.onload = function () {
          funcShowVidImg("loaded_prev", num, arr, param, arrN, arrL);
        };
        objShowVidImgPrevImg.src =
          k[2] == 1
            ? k[0]
            : k[2] == 2
            ? k[0] + ".scr"
            : k[2] == 3
            ? "image/main/pdf.png"
            : "";
      }
      document.getElementById(
        "divShowVidImgPrev"
      ).childNodes[0].childNodes[5].style.visibility =
        k[2] == 2 ? "visible" : "hidden";
      document.getElementById(
        "divShowVidImgNext"
      ).childNodes[0].childNodes[5].style.visibility =
        k[8] == 2 ? "visible" : "hidden";
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[2].style.visibility = k[5] == 2 ? "visible" : "hidden";
      document.getElementById("divShowVidImgBtnPlay").onclick = function () {
        funcShowVidImg("play_video", num, arr, param, arrN, arrL);
      };
      funcShowVidImg("move_img", 1);
      document.getElementById("tdmessagewindowhead").innerHTML =
        "<font class='font_shadow_bolder' style='font-family: Arial, sans-serif; font-size: 12px; color: #ffffff;'>" +
        (arrParam["zoom"] == "map"
          ? "ÐÐ°ÑÑÐ°: "
          : k[5] == 1
          ? "ÐÐ·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ: "
          : "ÐÐ¸Ð´ÐµÐ¾: ") +
        i +
        "/*[if IE]><span class='span_shadow_bolder'>" +
        (arrParam["zoom"] == "map"
          ? "ÐÐ°ÑÑÐ°: "
          : k[5] == 1
          ? "ÐÐ·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ: "
          : "ÐÐ¸Ð´ÐµÐ¾: ") +
        i +
        "</span><![endif]*/</font>";
      document.getElementById("fontShowVidImgName").innerHTML =
        "<b>" + i + "</b>";
      document.getElementById(
        "divShowVidImgBtnOpen"
      ).childNodes[0].childNodes[0].href =
        arrL[num] == "" ? "http://ru.ru/" : arrL[num];
      document.getElementById(
        "divShowVidImgBtnOpen"
      ).childNodes[0].childNodes[0].target = k[5] == 3 ? "_blank" : "_self";
      break;
    }
    case "go_to_next": {
      funcShowVidImg("stop_video");
      num++;
      var k = funcShowVidImg("file_info", num, arr, param, arrN, arrL),
        i = arrN[num] ? arrN[num] : k[4];
      document.getElementById("divShowVidImgNext").style.visibility = "hidden";
      objShowVidImgPrevImg = objShowVidImgThisImg;
      objShowVidImgThisImg = objShowVidImgNextImg;
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[1].style.marginLeft = "100%";
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[1].innerHTML = funcShowVidImg(
        "create_img",
        1,
        objShowVidImgThisImg,
        param
      );
      funcShowVidImg("loaded_prev", num, arr, param, arrN, arrL);
      if (k[8] != 0) {
        objShowVidImgNextImg = new Image();
        objShowVidImgNextImg.onload = function () {
          funcShowVidImg("loaded_next", num, arr, param, arrN, arrL);
        };
        objShowVidImgNextImg.src =
          k[8] == 1
            ? k[6]
            : k[8] == 2
            ? k[6] + ".scr"
            : k[8] == 3
            ? "image/main/pdf.png"
            : "";
      }
      document.getElementById(
        "divShowVidImgPrev"
      ).childNodes[0].childNodes[5].style.visibility =
        k[2] == 2 ? "visible" : "hidden";
      document.getElementById(
        "divShowVidImgNext"
      ).childNodes[0].childNodes[5].style.visibility =
        k[8] == 2 ? "visible" : "hidden";
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[2].style.visibility = k[5] == 2 ? "visible" : "hidden";
      document.getElementById("divShowVidImgBtnPlay").onclick = function () {
        funcShowVidImg("play_video", num, arr, param, arrN, arrL);
      };
      funcShowVidImg("move_img", 2);
      document.getElementById("tdmessagewindowhead").innerHTML =
        "<font class='font_shadow_bolder' style='font-family: Arial, sans-serif; font-size: 12px; color: #ffffff;'>" +
        (arrParam["zoom"] == "map"
          ? "ÐÐ°ÑÑÐ°: "
          : k[5] == 1
          ? "ÐÐ·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ: "
          : "ÐÐ¸Ð´ÐµÐ¾: ") +
        i +
        "/*[if IE]><span class='span_shadow_bolder'>" +
        (arrParam["zoom"] == "map"
          ? "ÐÐ°ÑÑÐ°: "
          : k[5] == 1
          ? "ÐÐ·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ: "
          : "ÐÐ¸Ð´ÐµÐ¾: ") +
        i +
        "</span><![endif]*/</font>";
      document.getElementById("fontShowVidImgName").innerHTML =
        "<b>" + i + "</b>";
      if (varSlideShowVidImg && num >= arr.length - 1) {
        timSlideShowVidImg = setTimeout(
          'if(varSlideShowVidImg){funcShowVidImg("go_to_num",0,Array("' +
            arr.join('","') +
            '"),"' +
            param +
            '",Array("' +
            arrN.join('","') +
            '"),Array("' +
            arrL.join('","') +
            '"));}',
          2000
        );
      }
      document.getElementById(
        "divShowVidImgBtnOpen"
      ).childNodes[0].childNodes[0].href =
        arrL[num] == "" ? "http://ru.ru/" : arrL[num];
      document.getElementById(
        "divShowVidImgBtnOpen"
      ).childNodes[0].childNodes[0].target = k[5] == 3 ? "_blank" : "_self";
      break;
    }
    case "go_to_num": {
      funcShowVidImg("stop_video");
      var k = funcShowVidImg("file_info", num, arr, param, arrN, arrL),
        i = arrN[num] ? arrN[num] : k[4];
      document.getElementById("tdmessagewindowhead").innerHTML =
        "<font class='font_shadow_bolder' style='font-family: Arial, sans-serif; font-size: 12px; color: #ffffff;'>" +
        (arrParam["zoom"] == "map"
          ? "ÐÐ°ÑÑÐ°: "
          : k[5] == 1
          ? "ÐÐ·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ: "
          : "ÐÐ¸Ð´ÐµÐ¾: ") +
        i +
        "/*[if IE]><span class='span_shadow_bolder'>" +
        (arrParam["zoom"] == "map"
          ? "ÐÐ°ÑÑÐ°: "
          : k[5] == 1
          ? "ÐÐ·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ðµ: "
          : "ÐÐ¸Ð´ÐµÐ¾: ") +
        i +
        "</span><![endif]*/</font>";
      document.getElementById("fontShowVidImgName").innerHTML =
        "<b>" + i + "</b>";
      document.getElementById(
        "divShowVidImgBtnOpen"
      ).childNodes[0].childNodes[0].href =
        arrL[num] == "" ? "http://ru.ru/" : arrL[num];
      document.getElementById(
        "divShowVidImgBtnOpen"
      ).childNodes[0].childNodes[0].target = k[5] == 3 ? "_blank" : "_self";
      document.getElementById("divShowVidImgBtnOpen").style.visibility =
        arrL[num] == "" || arrParam["zoom"] == "map" ? "hidden" : "visible";
      //												Ð·Ð°Ð³ÑÑÐ·ÐºÐ° Ð¸Ð·Ð¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ð¹
      if (k[5] != 0) {
        objShowVidImgThisImg = new Image();
        objShowVidImgThisImg.onload = function () {
          funcShowVidImg("loaded_this", num, arr, param, arrN, arrL);
        };
        objShowVidImgThisImg.src =
          k[5] == 1
            ? k[3]
            : k[5] == 2
            ? k[3] + ".scr"
            : k[5] == 3
            ? "image/main/pdf.png"
            : "";
      }
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[2].style.visibility = k[5] == 2 ? "visible" : "hidden";
      if (k[2] != 0) {
        objShowVidImgPrevImg = new Image();
        objShowVidImgPrevImg.onload = function () {
          funcShowVidImg("loaded_prev", num, arr, param, arrN, arrL);
        };
        objShowVidImgPrevImg.src =
          k[2] == 1
            ? k[0]
            : k[2] == 2
            ? k[0] + ".scr"
            : k[2] == 3
            ? "image/main/pdf.png"
            : "";
      }
      document.getElementById(
        "divShowVidImgPrev"
      ).childNodes[0].childNodes[5].style.visibility =
        k[2] == 2 ? "visible" : "hidden";
      if (k[8] != 0) {
        objShowVidImgNextImg = new Image();
        objShowVidImgNextImg.onload = function () {
          funcShowVidImg("loaded_next", num, arr, param, arrN, arrL);
        };
        objShowVidImgNextImg.src =
          k[8] == 1
            ? k[6]
            : k[8] == 2
            ? k[6] + ".scr"
            : k[8] == 3
            ? "image/main/pdf.png"
            : "";
      }
      document.getElementById(
        "divShowVidImgNext"
      ).childNodes[0].childNodes[5].style.visibility =
        k[8] == 2 ? "visible" : "hidden";
      //												Ð·Ð°Ð³ÑÑÐ·ÐºÐ° Ð²Ð¸Ð´ÐµÐ¾
      if (k[5] == 2) {
        document.getElementById("divShowVidImgBtnPlay").onclick = function () {
          funcShowVidImg("play_video", num, arr, param, arrN, arrL);
        };
        document.getElementById("divShowVidImgBtnPlay").style.visibility =
          "visible";
      }
      //												Ð¿ÑÐ¾ÑÐ¸ÑÐ¾Ð²ÐºÐ° ÐºÐ½Ð¾Ð¿Ð¾Ðº Ð¿ÑÐ¸Ð±Ð»Ð¸Ð¶ÐµÐ½Ð¸Ñ Ð´Ð»Ñ ÐºÐ°ÑÑÑ
      if (arrParam["zoom"] == "map") {
        document.getElementById(
          "divShowVidImgBtnZoom"
        ).innerHTML = funcShowVidImg(
          "create_btn",
          5,
          arr,
          "zoom:" + num + ";",
          arrN,
          arrL
        );
        document.getElementById("divShowVidImgBtnZoom").style.visibility =
          "visible";
      }
      break;
    }
    case "slide_show": {
      if (arr.length > 2) {
        try {
          clearTimeout(timSlideShowVidImg);
        } catch (err) {}
        varSlideShowVidImg = varSlideShowVidImg ? 0 : 1;
        document
          .getElementById("btnSlideShowFocus")
          .getElementsByTagName("tr")[0]
          .getElementsByTagName(
            "td"
          )[1].childNodes[0].innerHTML = varSlideShowVidImg
          ? "<b>ÐÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ</b>"
          : "<b>âº Ð¡Ð»Ð°Ð¹Ð´ ÑÐ¾Ñ</b>";
        if (varSlideShowVidImg) {
          funcShowVidImg("move_img_lnk", 3);
          if (
            document.getElementById("divShowVidImgNext").style.visibility ==
            "visible"
          ) {
            document.getElementById("divShowVidImgNext").onclick();
          } else {
            funcShowVidImg("go_to_num", 0, arr, param, arrN, arrL);
          }
        } else {
          varMoveVidImgLnk = 0;
          funcShowVidImg("move_img_lnk");
        }
      }
      break;
    }
    case "play_video": {
      varSlideShowVidImg = 1;
      funcShowVidImg("slide_show", num, arr, param, arrN, arrL);
      document.getElementById("divShowVidImgFlash").innerHTML =
        "<object id='objShowVidImgFlash' width='1' height='1' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='flash/player_video.swf' type='application/x-shockwave-flash'><param name='movie' value=\"flash/player_video.swf?color5=0xb0b0b0&color6=0xd0d0d0&color7=0x" +
        varColorTextHead +
        "&video=../" +
        arr[num] +
        "\"/><param name='allowFullScreen' value='true'/><param name='wmode' value='opaque'/><param name='allowScriptAccess' value='always'/><embed name='objShowVidImgFlash' width='1' height='1' src=\"flash/player_video.swf?color5=0xb0b0b0&color6=0xd0d0d0&color7=0x" +
        varColorTextHead +
        "&video=../" +
        arr[num] +
        "\" allowfullscreen='true' wmode='opaque' allowscriptaccess='always'></embed></object>";
      document.getElementById("divShowVidImgFlash").style.visibility =
        "visible";
      document.getElementById("divShowVidImgCenter").style.visibility =
        "hidden";
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[2].style.visibility = "hidden";
      document.getElementById("divShowVidImgBtnPlay").style.visibility =
        "hidden";
      funcShowVidImg("size_video", 1);
      break;
    }
    case "stop_video": {
      document.getElementById("divShowVidImgFlash").innerHTML = "";
      document.getElementById("divShowVidImgFlash").style.visibility = "hidden";
      document.getElementById("divShowVidImgCenter").style.visibility =
        "visible";
      funcShowVidImg("size_video", 0);
      break;
    }
    case "size_video": {
      if (num == 0) {
        arr = "480,320";
      } else {
        if (typeof arr == "undefined") {
          arr =
            document.getElementById("divShowVidImgCenter").childNodes[0]
              .childNodes[0].offsetWidth +
            "," +
            document.getElementById("divShowVidImgCenter").childNodes[0]
              .childNodes[0].offsetHeight;
        } else {
          arr = (arr + "").split(",");
          if (arr.length == 2) {
            f = document.getElementById("divFullScreenShowVidImg") ? 1 : 0;
            w = f
              ? document.getElementById("divmessage").offsetWidth - 20
              : 480;
            h = f
              ? document.getElementById("divmessage").offsetHeight - 20
              : 320;
            i = arr[0] > w ? w : arr[0];
            j = (i / arr[0]) * arr[1];
            if (j > h) {
              j = h;
              i = (j / arr[1]) * arr[0];
            }
            arr = i + "," + j;
          } else {
            arr =
              document.getElementById("divShowVidImgCenter").childNodes[0]
                .childNodes[0].offsetWidth +
              "," +
              document.getElementById("divShowVidImgCenter").childNodes[0]
                .childNodes[0].offsetHeight;
          }
        }
      }
      arr = (arr + "").split(",");
      if (
        num == 1 &&
        arr.length == 2 &&
        document.getElementById("objShowVidImgFlash")
      ) {
        document.getElementById("objShowVidImgFlash").width = arr[0];
        document.getElementById("objShowVidImgFlash").height = arr[1];
        document.getElementById("objShowVidImgFlash").lastChild.width = arr[0];
        document.getElementById("objShowVidImgFlash").lastChild.height = arr[1];
        document.getElementById("divShowVidImgFlash").style.marginLeft =
          (document.getElementById("divFullScreenShowVidImg")
            ? document.getElementById("divmessage").offsetWidth - 20
            : 480) /
            2 -
          arr[0] / 2;
        document.getElementById("divShowVidImgFlash").style.marginTop =
          (document.getElementById("divFullScreenShowVidImg")
            ? document.getElementById("divmessage").offsetHeight - 20
            : 320) /
            2 -
          arr[1] / 2;
        document.getElementById(
          "divShowVidImgFlash"
        ).style.border = document.getElementById("divFullScreenShowVidImg")
          ? "10px solid #ffffff"
          : "0px";
      } else {
        document.getElementById("divShowVidImgFlash").style.marginLeft = 0;
        document.getElementById("divShowVidImgFlash").style.marginTop = 0;
      }
      break;
    }
    case "mouse_down": {
      if (arrParam["zoom"] == "map") {
        varMouseDownMoveImg = 1;
        if (!arr) {
          arr = window.event;
        }
        arrMoveClickXY = [
          arr.pageX ? arr.pageX : arr.clientX,
          arr.pageY ? arr.pageY : arr.clientY,
        ];
      }
      break;
    }
    case "mouse_up": {
      if (arrParam["zoom"] == "map") {
        varMouseDownMoveImg = 0;
        arrMoveClickXY = [0, 0];
        arrZoomCenterXYLT[0] =
          arrZoomCenterXYLT[2] -
          document
            .getElementById("divShowVidImgCenter")
            .childNodes[0].childNodes[0].style.marginLeft.replace(
              /[a-z\s\-]/g,
              ""
            );
        arrZoomCenterXYLT[1] =
          arrZoomCenterXYLT[3] -
          document
            .getElementById("divShowVidImgCenter")
            .childNodes[0].childNodes[0].style.marginTop.replace(
              /[a-z\s\-]/g,
              ""
            );
        document.getElementById(
          "divShowVidImgPrevNextMove"
        ).childNodes[0].style.cursor = "auto";
      }
      break;
    }
    case "mouse_move": {
      if (!arr) {
        arr = window.event;
      }
      var cursor =
        (arr.pageX ? arr.pageX : arr.clientX) -
        (document.getElementById("divmessagewindow").style.display == ""
          ? document.getElementById("divmessagewindow").offsetLeft + 10
          : 0);
      funcShowVidImg(
        "move_img_lnk",
        cursor < 150 ? 1 : cursor > arr.srcElement.width - 150 ? 2 : 0
      );
      if (varMouseDownMoveImg && arrParam["zoom"] == "map") {
        document.getElementById(
          "divShowVidImgPrevNextMove"
        ).childNodes[0].style.cursor = "move";
        var i =
            arrZoomCenterXYLT[2] -
            ((arr.pageX ? arr.pageX : arr.clientX) -
              arrMoveClickXY[0] +
              arrZoomCenterXYLT[0]),
          j =
            arrZoomCenterXYLT[3] -
            ((arr.pageY ? arr.pageY : arr.clientY) -
              arrMoveClickXY[1] +
              arrZoomCenterXYLT[1]);
        if (i < 0) {
          i = 0;
        }
        if (
          i >
          objShowVidImgThisImg.width -
            document.getElementById("divShowVidImgCenter").offsetWidth
        ) {
          i =
            objShowVidImgThisImg.width -
            document.getElementById("divShowVidImgCenter").offsetWidth;
        }
        if (j < 0) {
          j = 0;
        }
        if (
          j >
          objShowVidImgThisImg.height -
            document.getElementById("divShowVidImgCenter").offsetHeight
        ) {
          j =
            objShowVidImgThisImg.height -
            document.getElementById("divShowVidImgCenter").offsetHeight;
        }
        document.getElementById(
          "divShowVidImgCenter"
        ).childNodes[0].childNodes[0].style.marginLeft = -i;
        document.getElementById(
          "divShowVidImgCenter"
        ).childNodes[0].childNodes[0].style.marginTop = -j;
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          event.returnValue = false;
        }
      }
      break;
    }

    case "mouse_scroll": {
      var i = 0;
      if (!arr) {
        arr = window.event;
      }
      if (arr.wheelDelta) {
        i = arr.wheelDelta / 120;
      } else if (arr.detail) {
        i = -arr.detail / 3;
      }
      document.getElementById(i >= 0 ? "btnZoomP" : "btnZoomM").onmouseup();
      break;
    }

    case "win_resize": {
      document.getElementById(
        "divShowVidImgCenter"
      ).childNodes[0].innerHTML = funcShowVidImg(
        "create_img",
        1,
        objShowVidImgThisImg,
        param
      );
      document.getElementById("divShowVidImgNext").style.marginLeft =
        document.getElementById("divShowVidImgCenter").offsetWidth - 23;
      document.getElementById("divShowVidImgBtnPlay").style.marginLeft =
        document.getElementById("divShowVidImgCenter").offsetWidth / 2 - 25;
      document.getElementById("divShowVidImgBtnOpen").style.marginLeft =
        document.getElementById("divShowVidImgCenter").offsetWidth / 2 - 38;
      funcShowVidImg("size_video", 1);
      break;
    }
    case "win_back": {
      if (typeof funcShadowRollMove == "function") {
        window.onresize = funcShadowRollMove;
      } else {
        window.onresize = function () {};
      }
      break;
    }
    case "file_info": {
      var i = ["", "", "", "", "", "", "", "", ""],
        j = function (j) {
          for (var i = 1, n = 0; i < f.length; i++) {
            if (funcArraySelect("in_array", f[i], j)) {
              n = i;
            }
          }
          return n;
        };
      if (typeof arr == "object") {
        if (typeof num == "number") {
          if (arr.length > 0) {
            if (num >= 0) {
              if (num < arr.length) {
                i[0] = num - 1 < 0 ? "" : arr[num - 1];
                i[3] = arr[num];
                i[6] = num + 1 < arr.length ? arr[num + 1] : "";
              }
            }
          }
        }
      }
      var f = [
        [],
        ["jpg", "gif", "bmp", "png"],
        ["flv", "mp4", "mpg", "mov", "avi", "asf", "wma", "wmv", "3gp"],
        ["pdf"],
      ];
      //				ÐºÐ°ÑÑÐ¸Ð½ÐºÐ¸ (1)				Ð²Ð¸Ð´ÐµÐ¾ (2)												pdf (3)
      /*		Ð¿ÑÑÑ Ðº ÑÐ°Ð¹Ð»Ñ		i[0] i[3] i[6]	*/ i[1] =
        i[0] == "" ? "" : i[0].substr(i[0].lastIndexOf("/") + 1);
      i[2] = j(
        i[1] == "" ? "" : i[1].substr(i[1].lastIndexOf(".") + 1).toLowerCase()
      );
      /*		Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ ÑÐ°Ð¹Ð»Ð°		i[1] i[4] i[7]	*/ i[4] =
        i[3] == "" ? "" : i[3].substr(i[3].lastIndexOf("/") + 1);
      i[5] = j(
        i[4] == "" ? "" : i[4].substr(i[4].lastIndexOf(".") + 1).toLowerCase()
      );
      /*		ÑÐ¸Ð¿ ÑÐ°Ð¹Ð»Ð° (0,1,2..)	i[2] i[5] i[8]	*/ i[7] =
        i[6] == "" ? "" : i[6].substr(i[6].lastIndexOf("/") + 1);
      i[8] = j(
        i[7] == "" ? "" : i[7].substr(i[7].lastIndexOf(".") + 1).toLowerCase()
      );
      /*							Ð¿ÑÐµÐ´ ÑÑÐ¾Ñ ÑÐ»ÐµÐ´	*/ return i;
      break;
    }
    case "create_img": {
      var f = 0,
        i = 0,
        j = 0,
        w = 0,
        h = 0,
        l = "";

      if (typeof arr == "object") {
        if (num == 1) {
          if (arrParam["zoom"] == "map") {
            i = arrZoomCenterXYLT[2] - arrZoomCenterXYLT[0];
            if (i < 0) {
              i = 0;
            }
            if (
              i >
              arr.width -
                document.getElementById("divShowVidImgCenter").offsetWidth
            ) {
              i =
                arr.width -
                document.getElementById("divShowVidImgCenter").offsetWidth;
            }
            j = arrZoomCenterXYLT[3] - arrZoomCenterXYLT[1];
            if (j < 0) {
              j = 0;
            }
            if (
              j >
              arr.height -
                document.getElementById("divShowVidImgCenter").offsetHeight
            ) {
              j =
                arr.height -
                document.getElementById("divShowVidImgCenter").offsetHeight;
            }
            l =
              "<img src='" +
              arr.src +
              "' style='margin-Left:-" +
              i +
              "; margin-Top:-" +
              j +
              ";'/>";
          } else {
            f = document.getElementById("divFullScreenShowVidImg") ? 1 : 0;
            w = f
              ? document.getElementById("divmessage").offsetWidth - 20
              : 480;
            h = f
              ? document.getElementById("divmessage").offsetHeight - 20
              : 320;
            i = arr.width > w ? w : arr.width;
            j = (i / arr.width) * arr.height;
            if (j > h) {
              j = h;
              i = (j / arr.height) * arr.width;
            }
            l =
              "<img src='" +
              arr.src +
              "' width='" +
              i +
              "' height='" +
              j +
              "' style='margin-Left:" +
              (w / 2 - i / 2) +
              "; margin-Top:" +
              (h / 2 - j / 2) +
              "; border:" +
              (f ? "10px solid #ffffff" : "0px") +
              ";'/>";
          }
        } else {
          i = 99;
          j = (99 / arr.width) * arr.height;
          l =
            "<img src='" + arr.src + "' width='" + i + "' height='" + j + "'/>";
        }
      }
      return l;
      break;
    }
    case "create_btn": {
      var i = "";
      if (num == 1) {
        i = "<img src='image/main/pset_none.gif'	width='10' height='10'/>";
        i +=
          "<table class='table_nobr' width='100%'><tr width='100%'><td width='100%' align='left' valign='middle'>";
        i +=
          "<font size='2' id='fontShowVidImgName' style='font-family: SegoeUI, sans-serif; color:#" +
          varColorTextHead +
          ";'>&nbsp;</font></td><td>";
        if (arr.length > 2) {
          i +=
            "</td><td>&nbsp;&nbsp;&nbsp;</td><td><table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='1' id='btnSlideShowFocus' onfocus='this.onmouseover();' onblur='this.onmouseout();'	onkeydown='if(event.keyCode==13){this.onmouseup();} if(event.keyCode==32){this.onmouseup();} if(event.keyCode==27){funcmessage(\"close\");}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcShowVidImg(\"slide_show\",0,Array(\"" +
            arr.join('","') +
            '"),"' +
            param +
            '",Array("' +
            arrN.join('","') +
            '"),Array("' +
            arrL.join('","') +
            "\"));'><tr width='100%' height='19'><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>âº Ð¡Ð»Ð°Ð¹Ð´ ÑÐ¾Ñ</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
        }
        i +=
          "</td><td>&nbsp;&nbsp;&nbsp;</td><td><table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='2' " +
          (arr.length > 2 ? "" : "id='btnSlideShowFocus'") +
          " onfocus='this.onmouseover();' onblur='this.onmouseout();'	onkeydown='if(event.keyCode==13){this.onmouseup();} if(event.keyCode==32){this.onmouseup();} if(event.keyCode==27){funcmessage(\"close\");}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcShowVidImg(\"full_screen\",0,Array(\"" +
          arr.join('","') +
          '"),"' +
          param +
          '",Array("' +
          arrN.join('","') +
          '"),Array("' +
          arrL.join('","') +
          "\"));'><tr width='100%' height='19'><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ° Ð²ÐµÑÑ ÑÐºÑÐ°Ð½</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
        i += "</td><td>&nbsp;</td></tr>";
        i += "</table>";
      } else if (num == 2) {
        i = document.createElement("div");
        i.style.position = "absolute";
        i.style.left = "100%";
        i.style.marginLeft = -150;
        i.style.top = 10;
        i.style.width = 150;
        i.innerHTML =
          "<table class='table_fixed' width='150'><col width='50'/><col width='100'/>" +
          '<tr style=\'cursor:pointer;\' onmouseover=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#ffffff"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#ffffff";\' onmouseout=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#dddddd"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#dddddd";\' onclick=\'try{clearTimeout(timSlideShowVidImg);}catch(err){}; document.getElementById("divmessage").style.visibility="hidden"; document.getElementById("divmessage").removeChild(document.getElementById("divFullScreenShowVidImg")); funcShowVidImg("win_back");\'>' +
          "<td align='center' valign='middle'><font size='6' style='font-family: Arial, sans-serif; color:#dddddd;'><b>X</b></font></td>" +
          "<td align='left' valign='middle'><font size='4' style='font-family: Arial, sans-serif; color:#dddddd;'>Ð·Ð°ÐºÑÑÑÑ</font></td>" +
          "</tr>" +
          '<tr style=\'cursor:pointer;\' onmouseover=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#ffffff"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#ffffff";\' onmouseout=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#dddddd"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#dddddd";\' onclick=\'funcShowVidImg("norm_screen",0,Array("' +
          arr.join('","') +
          '"),"' +
          param +
          '",Array("' +
          arrN.join('","') +
          '"),Array("' +
          arrL.join('","') +
          "\"));'>" +
          "<td align='center' valign='middle'><font size='6' style='font-family: Arial, sans-serif; color:#dddddd;'><b>â</b></font></td>" +
          "<td align='left' valign='middle'><font size='4' style='font-family: Arial, sans-serif; color:#dddddd;'>Ð² Ð¾ÐºÐ½Ð¾</font></td>" +
          "</tr>" +
          (arr.length > 2
            ? '<tr style=\'cursor:pointer;\' onmouseover=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#ffffff"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#ffffff";\' onmouseout=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#dddddd"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#dddddd";\' onclick=\'this.getElementsByTagName("td")[0].childNodes[0].innerHTML=varSlideShowVidImg?"âº":"â "; this.getElementsByTagName("td")[1].childNodes[0].innerHTML=varSlideShowVidImg?"cÐ»Ð°Ð¹Ð´-ÑÐ¾Ñ":"Ð¾ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ"; funcShowVidImg("slide_show",0,Array("' +
              arr.join('","') +
              '"),"' +
              param +
              '",Array("' +
              arrN.join('","') +
              '"),Array("' +
              arrL.join('","') +
              "\"));'>" +
              "<td align='center' valign='middle'><font size='6' style='font-family: Arial, sans-serif; color:#dddddd;'><b>" +
              (varSlideShowVidImg ? "â " : "âº") +
              "</b></font></td>" +
              "<td align='left' valign='middle'><font size='4' style='font-family: Arial, sans-serif; color:#dddddd;'>" +
              (varSlideShowVidImg ? "Ð¾ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑ" : "cÐ»Ð°Ð¹Ð´-ÑÐ¾Ñ") +
              "</font></td>" +
              "</tr>"
            : "") +
          "</table>";
      } else if (num == 3) {
        i = "<img src='image/main/pset_none.gif'	width='10' height='10'/>";
        i +=
          "<table class='table_nobr' width='100%'><tr width='100%'><td width='100%' align='left' valign='middle'>";
        i +=
          "<font size='2' id='fontShowVidImgName' style='font-family: SegoeUI, sans-serif; color:#" +
          varColorTextHead +
          ";'>&nbsp;</font></td><td>";
        if (arrL.length > arr.length) {
          i +=
            "</td><td>&nbsp;&nbsp;&nbsp;</td><td><a target='_blank' href='http://" +
            arrL[arrL.length - 1].split(":")[2].replace(/^\s*|\s*$/, "") +
            "'><table class='table_fixed' style='width:" +
            arrL[arrL.length - 1].split(":")[0].replace(/^\s*|\s*$/, "") +
            "; height:19; cursor:pointer;' tabindex='1' id='btnSlideShowFocus' onfocus='this.onmouseover();' onblur='this.onmouseout();'	onkeydown='if(event.keyCode==13){this.onmouseup();} if(event.keyCode==32){this.onmouseup();} if(event.keyCode==27){funcmessage(\"close\");}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcbutton(\"over\",this);'><tr width='100%' height='19'><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>" +
            arrL[arrL.length - 1].split(":")[1].replace(/^\s*|\s*$/, "") +
            "</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table></a>";
        }
        i +=
          "</td><td>&nbsp;&nbsp;&nbsp;</td><td><table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='2' " +
          (arr.length > 2 ? "" : "id='btnSlideShowFocus'") +
          " onfocus='this.onmouseover();' onblur='this.onmouseout();'	onkeydown='if(event.keyCode==13){this.onmouseup();} if(event.keyCode==32){this.onmouseup();} if(event.keyCode==27){funcmessage(\"close\");}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcShowVidImg(\"full_screen\",0,Array(\"" +
          arr.join('","') +
          '"),"' +
          param +
          '",Array("' +
          arrN.join('","') +
          '"),Array("' +
          arrL.join('","') +
          "\"));'><tr width='100%' height='19'><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ° Ð²ÐµÑÑ ÑÐºÑÐ°Ð½</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
        i += "</td><td>&nbsp;</td></tr>";
        i += "</table>";
      } else if (num == 4) {
        i = document.createElement("div");
        i.style.position = "absolute";
        i.style.left = "100%";
        i.style.marginLeft = -150;
        i.style.top = 10;
        i.style.width = 150;
        i.innerHTML =
          "<table class='table_fixed' width='150'><col width='50'/><col width='100'/>" +
          '<tr style=\'cursor:pointer;\' onmouseover=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#ffffff"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#ffffff";\' onmouseout=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#000000"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#000000";\' onclick=\'try{clearTimeout(timSlideShowVidImg);}catch(err){}; document.getElementById("divmessage").style.visibility="hidden"; document.getElementById("divmessage").removeChild(document.getElementById("divFullScreenShowVidImg")); funcShowVidImg("win_back");\'>' +
          "<td align='center' valign='middle'><font size='6' style='font-family: Arial, sans-serif; color:#000000;'><b>X</b></font></td>" +
          "<td align='left' valign='middle'><font size='4' style='font-family: Arial, sans-serif; color:#000000;'>Ð·Ð°ÐºÑÑÑÑ</font></td>" +
          "</tr>" +
          '<tr style=\'cursor:pointer;\' onmouseover=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#ffffff"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#ffffff";\' onmouseout=\'this.getElementsByTagName("td")[0].childNodes[0].style.color="#000000"; this.getElementsByTagName("td")[1].childNodes[0].style.color="#000000";\' onclick=\'funcShowVidImg("norm_screen",0,Array("' +
          arr.join('","') +
          '"),"' +
          param +
          '",Array("' +
          arrN.join('","') +
          '"),Array("' +
          arrL.join('","') +
          "\"));'>" +
          "<td align='center' valign='middle'><font size='6' style='font-family: Arial, sans-serif; color:#000000;'><b>â</b></font></td>" +
          "<td align='left' valign='middle'><font size='4' style='font-family: Arial, sans-serif; color:#000000;'>Ð² Ð¾ÐºÐ½Ð¾</font></td>" +
          "</tr>" +
          "</table>";
      } else if (num == 5) {
        i +=
          "<table class='table_nobr' style='-moz-user-select: none; -khtml-user-select: none; user-select: none;' onselectstart='return false;'>";
        i +=
          "<tr><td><div class='div_in_back'><img src='image/main/pset_black.gif' width='23' height='23' style='filter: alpha(opacity=30); -moz-opacity: .3; opacity: .3; -khtml-opacity: .3;'/><div class='div_in_front' style='left:2; top:2;'><table class='table_fixed' style='width:19; height:19; cursor:pointer;'													 id='btnZoomX'										onfocus='this.onmouseover();' onblur='this.onmouseout();' onkeydown='if(event.keyCode==13){this.onmouseup();} if(event.keyCode==32){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcbutton(\"over\",this); arrZoomCenterXYLT[0]=document.getElementById(\"divShowVidImgCenter\").offsetWidth/2; arrZoomCenterXYLT[1]=document.getElementById(\"divShowVidImgCenter\").offsetHeight/2; funcShowVidImg(\"go_to_num\"," +
          arrParam["zoom"] +
          ',Array("' +
          arr.join('","') +
          '"),"zoom:map;",Array("' +
          arrN.join('","') +
          '"),Array("' +
          arrL.join('","') +
          "\"));'><tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='3' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>Â¤</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table></div></div></td></tr>";
        i +=
          "<tr><td><div class='div_in_back'><img src='image/main/pset_black.gif' width='23' height='23' style='filter: alpha(opacity=30); -moz-opacity: .3; opacity: .3; -khtml-opacity: .3;'/><div class='div_in_front' style='left:2; top:2;'><table class='table_fixed' style='width:19; height:19; cursor:" +
          (arr.length > arrParam["zoom"] - 1 + 2 ? "pointer" : "default") +
          ";' id='btnZoomP'" +
          (arr.length > arrParam["zoom"] - 1 + 2
            ? " onfocus='this.onmouseover();' onblur='this.onmouseout();' onkeydown='if(event.keyCode==13){this.onmouseup();} if(event.keyCode==32){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcbutton(\"over\",this); arrZoomCenterXYLT=[((arrZoomCenterXYLT[0]-document.getElementById(\"divShowVidImgCenter\").offsetWidth/2)*((1/" +
              arrL[arrParam["zoom"] - 1 + 2]
                .split(":")[2]
                .replace(/^\s*|\s*$/, "") +
              "*" +
              arrL[arrParam["zoom"] - 1 + 2]
                .split(":")[3]
                .replace(/^\s*|\s*$/, "") +
              ")/(1/" +
              arrL[arrParam["zoom"]].split(":")[2].replace(/^\s*|\s*$/, "") +
              "*" +
              arrL[arrParam["zoom"]].split(":")[3].replace(/^\s*|\s*$/, "") +
              '))+document.getElementById("divShowVidImgCenter").offsetWidth/2),((arrZoomCenterXYLT[1]-document.getElementById("divShowVidImgCenter").offsetHeight/2)*((1/' +
              arrL[arrParam["zoom"] - 1 + 2]
                .split(":")[2]
                .replace(/^\s*|\s*$/, "") +
              "*" +
              arrL[arrParam["zoom"] - 1 + 2]
                .split(":")[3]
                .replace(/^\s*|\s*$/, "") +
              ")/(1/" +
              arrL[arrParam["zoom"]].split(":")[2].replace(/^\s*|\s*$/, "") +
              "*" +
              arrL[arrParam["zoom"]].split(":")[3].replace(/^\s*|\s*$/, "") +
              '))+document.getElementById("divShowVidImgCenter").offsetHeight/2),' +
              (arrL[arrParam["zoom"] - 1 + 2].split(":").length >= 4
                ? arrL[arrParam["zoom"] - 1 + 2]
                    .split(":")[0]
                    .replace(/^\s*|\s*$/, "") +
                  "," +
                  arrL[arrParam["zoom"] - 1 + 2]
                    .split(":")[1]
                    .replace(/^\s*|\s*$/, "")
                : "0,0") +
              ']; funcShowVidImg("go_to_num",' +
              (arrParam["zoom"] - 1 + 2) +
              ',Array("' +
              arr.join('","') +
              '"),"zoom:map;",Array("' +
              arrN.join('","') +
              '"),Array("' +
              arrL.join('","') +
              "\"));'"
            : "") +
          "><tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='3' style='font-family: Arial, sans-serif; color:#" +
          (arr.length > arrParam["zoom"] - 1 + 2 ? "000000" : "9d9d9d") +
          "; text-decoration: none;'><b>+</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table></div></div></td></tr>";
        i +=
          "<tr><td><div class='div_in_back'><img src='image/main/pset_black.gif' width='23' height='23' style='filter: alpha(opacity=30); -moz-opacity: .3; opacity: .3; -khtml-opacity: .3;'/><div class='div_in_front' style='left:2; top:2;'><table class='table_fixed' style='width:19; height:19; cursor:" +
          (arrParam["zoom"] - 1 + 1 > 0 ? "pointer" : "default") +
          ";' id='btnZoomM'" +
          (arrParam["zoom"] - 1 + 1 > 0
            ? " onfocus='this.onmouseover();' onblur='this.onmouseout();' onkeydown='if(event.keyCode==13){this.onmouseup();} if(event.keyCode==32){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcbutton(\"over\",this); arrZoomCenterXYLT=[((arrZoomCenterXYLT[0]-document.getElementById(\"divShowVidImgCenter\").offsetWidth/2)*((1/" +
              arrL[arrParam["zoom"] - 1]
                .split(":")[2]
                .replace(/^\s*|\s*$/, "") +
              "*" +
              arrL[arrParam["zoom"] - 1]
                .split(":")[3]
                .replace(/^\s*|\s*$/, "") +
              ")/(1/" +
              arrL[arrParam["zoom"]].split(":")[2].replace(/^\s*|\s*$/, "") +
              "*" +
              arrL[arrParam["zoom"]].split(":")[3].replace(/^\s*|\s*$/, "") +
              '))+document.getElementById("divShowVidImgCenter").offsetWidth/2),((arrZoomCenterXYLT[1]-document.getElementById("divShowVidImgCenter").offsetHeight/2)*((1/' +
              arrL[arrParam["zoom"] - 1]
                .split(":")[2]
                .replace(/^\s*|\s*$/, "") +
              "*" +
              arrL[arrParam["zoom"] - 1]
                .split(":")[3]
                .replace(/^\s*|\s*$/, "") +
              ")/(1/" +
              arrL[arrParam["zoom"]].split(":")[2].replace(/^\s*|\s*$/, "") +
              "*" +
              arrL[arrParam["zoom"]].split(":")[3].replace(/^\s*|\s*$/, "") +
              '))+document.getElementById("divShowVidImgCenter").offsetHeight/2),' +
              (arrL[arrParam["zoom"] - 1].split(":").length >= 4
                ? arrL[arrParam["zoom"] - 1]
                    .split(":")[0]
                    .replace(/^\s*|\s*$/, "") +
                  "," +
                  arrL[arrParam["zoom"] - 1]
                    .split(":")[1]
                    .replace(/^\s*|\s*$/, "")
                : "0,0") +
              ']; funcShowVidImg("go_to_num",' +
              (arrParam["zoom"] - 1) +
              ',Array("' +
              arr.join('","') +
              '"),"zoom:map;",Array("' +
              arrN.join('","') +
              '"),Array("' +
              arrL.join('","') +
              "\"));'"
            : "") +
          "><tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td><td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='3' style='font-family: Arial, sans-serif; color:#" +
          (arrParam["zoom"] - 1 + 1 > 0 ? "000000" : "9d9d9d") +
          "; text-decoration: none;'><b>&ndash;</b></font></td><td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table></div></div></td></tr>";
        i += "</table>";
      }
      return i;
      break;
    }
    default: {
    }
  }
}

//	Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÐºÐ½Ð¾Ð¿Ð¾Ðº
function funcbutton(action, btn_this) {
  switch (action) {
    case "over": {
      var array_btn_td = btn_this
        .getElementsByTagName("tr")[0]
        .getElementsByTagName("td");
      array_btn_td[0].childNodes[0].childNodes[0].style.marginTop = -40;
      array_btn_td[1].style.backgroundPosition = "left -60";
      array_btn_td[1].childNodes[0].style.color = "#" + varColorLinkActive;
      array_btn_td[2].childNodes[0].childNodes[0].style.marginTop = -40;
      break;
    }
    case "out": {
      var array_btn_td = btn_this
        .getElementsByTagName("tr")[0]
        .getElementsByTagName("td");
      array_btn_td[0].childNodes[0].childNodes[0].style.marginTop = 0;
      array_btn_td[1].style.backgroundPosition = "left -20";
      array_btn_td[1].childNodes[0].style.color = "#000000";
      array_btn_td[2].childNodes[0].childNodes[0].style.marginTop = 0;
      break;
    }
    case "down": {
      var array_btn_td = btn_this
        .getElementsByTagName("tr")[0]
        .getElementsByTagName("td");
      array_btn_td[0].childNodes[0].childNodes[0].style.marginTop = -81;
      array_btn_td[1].style.backgroundPosition = "left -100";
      array_btn_td[1].childNodes[0].style.color = "#" + varColorLinkActive;
      array_btn_td[2].childNodes[0].childNodes[0].style.marginTop = -81;
      break;
    }
    default: {
    }
  }
}

//	Ð²Ð°ÑÐ¸Ð°Ð½ÑÑ ÐºÐ½Ð¾Ð¿Ð¾Ðº
messege_button = Array();
messege_button["none"] =
  "<img id='btnNoFocus' src='image/main/pset_none.gif' width='1' height='1'/>";
messege_button["close_ready"] =
  "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='1'   id='btnWindFocus' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessagewindow\").style.display==\"\"){if(document.getElementById(\"divmessagehelpwindow\").style.display!=\"\"){if(document.getElementById(\"divmessageerrwindow\").style.display!=\"\"){this.focus();}}}' onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close\");'>" +
  "<tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td>" +
  "<td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ¾ÑÐ¾Ð²Ð¾</b></font></td>" +
  "<td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
messege_button["close_cancel"] =
  "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='1'   id='btnWindFocus' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessagewindow\").style.display==\"\"){if(document.getElementById(\"divmessagehelpwindow\").style.display!=\"\"){if(document.getElementById(\"divmessageerrwindow\").style.display!=\"\"){this.focus();}}}' onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close\");'>" +
  "<tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td>" +
  "<td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÑÐ¼ÐµÐ½Ð°</b></font></td>" +
  "<td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
messege_button["close_close"] =
  "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='1'   id='btnWindFocus' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessagewindow\").style.display==\"\"){if(document.getElementById(\"divmessagehelpwindow\").style.display!=\"\"){if(document.getElementById(\"divmessageerrwindow\").style.display!=\"\"){this.focus();}}}' onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close\");'>" +
  "<tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td>" +
  "<td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ°ÐºÑÑÑÑ</b></font></td>" +
  "<td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
messege_button["close_help"] =
  "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='100' id='btnHelpFocus' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessagehelpwindow\").style.display==\"\"){if(document.getElementById(\"divmessageerrwindow\").style.display!=\"\"){this.focus();}}' onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close_help\");'>" +
  "<tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td>" +
  "<td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ°ÐºÑÑÑÑ</b></font></td>" +
  "<td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
messege_button["close_err"] =
  "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='200' id='btnErrFocus' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessageerrwindow\").style.display==\"\"){this.focus();}'																				onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close_err\");'>" +
  "<tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td>" +
  "<td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ°ÐºÑÑÑÑ</b></font></td>" +
  "<td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
messege_button["close_err_ready_and_resset"] =
  "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='200' id='btnErrFocus' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessageerrwindow\").style.display==\"\"){this.focus();}'																				onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close_err\"); window.location.reload(true);'>" +
  "<tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td>" +
  "<td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ¾ÑÐ¾Ð²Ð¾</b></font></td>" +
  "<td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
messege_button["close_err_and_all"] =
  "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='200' id='btnErrFocus' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessageerrwindow\").style.display==\"\"){this.focus();}'																				onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close_all\");'>" +
  "<tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td>" +
  "<td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ°ÐºÑÑÑÑ</b></font></td>" +
  "<td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
messege_button["close_err_and_all_ready"] =
  "<table class='table_fixed' style='width:100; height:19; cursor:pointer;' tabindex='200' id='btnErrFocus' onfocus='this.onmouseover();' onblur='if(document.getElementById(\"divmessageerrwindow\").style.display==\"\"){this.focus();}'																				onkeydown='if((event.keyCode==13)||(event.keyCode==27)||(event.keyCode==32)){this.onmouseup();}' onmouseover='funcbutton(\"over\",this);' onmouseout='funcbutton(\"out\",this);' onmousedown='funcbutton(\"down\",this);' onmouseup='funcmessage(\"close_all\");'>" +
  "<tr width='100%' height='19'>   <td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: 0; margin-Top: 0;'/></div></td>" +
  "<td height='19' align='center' valign='middle' style='background-image: url(image/main/button.png); background-position: left -20; background-repeat: repeat-x;'><font size='2' style='font-family: Arial, sans-serif; color:#000000; text-decoration: none;'><b>ÐÐ¾ÑÐ¾Ð²Ð¾</b></font></td>" +
  "<td width='3' height='19'><div style='width:3; height:19; overflow: hidden;'><img src='image/main/button.png' width='6' height='120' style='margin-Left: -3; margin-Top: 0;'/></div></td></tr></table>";
/*
page: http://www.matrix-cinema.ru/
url: http://www.matrix-cinema.ru/js/base.js
*/
