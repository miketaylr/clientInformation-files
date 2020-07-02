$(document).ready(function () {
  $("#addToCart").click(function () {
    //alert($('[id*="addToCart"]').attr('id'));
    var normalItems = $("input[id=pur-opt]:checked");
    var specialItems = $("input[id=select-courses]:checked");
    var hasSelectedAProduct = normalItems.length > 0 || specialItems.length > 0;
    if (!hasSelectedAProduct) {
      alert("Please select a Purchase Option.");
      return false;
    } else {
      $("#addToCart").attr("disabled", "disabled");
      document.forms[0].action = "/xt_orderform_additem.asp";
      document.forms[0].submit();
      return true;
    }
  });
  $("input[id=pur-opt]").each(function (index) {
    $(this).bind("click", function () {
      SetPrice();
    });
  });
});

function makeStruct(names) {
  var names = names.split(" ");
  var count = names.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[names[i]] = arguments[i];
    }
  }
  return constructor;
}

function constructModalObject(modal) {
  var modalObject = makeStruct("close modalID launchURL");

  var close = getModalCloseReference(modal.modalTypeId);

  var ID = getModalID(modal.modalTypeId);

  var launchURL = getModalLaunchURL(modal.height, modal.width, ID);

  return new modalObject(close, ID, launchURL);
}

function getModalCloseReference(typeID) {
  return $('div[id*="' + typeID + '"] > div > a[name="closeModal"]');
}

function getModalID(typeID) {
  return $('div[id*="' + typeID + '"]').attr("id");
}

function getModalLaunchURL(height, width, modalID) {
  return (
    "#TB_inline?height=" +
    height +
    "&width=" +
    width +
    "&inlineId=" +
    modalID +
    "&modal=true"
  );
}

function setSubmitButton(button, checkedItemCount) {
  var value = false;
  if (checkedItemCount == 0) {
    value = true;
  }
  button.each(function () {
    this.disabled = value;
  });
}

function SetELearningPrice() {
  var qty = $("select[name=quantity] option:selected").val();
  //alert($('select[name=quantity] option:selected').val());
  $("select[name=quantity] option:selected").val(
    $("select[name=elquantity] option:selected").val()
  );
  //alert($('select[name=quantity] option:selected').val());
  SetSelectedPrice();
  $("select[name=quantity] option:selected").val(qty);
  //alert($('select[name=quantity] option:selected').val());
}

function getSelectedNamedAttribute(attribute) {
  var inputSelected = $("input[id=pur-opt]:checked");
  if (inputSelected) {
    inputSelected = inputSelected
      .parent()
      .parent()
      .find("input[name=" + attribute + "]")
      .val();
    if (inputSelected + "" == "undefined") {
      //get the selected elearning courses
      //return $('input[name=VariantID]').val();
      return getElearningProductDescription();
    } else {
      //get the one selected variant
      return inputSelected;
    }
  }
}

function getElearningProductDescription() {
  //alert($('input[id=pur-select-courses]').attr('checked'));
  if ($("input[id=pur-select-courses]").attr("checked")) {
    return $("input[name=course]:checked").length + " eLearning Course(s)";
  } else {
    return "eLearning Curriculum";
  }
  return "eLearning courses";
}

function getSelectedVariant() {
  var inputSelected = $("input[id=pur-opt]:checked");
  if (inputSelected) {
    inputSelected = inputSelected
      .parent()
      .parent()
      .find("input[name=VariantIDSelected]")
      .val();
    if (inputSelected + "" == "undefined") {
      //get the selected elearning courses
      return $("input[name=VariantID]").val();
    } else {
      //get the one selected variant
      return inputSelected;
    }
  }
}

function SetFirstVariantSelected() {
  var first = $("input[id=pur-opt]:first").attr("checked", "true");
  SetPrice(first);
  $("input[id=pur-opt]:first").click();
}

function SetPrice() {
  var inputSelected = $("input[id=pur-opt]:checked");
  var button = $("#addToCart");
  if (inputSelected.length > 0) {
    setSubmitButton(button, inputSelected.length);
    setNewPrice(inputSelected);
    setVariantID(inputSelected);
  }
}

function setNewPrice(inputSelected) {
  var listPrice;
  var qty = $("select[name=quantity] option:selected").val();
  listPrice = inputSelected
    .parent()
    .parent()
    .find("input[name=DisplayListPrice]")
    .val();
  $("input[name=Subtotal]").val(
    formatCurrency(eval(listPrice * 0.01) * qty, false)
  );
}

function setVariantID(inputSelected) {
  var variantId;
  variantId = inputSelected
    .parent()
    .parent()
    .find("input[name=VariantIDSelected]")
    .val();
  $("input[name=VariantID]").val(variantId);
}

/////////////////////////////////////////////////////////////////

function adjGroupLayer() {
  if (window.clientInformation + "" != "undefined") {
    for (var i = 0; i < document.getElementsByName("GroupLayer").length; i++) {
      if (frmGroup.chkGroup.length > 1)
        document.getElementsByName("GroupLayer")(i).style.posLeft =
          frmGroup.chkGroup[0].parentElement.offsetWidth * -1;
      else
        document.getElementsByName("GroupLayer")(i).style.posLeft =
          frmGroup.chkGroup.parentElement.offsetWidth * -1;
    }
  } else {
    for (var i = 0; i < document.getElementsByName("GroupLayer").length; i++) {
      document.getElementsByName("GroupLayer")[i].style.left = "-220px";
      document.getElementsByName("GroupLayer")[i].style.zIndex = 1000;
    }
  }
}
var rWindow;
function PositionSelect(x) {
  //document.getElementById('x').style.top=GroupAnchor.offsetTop+'px';
  //alert(document.getElementById('x').style);
}

function EmailWindow(eURLString, eProductID) {
  var efeatures;
  var eURLString;
  var eProductID;
  var eWindow;
  eURLString = eURLString + "?ProductID=" + eProductID;
  efeatures =
    "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=360,height=400";
  eWindow = window.open(eURLString, "email", efeatures);
}

function SpawnResourceWindow(rResourceName, rWidth, rHeight) {
  var rfeatures;
  var rURLString;
  var rProductID;
  rURLString =
    "/ResourceWindow.asp?ShowResource=" +
    rResourceName +
    "&rWidth=" +
    rWidth +
    "&rHeight=" +
    rHeight;
  rfeatures =
    "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=" +
    rWidth +
    ",height=" +
    rHeight;
  rWindow = window.open(rURLString, "TheResourceWindow", rfeatures);
}
function SpawnDemo(rResourceName, rWidth, rHeight) {
  var rfeatures;
  var rURLString;
  var rProductID;
  rURLString =
    "/DemoWindow.asp?ShowResource=" +
    rResourceName +
    "&rWidth=" +
    rWidth +
    "&rHeight=" +
    rHeight;
  rfeatures =
    "toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=" +
    rWidth +
    ",height=" +
    rHeight;
  rWindow = window.open(rURLString, "TheResourceWindow", rfeatures);
}

function SpawnMap(sURL) {
  var rfeatures;
  var rURLString;
  var rSku;
  rURLString = sURL;
  rfeatures =
    "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=650,height=600";
  rWindow = window.open(rURLString, "TheResourceWindow", rfeatures);
}

function SpawnShippingCosts(rResourceName, rWidth, rHeight) {
  var rfeatures;
  var rURLString;
  var rSku;
  rURLString =
    "/ResourceWindow.asp?ShowResource=" +
    rResourceName +
    "&rWidth=" +
    rWidth +
    "&rHeight=" +
    rHeight;
  rfeatures =
    "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=650,height=600";
  rWindow = window.open(rURLString, "TheResourceWindow", rfeatures);
}

function SpawnTour(rResourceName, rWidth, rHeight, sStuff) {
  var rfeatures;
  var rURLString;
  var rProductID;
  rURLString =
    "/ResourceTour.asp?ShowResource=" +
    rResourceName +
    "&rWidth=" +
    rWidth +
    "&rHeight=" +
    rHeight +
    sStuff;
  rfeatures =
    "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=" +
    rWidth +
    ",height=" +
    rHeight;
  rWindow = window.open(rURLString, "TheResourceWindow", rfeatures);
}

function SpawnProductDetails(rSku) {
  var rfeatures;
  var rURLString;
  var rSku;
  rURLString = "/ProductDetails.asp?sku=" + rSku;
  rfeatures =
    "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=400,height=300";
  rWindow = window.open(rURLString, "TheResourceWindow", rfeatures);
}
function SpawnAsmtProductDetails(rSku) {
  var rfeatures;
  var rURLString;
  var rSku;
  rURLString = "/AsmtProductDetails.asp?sku=" + rSku;
  rfeatures =
    "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=449,height=565";
  //Force to the front
  rWindow = window.open(rURLString, "TheResourceWindow", rfeatures);
  if (rWindow) rWindow.focus();
}

function isObject(a) {
  return (typeof a == "object" && !!a) || isFunction(a);
}

ns = document.layers;
xmouse = 0;
ymouse = 0;
function init() {
  document.onmousemove = mouseMove;
  if (ns)
    document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP);
}
//init();
function mouseMove(e) {
  xmouse = ns ? e.pageX : event.x + document.body.scrollLeft;
  ymouse = ns ? e.pageY : event.y + document.body.scrollTop;
  return true;
}
function DisplayInfoHover(sLayerName, sVisibilityValue, sDisplayInfo) {
  document.getElementById(sLayerName).style.left = xmouse;
  document.getElementById(sLayerName).style.top = ymouse;
  document.getElementById(sLayerName).innerHTML = HTMLWrap(sDisplayInfo);
  setLayerVisibility(sLayerName, sVisibilityValue);
}

function MoveStuff(layName, sValue) {
  if (document.layers) {
    document.layers[layName].position = sValue;
  } else {
    document.getElementById(layName).style.position = sValue;
  }
}

function setLayerVisibility(layName, sValue) {
  if (document.layers) {
    document.layers[layName].visibility = sValue;
  } else {
    document.getElementById(layName).style.visibility = sValue;
  }
}

function HTMLWrap(sValue) {
  return "<table width=200><tr><td>" + sValue + "</td></tr></table>";
}

function DisplayConfigBundleArea(thisForm, iGroup, aCBLayers) {
  if (typeof aCBLayers + "" != "undefined") {
    if (thisForm.chkDelivery + "" != "undefined")
      for (var i = 0; i < thisForm.chkDelivery.length; i++) {
        if (thisForm.chkDelivery[i].checked) {
          sSelectedVariant = thisForm.chkDelivery[i].value;
        }
      }
    else
      sSelectedVariant =
        thisForm.selDelivery.options[thisForm.selDelivery.selectedIndex].value;
    sDisplayLayerName = sSelectedVariant + iGroup + "ConfigBundleArea";
    for (var j = 0; j < aCBLayers.length; j++) {
      if (aCBLayers[j] != sDisplayLayerName) {
        if (
          document.getElementById(sDisplayLayerName).style.display.length == 0
        ) {
          ns = true;
          MoveStuff(aCBLayers[j], "absolute");
          setTimeout("setLayerVisibility('" + aCBLayers[j] + "', 'hidden')", 1);
        } else {
          document.getElementById(aCBLayers[j]).style.display = "none";
        }
      }
    }
    if (document.getElementById(sDisplayLayerName).style.display.length == 0) {
      MoveStuff(sDisplayLayerName, "relative");
      //document.getElementById(sDisplayLayerName).style.position = 'relative';
      setTimeout(
        "setLayerVisibility('" + sDisplayLayerName + "', 'visible')",
        1
      );
      //document.getElementById(sDisplayLayerName).style.visibility = 'visible';
    } else document.getElementById(sDisplayLayerName).style.display = "block";
  }
}

function DisplayLayer(thisForm, iGroup, sLayerID, aSPLayers) {
  var sDisplayLayerName;
  if (typeof aSPLayers + "" != "undefined") {
    if (
      typeof thisForm.selDelivery + "" != "undefined" ||
      thisForm.chkDelivery + "" != "undefined"
    ) {
      if (thisForm.chkDelivery + "" != "undefined")
        for (var i = 0; i < thisForm.chkDelivery.length; i++) {
          if (thisForm.chkDelivery[i].checked) {
            sSelectedVariant = thisForm.chkDelivery[i].value;
          }
        }
      else
        sSelectedVariant =
          thisForm.selDelivery.options[thisForm.selDelivery.selectedIndex]
            .value;
    } else sSelectedVariant = "";
    //sDisplayLayerName = sSelectedVariant + iGroup + sLayerID;
    sDisplayLayerName = sLayerID;
    //if(document.getElementById)
    for (var j = 0; j < aSPLayers.length; j++) {
      if (aSPLayers[j] != sDisplayLayerName) {
        //if (document.getElementById(sDisplayLayerName).style.display.length == 0){
        if (document.getElementById(sDisplayLayerName) + "" == "null") {
          ns = true;
          MoveStuff(aSPLayers[j], "absolute");
          setTimeout("setLayerVisibility('" + aSPLayers[j] + "', 'hidden')", 1);
        } else {
          document.getElementById(aSPLayers[j]).style.display = "none";
        }
      }
    }
    //if(document.getElementById(sDisplayLayerName).style.display.length == 0){
    if (document.getElementById(sDisplayLayerName) + "" == "null") {
      MoveStuff(sDisplayLayerName, "relative");
      //document.getElementById(sDisplayLayerName).style.position = 'relative';
      setTimeout(
        "setLayerVisibility('" + sDisplayLayerName + "', 'visible')",
        1
      );
      //document.getElementById(sDisplayLayerName).style.visibility = 'visible';
    } else {
      document.getElementById(sDisplayLayerName).style.display = "block";
    }
  }
}

function SetFinalPrice(thisForm) {
  thisForm.FinalPrice.value = thisForm.Sale.value;
}

function SetActionURL(thisForm) {
  if (typeof thisForm.cmdSchedule == "undefined")
    thisForm.action =
      '<%=baseURL("xt_orderform_additem.asp") & mscsPage.URLArgs("FromProduct", "1")%>';
  else {
    iFormNumber = thisForm.name.substr(5);
    if (thisForm.cmdSchedule.name.substr(11) == iFormNumber)
      //This line for NutScrape Browsers
      thisForm.action =
        '<%=baseURL("SessionSelect.asp") & mscsPage.URLArgs("FromProduct", "1")%>';
    else
      thisForm.action =
        '<%=baseURL("xt_orderform_additem.asp") & mscsPage.URLArgs("FromProduct", "1")%>';
  }
  alert(thisForm.action);
}

function CheckVariantStatus(thisForm, iGroupNumber) {
  var sSelectedVariant =
    thisForm.selDelivery.options[thisForm.selDelivery.selectedIndex].value;

  if (
    typeof thisForm.BundleDisplayInfo != "undefined" &&
    typeof thisForm.ConfigurableBundle == "undefined"
  )
    for (var i = 0; i < thisForm.length; i++) {
      if (thisForm.elements[i].name.search("BundleInfo") != -1)
        if (sSelectedVariant == thisForm.elements[i].id) {
          thisForm.BundleDisplayInfo.value =
            "Includes: \n" + thisForm.elements[i].value;
          setVisibility("BundleInfoDiv" + iGroupNumber, "visible");
        }
    }
}

function SetVariantStatusVisibility(
  thisForm,
  iGroupNumber,
  sViewState,
  sVariantStatus
) {
  var sLineItem = "presellDIV" + iGroupNumber;
  var sTempBuyName = "cmdBuy" + iGroupNumber;
  var sTempScheduleName = "cmdSchedule" + iGroupNumber;

  setVisibility(sLineItem, sViewState);

  if (sVariantStatus == "presell")
    for (var i = 0; i < document.images.length; i++) {
      if (document.images[i].name.length > 0)
        if (document.images[i].name == sTempBuyName)
          document.images[i].src = "./images/common/btnPreSell.gif";
        else if (document.images[i].name == sTempScheduleName)
          document.images[i].src = "./images/common/btnPreSell.gif";
    }

  if (sVariantStatus != "presell")
    for (var i = 0; i < document.images.length; i++) {
      if (document.images[i].name.length > 0)
        if (document.images[i].name == sTempBuyName)
          document.images[i].src = "./images/common/btnAddToCart.gif";
        else if (document.images[i].name == sTempScheduleName)
          document.images[i].src = "./images/common/btnSchedule.gif";
    }
}

function AlterVoucherDisplay(thisForm, layName) {}

function SetVoucherSelectedPricing(thisForm, sVariant) {
  for (j = 0; j < thisForm.length; j++) {
    if (
      thisForm.elements[j].id == sVariant &&
      thisForm.elements[j].name == "DisplayListPrice"
    )
      thisForm.VoucherListPrice.value = thisForm.elements[j].value;
    if (
      thisForm.elements[j].id == sVariant &&
      thisForm.elements[j].name == "DisplayDiscountPrice"
    )
      thisForm.VoucherDiscountPrice.value = thisForm.elements[j].value;
  }
}

function setVisibility(layName, sValue) {
  if (document.getElementById) {
    //NS7.X
    document.getElementById(layName).style.visibility = sValue;
  } else {
    if (document.layers)
      //NS6.X
      document.layers[layName].visibility = sValue;
    //IE
    else document.all(layName).style.visibility = sValue;
  }
}

function SetChosenVariant(thisForm) {
  var bVoucherChecked = false;
  var sSelectedVariant =
    thisForm.selDelivery.options[thisForm.selDelivery.selectedIndex].value;
  var sSetSkuValue = "";
  var sVariantGroup = thisForm.VariantGroup.value;
  //var re = /t-/i;
  //for(var i=0; i<thisForm.length; i++)alert(thisForm.elements[i].name);
  if (typeof thisForm.chkVoucherProduct != "undefined")
    bVoucherChecked = thisForm.chkVoucherProduct.checked;

  if (bVoucherChecked) {
    //alert(sSelectedVariant);
    //	moscd,mosdl
    //	cd,cdv,dl,dlv,ol30
    //	spk,spkcd,spkcdv,spkdlv
    //	kccd,kccdvs,kccdv,kccdvsv,kcdl,kcdlvs,kcdlv,kcdlvsv
    switch (sVariantGroup) {
      case "PTP":
        if (sSelectedVariant == "dl") {
          for (var i = 0; i < thisForm.allVariations.length; i++) {
            if (thisForm.allVariations[i].value == "dlv") sSetSkuValue = "dlv";
          }
        } else if (sSelectedVariant == "cd") {
          for (var i = 0; i < thisForm.allVariations.length; i++) {
            if (thisForm.allVariations[i].value == "cdv") sSetSkuValue = "cdv";
          }
        }
        break;

      case "StudyPack":
        if (sSelectedVariant == "spk") {
          for (var i = 0; i < thisForm.allVariations.length; i++) {
            if (thisForm.allVariations[i].value == "spkdlv")
              sSetSkuValue = "spkdlv";
          }
        } else if (sSelectedVariant == "spkcd") {
          for (var i = 0; i < thisForm.allVariations.length; i++) {
            if (thisForm.allVariations[i].value == "spkcdv")
              sSetSkuValue = "spkcdv";
          }
        }
        break;

      case "ExamReview":
        if (sSelectedVariant == "kcdl") {
          for (var i = 0; i < thisForm.allVariations.length; i++) {
            if (thisForm.allVariations[i].value == "kcdlv")
              sSetSkuValue = "kcdlv";
          }
        } else if (sSelectedVariant == "kccd") {
          for (var i = 0; i < thisForm.allVariations.length; i++) {
            if (thisForm.allVariations[i].value == "kccdv")
              sSetSkuValue = "kccdv";
          }
        }
        if (sSelectedVariant == "kcdlvs") {
          for (var i = 0; i < thisForm.allVariations.length; i++) {
            if (thisForm.allVariations[i].value == "kcdlvsv")
              sSetSkuValue = "kcdlvsv";
          }
        } else if (sSelectedVariant == "kccdvs") {
          for (var i = 0; i < thisForm.allVariations.length; i++) {
            if (thisForm.allVariations[i].value == "kccdvsv")
              sSetSkuValue = "kccdvsv";
          }
        }
        break;
    }
    if (sSetSkuValue == "") {
      alert("A voucher product is not available for " + sSelectedVariant);
      sSetSkuValue = thisForm.PFID.value + "_" + sSelectedVariant;
    } else sSetSkuValue = thisForm.PFID.value + "_" + sSetSkuValue;
  } else sSetSkuValue = thisForm.PFID.value + "_" + sSelectedVariant;
  thisForm.sku.value = sSetSkuValue;

  //alert(thisForm.sku.value);
}

///////////////////////////////////////////////////////////////////////////////////////
function formatCurrency(num, unpure) {
  /*
   Author: Robert K. Davis
   Website: http://www.solidscripts.com

   This is a JavaScript version of
   VBScript's built in FormatCurrency()
   function. Free for commercial and
   non-commercial usage _only_ with
   these credits intact.
   
   Syntax:

   formatCurrency(num[,unpure])
   num:     The string or number to format.
   unpure:  true/false (optional)
            If true, dollar signs and commas
            are removed before formatting.

*/
  if (unpure) num = num.replace(/\,/g, "").replace(/^\$/g, "");
  num = !isNaN(num) ? Math.round(num * 100) / 100 : 0;
  if (num.toString().indexOf(".") == -1) num += ".";
  while (/\.\d{0,1}$/.test(num)) num += "0";
  num = num.toString().split(".");
  var objRegExp = new RegExp("(-?[0-9]+)([0-9]{3})");
  while (objRegExp.test(num[0])) num[0] = num[0].replace(objRegExp, "$1,$2");
  //alert("$" + num.join("."));
  return "$" + num.join(".");
}
///////////////////////////////////////////////////////////////////////////////////////
function BuildPrices(thisForm, iVoucherIndex, sVoucherPriceLayerName) {
  var O;
  var S;
  var Sa;
  var SPercent;
  var sSelectedVariant; // = thisForm.selDelivery.options[thisForm.selDelivery.selectedIndex].value;
  //var sVariantGroup = thisForm.VariantGroup.value;
  var bVoucherChecked = false;
  if (thisForm.chkDelivery) {
    if (thisForm.chkDelivery + "" == "undefined") {
      sSelectedVariant =
        thisForm.selDelivery.options[thisForm.selDelivery.selectedIndex].value;
    } else {
      if (thisForm.chkDelivery.length + "" != "undefined")
        for (var i = 0; i < thisForm.DisplayListPrice.length; i++) {
          if (thisForm.chkDelivery[i].checked) {
            sSelectedVariant = thisForm.chkDelivery[i].value;
          }
        }
      else sSelectedVariant = thisForm.chkDelivery.value;
    }
    if (thisForm.DisplayListPrice.value + "" == "undefined") {
      for (var i = 0; i < thisForm.DisplayListPrice.length; i++) {
        if (thisForm.DisplayListPrice[i].id == sSelectedVariant) {
          //woodyhere had to add replace(/,/, "") to the following lines
          //to hande amounts > $999
          O = thisForm.DisplayListPrice[i].value.substr(1).replace(/,/, "");
          S = thisForm.DisplayDiscountPrice[i].value.substr(1).replace(/,/, "");
          Sa = O - S;
          SPercent = Math.round((S / O) * 100);

          if (typeof thisForm.chkVoucherProduct != "undefined") {
            VO = thisForm.VoucherListPrice.value.substr(1);
            VS = thisForm.VoucherDiscountPrice.value.substr(1);

            if (typeof thisForm.Sale != "undefined")
              VoucherDifference = Math.abs(VO - VS - Sa);
            else VoucherDifference = Math.abs(VO - VS - O);
          }
        }
      }
    } else {
      //Only one variation
      O = thisForm.DisplayListPrice.value.substr(1).replace(/,/, "");
      S = thisForm.DisplayDiscountPrice.value.substr(1).replace(/,/, "");
      Sa = O - S;
      SPercent = Math.round((S / O) * 100);
      if (typeof thisForm.chkVoucherProduct != "undefined") {
        VO = thisForm.VoucherListPrice.value.substr(1);
        VS = thisForm.VoucherDiscountPrice.value.substr(1);

        if (typeof thisForm.Sale != "undefined")
          VoucherDifference = Math.abs(VO - VS - Sa);
        else VoucherDifference = Math.abs(VO - VS - O);
      }
    }
    if (typeof thisForm.Retail != "undefined")
      thisForm.Retail.value = formatCurrency(O, false);
    if (typeof thisForm.Savings != "undefined")
      thisForm.Savings.value =
        formatCurrency(S, false) + " (" + SPercent + "%)";
    if (typeof thisForm.Sale != "undefined")
      thisForm.Sale.value = formatCurrency(Sa, false);
    if (typeof thisForm.chkVoucherProduct != "undefined") {
      for (var i = 0; i < thisForm.length; i++) {
        if (thisForm.elements[i].name.search("VoucherPrice") != -1)
          thisForm.elements[i].value =
            "+" + formatCurrency(VoucherDifference, false);
      }
    }
  }
}

function CheckBundleConfig(thisForm) {
  var sDelivery = "";
  var aSectionElements = new Array();
  var bCheck = true;
  if (!ns) {
    for (var i = 0; i < thisForm.length; i++) {
      if (thisForm.elements[i].name.search("chkDelivery") != -1) {
        if (thisForm.elements[i].checked)
          sDelivery = thisForm.elements[i].value;
      }

      if (
        thisForm.elements[i].name.search("SectionID") != -1 &&
        thisForm.elements[i].name.search(sDelivery) != -1
      ) {
        aSectionElements.push(thisForm.elements[i]);
      }
    }
    bCheck = DuplicatesCheck(aSectionElements, thisForm);
    if (bCheck) bCheck = RequiredNumberOfItemsCheck(aSectionElements, thisForm);
  }
  //alert(bCheck);
  return bCheck;
}

function RequiredNumberOfItemsCheck(aAllChoices, thisForm) {
  var aSelections = new Array();
  var aSectionIDs = new Array();
  var aSectionLabel = new Array();
  var aRequiredComponentsCounts = new Array();
  var bAdd = true;
  var iCheckedCounter = 0;

  if (aAllChoices.length) {
    for (var i = 0; i < aAllChoices.length; i++) {
      if (aAllChoices[i].checked) aSelections.push(aAllChoices[i]);

      AddLoop: for (var j = 0; j < aSectionIDs.length; j++) {
        bAdd = true;
        if (aAllChoices[i].name.split("|")[1] == aSectionIDs[j]) {
          bAdd = false;
          break AddLoop;
        }
      }
      if (bAdd) {
        switch (aAllChoices[i].type) {
          case "radio":
            //alert('ADDING radio ' + aAllChoices[i].name.split('|')[1] + ' - type = ' + aAllChoices[i].type);
            aSectionIDs.push(aAllChoices[i].name.split("|")[1]);
            aRequiredComponentsCounts.push(
              aAllChoices[i].BundleSectionRequiredComponentCount
            );
            aSectionLabel.push(aAllChoices[i].SectionLabel);
            break;
          case "checkbox":
            //alert('ADDING checkbox ' +aAllChoices[i].name.split('|')[1] + ' - type = ' + aAllChoices[i].type);
            aSectionIDs.push(aAllChoices[i].name.split("|")[1]);
            aRequiredComponentsCounts.push(
              aAllChoices[i].BundleSectionRequiredComponentCount
            );
            aSectionLabel.push(aAllChoices[i].SectionLabel);
            break;
          default:
        }
      }
    }
    CheckLoop: for (var i = 0; i < aSectionIDs.length; i++) {
      for (var j = 0; j < aSelections.length; j++) {
        if (
          aSelections[j].name.split("|")[1] == aSectionIDs[i] &&
          aSelections[j].checked
        )
          iCheckedCounter++;
      }
      if (iCheckedCounter != aRequiredComponentsCounts[i]) {
        if (iCheckedCounter == 0)
          alert(
            'You have not chosen any items for the "' +
              aSectionLabel[i] +
              '" section.  This section requires ' +
              aRequiredComponentsCounts[i] +
              "."
          );
        else if (iCheckedCounter == 1)
          alert(
            'You have only chosen 1 item for the "' +
              aSectionLabel[i] +
              '" section.  This section requires ' +
              aRequiredComponentsCounts[i] +
              "."
          );
        else if (iCheckedCounter < aRequiredComponentsCounts[i])
          alert(
            "You have only chosen " +
              iCheckedCounter +
              ' items for the "' +
              aSectionLabel[i] +
              '" section.  This section requires ' +
              aRequiredComponentsCounts[i] +
              "."
          );
        else
          alert(
            "You have chosen " +
              iCheckedCounter +
              ' items for the "' +
              aSectionLabel[i] +
              '" section.  This section requires ' +
              aRequiredComponentsCounts[i] +
              "."
          );

        var oNodeList = document.getElementsByTagName("input");
        for (var k = 0; k < oNodeList.length; k++) {
          if (
            oNodeList[k].name ==
            "SectionID|" +
              aSectionIDs[i] +
              "|" +
              aAllChoices[0].name.split("|")[2]
          ) {
            //alert(oNodeList[k].name.split('|')[1]+' == ' + aSectionIDs[i]);
            oNodeList[k].style.border = "thin solid red";
            oNodeList[k].focus();
          }
        }
        return false;
      }
      iCheckedCounter = 0;
    }
  }
  return true;
}

function ClearHiLites(thisForm) {
  var sDelivery = "";
  if (!ns) {
    for (var i = 0; i < thisForm.length; i++) {
      if (thisForm.elements[i].name.search("chkDelivery") != -1) {
        if (thisForm.elements[i].checked)
          sDelivery = thisForm.elements[i].value;
      }
      if (
        thisForm.elements[i].name.search("SectionID") != -1 &&
        thisForm.elements[i].name.search(sDelivery) != -1 &&
        (thisForm.elements[i].type == "radio" ||
          thisForm.elements[i].type == "checkbox")
      ) {
        document.getElementById(
          thisForm.elements[i].name + thisForm.elements[i].value
        ).style.border = "";
        //document.getElementById('SectionLabel|'+thisForm.elements[i].name.split('|')[1]).style.border='';
        thisForm.elements[i].style.border = "";
      }
    }
  }
}

function DuplicatesCheck(aAllChoices, thisForm) {
  var aSelections = new Array();

  if (aAllChoices.length) {
    for (var i = 0; i < aAllChoices.length; i++) {
      if (aAllChoices[i].checked) {
        if (aSelections.length) {
          for (var j = 0; j < aSelections.length; j++) {
            if (aAllChoices[i].value == aSelections[j].value) {
              for (var k = 0; k < thisForm.length; k++) {
                if (thisForm.elements[k].value == aSelections[j].value) {
                  //alert(thisForm.elements[k].name);
                  document.getElementById(
                    thisForm.elements[k].name + thisForm.elements[k].value
                  ).style.border = "thin solid red";
                  document
                    .getElementById(
                      thisForm.elements[k].name + thisForm.elements[k].value
                    )
                    .childNodes(0)
                    .focus();
                }
              }
              alert(
                "You have chosen " +
                  aSelections[j].value.split("_")[0] +
                  " more than once.\n Make sure that you have selected a unique set of items for your Pak Configuration."
              );
              return false;
            }
          }
        }
        aSelections.push(aAllChoices[i]);
      }
    }
  }
  return true;
}

///////////////// a la carte shopping /////////////////
function IsGroupChecked(sGroupID) {
  var bPass = false;
  for (x = 0; x < document.forms.length; x++) {
    for (y = 0; y < document.forms[x].elements.length; y++) {
      if (document.forms[x].elements[y].type == "checkbox") {
        if (
          document.forms[x].elements[y].name == sGroupID &&
          document.forms[x].elements[y].checked
        ) {
          bPass = true;
          break;
        }
      }
    }
  }
  return bPass;
}
function ProcessDiscounting() {
  var iNumberofSelectedItems = 0;
  var dRunningTotal = 0.0;
  var s = "";
  var sPrefix = "STS";
  //alert(document.frmPrice);
  if (!IsUndefined(document.frmPrice)) {
    var iFormsLength = document.forms.length;
    for (i = 0; i < iFormsLength; i++) {
      if (IsGroupChecked("Treecontrol" + eval(i + 1) + ":State")) {
        if (!IsUndefined(document.forms[i].radCourseSelect)) {
          //Process Elearning Config
          //alert(document.forms[i].radCourseSelect[0].name);
          bFull = false;
          for (j = 0; j < document.forms[i].radCourseSelect.length; j++) {
            if (
              document.forms[i].radCourseSelect[j].value == "el" &&
              document.forms[i].radCourseSelect[j].checked
            ) {
              bFull = true;
              name =
                "'" +
                sPrefix +
                document.forms[i].radCourseSelect[j].value +
                "'";
              break;
            }
          }
          if (bFull) {
            iNumberofSelectedItems += 1;
            //alert(name);
            //alert(eval(document.forms[i][eval(name)].value.replace('$','')));
            dRunningTotal +=
              eval(
                document.forms[i][eval(name)].value
                  .replace("$", "")
                  .replace(",", "")
              ) * 1;
          } else {
            if (!IsUndefined(document.frmElearningConfig.chkCourse)) {
              if (IsUndefined(document.frmElearningConfig.chkCourse.length)) {
                //alert(document.frmElearningConfig.chkCourse.type);
                if (
                  document.frmElearningConfig.chkCourse.checked ||
                  document.frmElearningConfig.chkCourse.type == "hidden"
                ) {
                  //alert(document.frmElearningConfig.chkCourse.value);

                  iNumberofSelectedItems += 1;
                  name =
                    "'" +
                    sPrefix +
                    document.frmElearningConfig.chkCourse.value +
                    "'";
                  //alert(name);
                  dRunningTotal +=
                    eval(
                      document.frmElearningConfig[eval(name)].value
                        .replace("$", "")
                        .replace(",", "")
                    ) * 1;
                }
              } else {
                for (
                  k = 0;
                  k < document.frmElearningConfig.chkCourse.length;
                  k++
                ) {
                  if (
                    document.frmElearningConfig.chkCourse[k].checked ||
                    document.frmElearningConfig.chkCourse[k].type == "hidden"
                  ) {
                    //alert(document.frmElearningConfig.chkCourse[k].value);

                    iNumberofSelectedItems += 1;
                    name =
                      "'" +
                      sPrefix +
                      "" +
                      document.frmElearningConfig.chkCourse[k].value +
                      "'";
                    //alert(document.frmElearningConfig[eval(name)]);
                    //for(q=0;q<document.frmElearningConfig.length;q++){
                    //	alert(document.frmElearningConfig[q].id);
                    //}

                    dRunningTotal +=
                      eval(
                        document.frmElearningConfig[eval(name)].value
                          .replace("$", "")
                          .replace(",", "")
                      ) * 1;
                  }
                }
              }
            }
          }
        } else {
          //Process Normal Groups
          if (!IsUndefined(document.forms[i].chkDelivery)) {
            if (IsUndefined(document.forms[i].chkDelivery.length)) {
              if (document.forms[i].chkDelivery.checked) {
                iNumberofSelectedItems += 1;
                name =
                  "'" + sPrefix + document.forms[i].chkDelivery.value + "'";
                //alert(eval(document.forms[i][eval(name)].value.replace('$','')));
                dRunningTotal +=
                  eval(
                    document.forms[i][eval(name)].value
                      .replace("$", "")
                      .replace(",", "")
                  ) * 1;
              }
            } else {
              for (j = 0; j < document.forms[i].chkDelivery.length; j++) {
                //alert(document.forms[i].chkDelivery[j].id);
                if (document.forms[i].chkDelivery[j].checked) {
                  iNumberofSelectedItems += 1;
                  name =
                    "'" +
                    sPrefix +
                    document.forms[i].chkDelivery[j].value +
                    "'";
                  dRunningTotal +=
                    eval(
                      document.forms[i][eval(name)].value
                        .replace("$", "")
                        .replace(",", "")
                    ) * 1;
                }
              }
            }
          }
        }
      }
    }
    ImplicitDiscount = GetImplicitDiscountPrice(
      dRunningTotal,
      iNumberofSelectedItems
    );
    //alert(iNumberofSelectedItems+'     '+dRunningTotal+'---*/'+formatCurrency(ImplicitDiscount,false));
    //alert(eval(dRunningTotal - ImplicitDiscount) * parseInt(document.frmPrice.quantity[document.frmPrice.quantity.selectedIndex].text));
    document.frmPrice.Saved.value = formatCurrency(
      eval(dRunningTotal - ImplicitDiscount) *
        parseInt(
          document.frmPrice.quantity[document.frmPrice.quantity.selectedIndex]
            .text
        ),
      false
    );
    document.frmPrice.Subtotal.value = formatCurrency(
      ImplicitDiscount *
        parseInt(
          document.frmPrice.quantity[document.frmPrice.quantity.selectedIndex]
            .text
        ),
      false
    );
  }
}

function CalculateDiscount(value, percent) {
  return value * percent * 0.01;
}
function SelectFullCurriculum(thisForm) {
  //alert(thisForm.radSelectAllCourses.checked);
  if (thisForm.radSelectAllCourses.checked) {
    if (!IsUndefined(document.frmElearningConfig.chkSelectAll)) {
      document.frmElearningConfig.chkSelectAll.checked = true;
    }
  } else {
    if (!IsUndefined(document.frmElearningConfig.chkSelectAll)) {
      document.frmElearningConfig.chkSelectAll.checked = false;
    }
  }
  SelectAllELearning();
}
function SelectCourses(chkSelectAll) {
  var chkDelivery;
  var chkGroup;
  for (i = 0; i < document.forms.length; i++) {
    //alert(document.forms[i].name);
    if (!IsUndefined(document.forms[i].radCourseSelect)) {
      chkGroup =
        document[eval("'" + "frmVG" + eval(i + 1) + "'")][
          eval("'" + "Treecontrol" + eval(i + 1) + ":State" + "'")
        ];
      //alert(document.forms[i].radSelectCourses);
      if (!IsUndefined(document.forms[i].radSelectCourses)) {
        if (document.frmElearningConfig.chkSelectAll.checked) {
          chkDelivery = document.forms[i].radSelectAllCourses;
          document.forms[i].radSelectAllCourses.checked = true;
        } else {
          chkDelivery = document.forms[i].radSelectCourses;
          document.forms[i].radSelectCourses.checked = true;
        }
      } else {
        //MOS
        //alert(document.frmElearningConfig.chkSelectAll.checked);
        chkDelivery = document.forms[i].radSelectAllCourses;
        if (!chkDelivery.checked) {
          chkDelivery.checked =
            document.frmElearningConfig.chkSelectAll.checked;
        }
      }
    }
  }
  if (!IsUndefined(chkGroup)) {
    if (!chkGroup.checked && chkSelectAll.checked) {
      chkGroup.click();
    }
  }
}
function SelectELearningGroup(chkCourse) {
  var chkDelivery;
  var chkGroup;
  var iGroupIndex;
  for (i = 0; i < document.forms.length; i++) {
    //alert(document.forms[i].name);
    if (!IsUndefined(document.forms[i].radCourseSelect)) {
      chkGroup =
        document[eval("'" + "frmVG" + eval(i + 1) + "'")][
          eval("'" + "Treecontrol" + eval(i + 1) + ":State" + "'")
        ];
      chkDelivery = document.forms[i].radSelectCourses;
      iGroupIndex = i + 1;
      if (!chkDelivery.checked) {
        chkDelivery.checked = chkCourse.checked;
      }
    }
  }
  if (!IsUndefined(chkGroup)) {
    if (!chkGroup.checked && chkCourse.checked) {
      chkGroup.checked = true;
      HiLiteGroup("rSelected" + iGroupIndex, true);
      HiLiteELearnConfig(true);
    }
  }
}
function HiLiteGroup(sItem, bTurnOn) {
  if (bTurnOn) {
    document.getElementById(sItem).style.background = "#548A00";
  } else {
    document.getElementById(sItem).style.background = "#BBBBBB";
  }
}
function SetELearnConfigHiLite(oElement, sBorder, sBorderStyle, sBorderColor) {
  oElement.style.border = sBorder;
  oElement.style.borderStyle = sBorderStyle;
  oElement.style.borderColor = sBorderColor;
}
function IsUndefined(item) {
  //alert(item+'' == 'undefined');
  return item + "" == "undefined";
}
function HiLiteELearnConfig(bTurnOn) {
  if (
    document.getElementById &&
    !IsUndefined(document.getElementById("divElearningConfig"))
  ) {
    if (bTurnOn) {
      //alert(document.getElementById('divElearningConfig').style);
      SetELearnConfigHiLite(
        document.getElementById("divElearningConfig"),
        "1px",
        "solid",
        "#548A00"
      );
    } else {
      SetELearnConfigHiLite(
        document.getElementById("divElearningConfig"),
        "1px",
        "solid",
        "#FFFFFF"
      );
    }
  }
}
function DeSelectAll() {
  document.frmElearningConfig.chkSelectAll.checked = false;
}

function SelectGroup(iGroupIndex, groupSelect, chkDelivery) {
  if (groupSelect.checked) {
    //alert(chkDelivery);
    if (!IsUndefined(groupSelect.form.radSelectAllCourses)) {
      HiLiteELearnConfig(true);
    }
    if (chkDelivery + "" == "") {
      chkDelivery = SelectFirstGroupItem(iGroupIndex);
    } else {
      chkDelivery.checked = true;
    }
    //document.getElementById('rSelected'+iGroupIndex).style.background = '#548A00';
    if (!IsUndefined(chkDelivery)) {
      if (chkDelivery.value == "pbt" || chkDelivery.value == "pbtdl") {
        if (document.getElementById("rSelectedTop" + iGroupIndex) != null) {
          HiLiteGroup("rSelectedTop" + iGroupIndex, true);
        }
        if (document.getElementById("rSelectedBottom" + iGroupIndex) != null) {
          HiLiteGroup("rSelectedBottom" + iGroupIndex, true);
        }
        if (document.getElementById("rSelectedTop" + iGroupIndex) == null) {
          HiLiteGroup("rSelected" + iGroupIndex, true);
        } else {
          HiLiteGroup("rSelected" + iGroupIndex, false);
        }
      } else {
        if (document.getElementById("rSelectedTop" + iGroupIndex)) {
          HiLiteGroup("rSelectedTop" + iGroupIndex, false);
          HiLiteGroup("rSelectedBottom" + iGroupIndex, true);
          HiLiteGroup("rSelected" + iGroupIndex, true);
        } else {
          HiLiteGroup("rSelected" + iGroupIndex, true);
        }
      }
    } else {
      HiLiteGroup("rSelected" + iGroupIndex, true);
    }
  } else {
    if (!IsUndefined(groupSelect.form.radSelectAllCourses)) {
      HiLiteELearnConfig(false);
    }
    DeSelectGroupItems(iGroupIndex);
    //document.getElementById('rSelected'+iGroupIndex).style.background = '#BBBBBB';
    if (iGroupIndex > 1) {
      HiLiteGroup("rSelected" + iGroupIndex, false);
    } else {
      if (document.getElementById("rSelectedTop" + iGroupIndex)) {
        HiLiteGroup("rSelectedBottom" + iGroupIndex, false);
        HiLiteGroup("rSelectedTop" + iGroupIndex, false);
        HiLiteGroup("rSelected" + iGroupIndex, false);
      } else {
        HiLiteGroup("rSelected" + iGroupIndex, false);
      }
    }
  }
}

function SelectFirstGroupItem(iGroupIndex) {
  var frmGroup = document[eval("'" + "frmVG" + iGroupIndex + "'")];
  if (IsUndefined(frmGroup.chkDelivery)) {
    frmGroup.radSelectAllCourses.click();
  } else {
    if (!IsUndefined(frmGroup.chkDelivery.length)) {
      frmGroup.chkDelivery[0].checked = true;
      return frmGroup.chkDelivery[0];
    } else {
      frmGroup.chkDelivery.checked = true;
      return frmGroup.chkDelivery;
    }
  }
}
function DeSelectAllCourses(chkCourse) {
  if (!chkCourse.checked) {
    document.frmElearningConfig.chkSelectAll.checked = false;
    for (i = 0; i < document.forms.length; i++) {
      if (!IsUndefined(document.forms[i].radCourseSelect)) {
        if (!IsUndefined(document.forms[i].radCourseSelect[0])) {
          //alert(document.forms[i].radCourseSelect[0]);
          document.forms[i].radCourseSelect[0].checked = true;
        } else {
          document.forms[i].radCourseSelect.checked =
            document.frmElearningConfig.chkSelectAll.checked;
        }
      }
    }
  }
}
function DeSelectGroupItems(iGroupIndex) {
  var frmGroup = document[eval("'" + "frmVG" + iGroupIndex + "'")];
  var chkGroupChkBox =
    frmGroup[eval("'" + "Treecontrol" + iGroupIndex + ":State" + "'")];
  if (IsUndefined(frmGroup.chkDelivery)) {
    if (!IsUndefined(frmGroup.radCourseSelect[0])) {
      frmGroup.radCourseSelect[0].checked = false;
      frmGroup.radCourseSelect[1].checked = false;
    } else {
      frmGroup.radSelectAllCourses.checked = false;
    }
  } else {
    //alert(frmGroup.chkDelivery.length);
    if (!IsUndefined(frmGroup.chkDelivery.length)) {
      for (i = 0; i < frmGroup.chkDelivery.length; i++) {
        frmGroup.chkDelivery[i].checked = false;
      }
    } else {
      if (!IsUndefined(frmGroup.chkDelivery)) {
        frmGroup.chkDelivery.checked = false;
      }
    }
  }
}

function SelectGroupCheckbox(chkDelivery) {
  var iGroupIndex = chkDelivery.form.name.replace("frmVG", "");
  var chkGroupChkBox =
    chkDelivery.form[eval("'" + "Treecontrol" + iGroupIndex + ":State" + "'")];
  chkGroupChkBox.checked = true;
  SelectGroup(iGroupIndex, chkGroupChkBox, chkDelivery);
}

function SelectAllELearning() {
  if (!IsUndefined(document.frmElearningConfig.chkCourse)) {
    if (IsUndefined(document.frmElearningConfig.chkCourse.length)) {
      if (!IsUndefined(document.frmElearningConfig.chkSelectAll)) {
        if (!document.frmElearningConfig.chkSelectAll.checked)
          document.frmElearningConfig.chkCourse.checked = false;
        else {
          document.frmElearningConfig.chkSelectAll.checked = true;
          document.frmElearningConfig.chkCourse.checked = true;
        }
      }
    } else {
      for (k = 0; k < document.frmElearningConfig.chkCourse.length; k++) {
        //alert(document.frmElearningConfig.chkCourse[k].checked);
        if (!IsUndefined(document.frmElearningConfig.chkSelectAll)) {
          if (!document.frmElearningConfig.chkSelectAll.checked)
            document.frmElearningConfig.chkCourse[k].checked = false;
          else document.frmElearningConfig.chkCourse[k].checked = true;
        }
      }
    }
  }
}
function IsSelectedCoursesChosen() {
  var bPass = false;
  var iFormsLength = document.forms.length;
  var bAtLeastOneGroupChecked = false;
  for (i = 0; i < iFormsLength; i++) {
    if (IsGroupChecked("Treecontrol" + eval(i + 1) + ":State")) {
      if (!IsUndefined(document.forms[i].radCourseSelect)) {
        bAtLeastOneGroupChecked = true;
        if (!IsUndefined(document.forms[i].radCourseSelect.length)) {
          if (
            (document.forms[i].radCourseSelect[0].checked &&
              document.forms[i].radCourseSelect[0].id == "radSelectCourses") ||
            document.forms[i].radCourseSelect[1].checked
          ) {
            if (IsUndefined(document.frmElearningConfig.chkCourse.length)) {
              if (
                document.frmElearningConfig.chkCourse.checked ||
                document.frmElearningConfig.chkCourse.type == "hidden"
              ) {
                bPass = true;
                return bPass;
              }
            } else {
              for (
                k = 0;
                k < document.frmElearningConfig.chkCourse.length;
                k++
              ) {
                if (
                  document.frmElearningConfig.chkCourse[k].checked ||
                  document.frmElearningConfig.chkCourse[k].type == "hidden"
                ) {
                  bPass = true;
                  return bPass;
                }
              }
            }
          }
        }
        //There is only one Radio button and assume that it is Full Cir.
        else {
          bPass = true;
          return bPass;
        }
      }
    }
  }
  if (bAtLeastOneGroupChecked) return false;
  else return true;
}
function SetConfig() {
  var iFormsLength = document.forms.length;
  var oVariantID;
  var sNewInput;
  var iComponentCounter = 0;
  if (!IsSelectedCoursesChosen()) {
    alert("Please be sure to select at least one eLearning Course.");
    return;
  }
  for (i = 0; i < iFormsLength; i++) {
    if (IsGroupChecked("Treecontrol" + eval(i + 1) + ":State")) {
      if (!IsUndefined(document.forms[i].radCourseSelect)) {
        //Process Elearning Config
        if (!IsUndefined(document.frmElearningConfig.chkCourse)) {
          if (IsUndefined(document.frmElearningConfig.chkCourse.length)) {
            //alert(document.frmElearningConfig.chkCourse.type);
            if (
              document.frmElearningConfig.chkCourse.checked ||
              document.frmElearningConfig.chkCourse.type == "hidden"
            ) {
              oVariantID = document.frmElearningConfig.VariantID;
            }
          } else {
            for (k = 0; k < document.frmElearningConfig.chkCourse.length; k++) {
              if (
                document.frmElearningConfig.chkCourse[k].checked ||
                document.frmElearningConfig.chkCourse[k].type == "hidden"
              ) {
                //for checkboxes, add them as you find them.
                oVariantID = document.frmElearningConfig.VariantID[k];
                iComponentCounter += 1;
                AddVariantInput(
                  oVariantID,
                  oVariantID.name,
                  oVariantID.id,
                  oVariantID.value
                );
                oVariantID = null;
              }
            }
          }
        }
      } else {
        //Process Normal Groups
        if (!IsUndefined(document.forms[i].chkDelivery)) {
          if (IsUndefined(document.forms[i].chkDelivery.length)) {
            if (document.forms[i].chkDelivery.checked) {
              oVariantID = document.forms[i].VariantID;
            }
          } else {
            for (j = 0; j < document.forms[i].chkDelivery.length; j++) {
              if (document.forms[i].chkDelivery[j].checked) {
                oVariantID = document.forms[i].VariantID[j];
              }
            }
          }
        }
      }
    }
    if (oVariantID != null) {
      //alert(oVariantID.value);
      iComponentCounter += 1;
      AddVariantInput(
        oVariantID,
        oVariantID.name,
        oVariantID.id,
        oVariantID.value
      );
    }
    oVariantID = null;
  }
  if (iComponentCounter == 0) {
    alert("You must choose at least one product selection.");
  } else {
    document.frmPrice.cmdAdd.disabled = true;
    document.frmPrice.submit();
  }
}
function AddVariantInput(oVariantID, sName, sId, sValue) {
  var iResetQty = document.frmPrice.quantity.value; //Fixes FireFox bug that resets the "quantity" contol
  sNewInput =
    '<input type="hidden" name="' +
    oVariantID.name +
    '" id="' +
    oVariantID.id +
    '" value="' +
    oVariantID.value +
    '"/>';
  document.getElementById("Price").innerHTML += sNewInput;
  document.frmPrice.quantity.value = iResetQty;
}
function GetDemo(sResourceID, sWindowName) {
  var sURL =
    "../pop.aspx?source=" + escape("demowindow.asp?resourceid=" + sResourceID);
  var sLocation = "no";
  var sMenubar = "no";
  var sScrollbars = "no";
  var sResizable = "no";
  var iTop = 50; //(screen.width/2) - 262.5;
  var iLeft = 50; //(screen.height/2) - 137.5;

  SpawnPop(
    sURL,
    sWindowName,
    sLocation,
    sMenubar,
    sScrollbars,
    sResizable,
    iTop,
    iLeft
  );
}
/*
page: http://www.selftestsoftware.com/
url: https://www.selftestsoftware.com/js/i_js_product.js
*/
