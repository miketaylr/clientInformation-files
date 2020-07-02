//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2006, 2010 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------

/**
 * @fileOverview This javascript is used by the store jsp's related to address creation and maintenance.
 * @version 1.0
 */

/**
 * The functions defined in this class enable address creation across the store.
 * @class The functions and variables defined in this class validate the form input field values entered by
 * the customer. Another set of functions help in loading the UI for the state field when there is a change
 * in the country field. Another set of functions enable creating an address in the shopcart page and
 * guest user checkout page.
 */

AddressHelper = {
  /* The name of the state field div. */
  /* styling class for the state field. */
  stateClass: null,

  selectedForm: "",
  /* To identify shipping validation */
  shippingValidationFlag: "",

  billingAddressId: "",
  shippingAddressId: "",

  /**
   * This function sets the styling class for the state field.
   * @param {string} stateClass The name of the styling class to be set for the state field.
   */
  setStateClass: function (stateClass) {
    this.stateClass = stateClass;
  },

  /**
   * This function return an array of countries from a global variable called countries.
   * If that variable does not already exist then it will be created and populated from a JSON of country objects which should
   * have been loaded into a div on the page prior to calling this function.
   *
   * @returns {Array} countries An array of countries.
   **/
  getCountryArray: function () {
    //If the countries array does not already exist then create it.

    if (document["countries"] == null) {
      countries = new Array();
      var theDiv = document.getElementById("countryListSelectionHelper");

      if (typeof theDiv == "undefined") return null;
      var divJSON = eval("(" + theDiv.innerHTML + ")");
      var countriesObject = divJSON.countries;

      for (var i = 0; i < countriesObject.length; i++) {
        var countryObject = countriesObject[i];
        countries[countryObject.code] = new Object();
        countries[countryObject.code].name = countryObject.displayName;
        countries[countryObject.code].countryCallingCode =
          countryObject.callingCode;

        if (countryObject.states.length > 0) {
          countries[countryObject.code].states = new Object();
          for (var j = 0; j < countryObject.states.length; j++) {
            var state = countryObject.states[j];
            countries[countryObject.code].states[state.code] =
              state.displayName;
          }
        }
      }
    }

    return countries;
  },

  /**
   * This function will load the state field depending on the country selection.
   * @param {string} formName  The name of the address form containing the state field and country field.
   * @param {string} stateDiv  The name of the state field.
   * @param {string} id The id of the state field to be created.
   * @param {boolean} keepCurrentState A true or false value used to determine whether to keep the current value in the state field or to remove it.
   * @param {string} copyValue The value to be copied to the newly generated state field.
   */
  loadStatesUI: function (
    formName,
    paramPrefix,
    stateDiv,
    id,
    keepCurrentState,
    copyValue
  ) {
    this.getCountryArray();
    var form = document.getElementById(formName);
    if (
      paramPrefix == null ||
      paramPrefix == "undefined" ||
      paramPrefix == ""
    ) {
      paramPrefix = "";
    }
    var newid = paramPrefix + id;
    var currentState;

    if (
      keepCurrentState != null &&
      keepCurrentState != "undefined" &&
      keepCurrentState == true
    ) {
      currentState = document.getElementById(newid).value;
    } else {
      currentState = "";
    }

    if (copyValue != null && copyValue != "undefined" && copyValue != "") {
      currentState = copyValue;
    }
    if (id == "_state1") {
      this.setStateClass("form_input");
      var currentCountryCode = form[paramPrefix + "_country"].value;
    } else {
      var currentCountryCode = form[paramPrefix + "country"].value;
    }

    var stateDivObj = document.getElementById(stateDiv);
    if (dojo.isIE) {
      var stateClass = document.getElementById(newid).getAttribute("className");
    } /* For IE */ else {
      var stateClass = document.getElementById(newid).getAttribute("class");
    }

    if (stateClass != "drop_down_country") this.setStateClass(stateClass);
    while (stateDivObj.hasChildNodes()) {
      stateDivObj.removeChild(stateDivObj.firstChild);
    }

    if (countries[currentCountryCode].states) {
      /* switch to state list. */
      stateDivObj.appendChild(
        this.createStateWithOptions(
          paramPrefix,
          currentCountryCode,
          currentState,
          id
        )
      );
    } else {
      /* switch to state text input. */
      stateDivObj.appendChild(this.createState(paramPrefix, currentState, id));
    }
  },

  /**
   *	This function creates an input element to represent the state.
   *  @param {string} paramPrefix The value can be shipping, billing or blank.
   *  @param {string} currentState The value in the state field.
   *  @param {string} id The id of the state field.
   */
  createState: function (paramPrefix, currentState, id) {
    var stateInput = document.createElement("input");
    stateInput.setAttribute("id", paramPrefix + id);
    if (id == "_state1") {
      stateInput.setAttribute("name", paramPrefix + "_state");
    } else {
      stateInput.setAttribute("name", paramPrefix + "state");
    }
    stateInput.setAttribute("class", this.stateClass);
    stateInput.setAttribute("className", this.stateClass);
    stateInput.setAttribute("size", "35");
    stateInput.setAttribute("maxlength", "49");
    if (currentState != null && currentState != "undefined") {
      stateInput.setAttribute("value", currentState);
    }
    return stateInput;
  },

  /**
   * This function creates a <select> element to represent the state field and loads it with the
   * states corresponding to the country field.
   * @param {string} paramPrefix The value can be shipping, billing or blank.
   * @param {string} currentCountryCode The country code of the selected country.
   * @param {string} currentState The value in the state field.
   * @param {string} id The id of the state field.
   */
  createStateWithOptions: function (
    paramPrefix,
    currentCountryCode,
    currentState,
    id
  ) {
    this.getCountryArray();
    var stateSelect = document.createElement("select");
    stateSelect.setAttribute("id", paramPrefix + id);
    if (id == "_state1") {
      stateSelect.setAttribute("name", paramPrefix + "_state");
    } else {
      stateSelect.setAttribute("name", paramPrefix + "state");
    }
    stateSelect.setAttribute("class", "drop_down_country");
    stateSelect.setAttribute("className", "drop_down_country");
    /*clear old options. */
    stateSelect.options.length = 0;

    /* add all states. */
    for (state_code in countries[currentCountryCode].states) {
      aOption = document.createElement("option");
      stateSelect.options[stateSelect.length] = aOption;
      aOption.text = countries[currentCountryCode].states[state_code];
      aOption.value = state_code;

      if (
        state_code == currentState ||
        countries[currentCountryCode].states[state_code] == currentState
      ) {
        aOption.selected = true;
      }
    }

    return stateSelect;
  },

  /**
   * This function validates the address form independently from the order of the fields displayed on the form, i.e. independent from the locale.
   * A hidden field named "fields" must be set in the jsp/jspf file that calls this method. The purpose of this hidden field is
   * to set all the mandatory input fields and the order of these fields displayed on each locale-specific address entry page, so that
   * this method knows which input fields to validate and in which order it should validate them.
   *
   * assumptions:1. Mandatory fields use UPPER CASE, non-mandatory fields use lower case.
   *	     	   2. The error messages used in this method are declared in the jsp/jspf files that call this method.
   * @param {string} form The name of the address form obtained from the page containing address input fields.
   * @param {string} prefix The value is set to shipping or billing.
   *
   * @return {boolean} return true if no error was found, or the hidden field "fields" were not set in the jsp/jspf file that calls this method,
   * return false if form could not be found, or if there was an error validating a particular field.
   */

  validateAddressForm: function (form, prefix) {
    reWhiteSpace = new RegExp(/^\s+$/);
    if (prefix == null) {
      prefix = "";
    }
    if (form != null) {
      var fields = "";
      if (
        form["AddressForm_FieldsOrderByLocale"] != null &&
        form["AddressForm_FieldsOrderByLocale"].value != null &&
        form["AddressForm_FieldsOrderByLocale"].value != ""
      ) {
        fields = form["AddressForm_FieldsOrderByLocale"].value.split(",");
      } else if (
        document.getElementById("AddressForm_FieldsOrderByLocale").value !=
          null &&
        document.getElementById("AddressForm_FieldsOrderByLocale").value != ""
      ) {
        fields = document
          .getElementById("AddressForm_FieldsOrderByLocale")
          .value.split(",");
      }
      var nickName = prefix + "nickName";
      var lastName = prefix + "lastName";
      var firstName = prefix + "firstName";
      var middleName = prefix + "middleName";
      var address1 = prefix + "address1";
      var address3 = prefix + "address3";
      var city = prefix + "city";
      var state = prefix + "state";
      var country = prefix + "country";
      var zipCode = prefix + "zipCode";
      var email1 = prefix + "email1";
      var phone1 = prefix + "phone1";
      //Brazil's form fields to validate
      var pay_CPFNumber, taxPayerId, companyName, organizationName;
      if (typeof isBrazilStore != "undefined" && isBrazilStore) {
        pay_CPFNumber = "pay_CPFNumber";
        taxPayerId = prefix + "taxPayerId";
        companyName = prefix + "companyName";
        organizationName = prefix + "organizationName"; //company's short name
      }
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field == "NICK_NAME" || field == "nick_name") {
          form[nickName].value = trim(form[nickName].value);
          if (
            field == "NICK_NAME" &&
            (form[nickName].value == "" ||
              reWhiteSpace.test(form[nickName].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[nickName].id,
              MessageHelper.messages["ERROR_RecipientEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[nickName].value, 254)) {
            MessageHelper.formErrorHandleClient(
              form.nickName.id,
              MessageHelper.messages["ERROR_RecipientTooLong"]
            );
            return false;
          }
        } else if (field == "LAST_NAME" || field == "last_name") {
          form[lastName].value = trim(form[lastName].value);
          if (
            field == "LAST_NAME" &&
            (form[lastName].value == "" ||
              reWhiteSpace.test(form[lastName].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[lastName].id,
              MessageHelper.messages["ERROR_LastNameEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[lastName].value, 128)) {
            MessageHelper.formErrorHandleClient(
              form[lastName].id,
              MessageHelper.messages["ERROR_LastNameTooLong"]
            );
            return false;
          }
        } else if (field == "FIRST_NAME" || field == "first_name") {
          form[firstName].value = trim(form[firstName].value);
          if (
            field == "FIRST_NAME" &&
            (form[firstName].value == "" ||
              reWhiteSpace.test(form[firstName].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[firstName].id,
              MessageHelper.messages["ERROR_FirstNameEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[firstName].value, 128)) {
            MessageHelper.formErrorHandleClient(
              form[firstName].id,
              MessageHelper.messages["ERROR_FirstNameTooLong"]
            );
            return false;
          }
        } else if (field == "MIDDLE_NAME" || field == "middle_name") {
          form[middleName].value = trim(form[middleName].value);
          if (
            field == "MIDDLE_NAME" &&
            (form[middleName].value == "" ||
              reWhiteSpace.test(form[middleName].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[middleName].id,
              MessageHelper.messages["ERROR_MiddleNameEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[middleName].value, 128)) {
            MessageHelper.formErrorHandleClient(
              form[middleName].id,
              MessageHelper.messages["ERROR_MiddleNameTooLong"]
            );
            return false;
          }
        } else if (field == "ADDRESS" || field == "address") {
          form[address1].value = trim(form[address1].value);
          form[address3].value = trim(form[address3].value);
          if (
            field == "ADDRESS" &&
            (form[address1].value == "" ||
              reWhiteSpace.test(form[address1].value)) &&
            (form[address3].value == "" ||
              reWhiteSpace.test(form[address3].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[address1].id,
              MessageHelper.messages["ERROR_AddressEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[address1].value, 100)) {
            MessageHelper.formErrorHandleClient(
              form[address1].id,
              MessageHelper.messages["ERROR_AddressTooLong"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[address3].value, 50)) {
            MessageHelper.formErrorHandleClient(
              form[address3].id,
              MessageHelper.messages["ERROR_AddressTooLong"]
            );
            return false;
          }
        } else if (field == "CITY" || field == "city") {
          form[city].value = trim(form[city].value);
          if (
            field == "CITY" &&
            (form[city].value == "" || reWhiteSpace.test(form[city].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[city].id,
              MessageHelper.messages["ERROR_CityEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[city].value, 128)) {
            MessageHelper.formErrorHandleClient(
              form[city].id,
              MessageHelper.messages["ERROR_CityTooLong"]
            );
            return false;
          }
        } else if (field == "STATE/PROVINCE" || field == "state/province") {
          var state = form[state];
          state.value = trim(state.value);
          if (
            field == "STATE/PROVINCE" &&
            (state.value == null ||
              state.value == "" ||
              reWhiteSpace.test(state.value))
          ) {
            MessageHelper.formErrorHandleClient(
              state.id,
              MessageHelper.messages["ERROR_StateEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(state.value, 128)) {
            MessageHelper.formErrorHandleClient(
              state.id,
              MessageHelper.messages["ERROR_StateTooLong"]
            );
            return false;
          }
        } else if (field == "COUNTRY/REGION" || field == "country/region") {
          form[country].value = trim(form[country].value);
          if (
            field == "COUNTRY/REGION" &&
            (form[country].value == "" ||
              reWhiteSpace.test(form[country].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[country].id,
              MessageHelper.messages["ERROR_CountryEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[country].value, 128)) {
            MessageHelper.formErrorHandleClient(
              form[country].id,
              MessageHelper.messages["ERROR_CountryTooLong"]
            );
            return false;
          }
        } else if (field == "ZIP" || field == "zip") {
          form[zipCode].value = trim(form[zipCode].value);
          //check Brazil store CEP code ( like zip code ) for validation
          if (typeof isBrazilStore != "undefined" && isBrazilStore) {
            //see if CEP# is empty
            if (
              field == "ZIP" &&
              (form[zipCode].value == "" ||
                reWhiteSpace.test(form[zipCode].value))
            ) {
              MessageHelper.formErrorHandleClient(
                form[zipCode].id,
                MessageHelper.messages["ERROR_CEPNumberEmpty"]
              );
              return false;
            }
            //see if CEP# is longer than 9 characters
            if (!MessageHelper.isValidUTF8length(form[zipCode].value, 9)) {
              MessageHelper.formErrorHandleClient(
                form[zipCode].id,
                MessageHelper.messages["ERROR_CEPNumberTooLong"]
              );
              return false;
            }
            //see if CEP# is between 8 - 9 characters
            if (
              MessageHelper.utf8StringByteLength(form[zipCode].value) != 8 &&
              MessageHelper.utf8StringByteLength(form[zipCode].value) != 9
            ) {
              MessageHelper.formErrorHandleClient(
                form[zipCode].id,
                MessageHelper.messages["ERROR_CEPNumberInvalid"]
              );
              return false;
            }
          } else {
            //check Madisons zip code for validation
            if (
              field == "ZIP" &&
              (form[zipCode].value == "" ||
                reWhiteSpace.test(form[zipCode].value))
            ) {
              MessageHelper.formErrorHandleClient(
                form[zipCode].id,
                MessageHelper.messages["ERROR_ZipCodeEmpty"]
              );
              return false;
            }
            if (!MessageHelper.isValidUTF8length(form[zipCode].value, 40)) {
              MessageHelper.formErrorHandleClient(
                form[zipCode].id,
                MessageHelper.messages["ERROR_ZipCodeTooLong"]
              );
              return false;
            }
          }
          //check Brazil's Consumer or Business fields for validation
        } else if (
          typeof isBrazilStore != "undefined" &&
          isBrazilStore &&
          (field == "CPF_NUMBER" || field == "cpf_number")
        ) {
          if (
            form["consumerRegistration"] != null &&
            form["consumerRegistration"].checked
          ) {
            //consumer registration, check CPF#
            form[pay_CPFNumber].value = trim(form[pay_CPFNumber].value);
            if (
              field == "CPF_NUMBER" &&
              (form[pay_CPFNumber].value == "" ||
                reWhiteSpace.test(form[pay_CPFNumber].value))
            ) {
              MessageHelper.formErrorHandleClient(
                form[pay_CPFNumber].id,
                MessageHelper.messages["ERROR_CPFNumberEmpty"]
              );
              return false;
            }
            if (
              MessageHelper.utf8StringByteLength(form[pay_CPFNumber].value) !=
                11 ||
              !MyBrazilAccountDisplay.isValidCpf(form[pay_CPFNumber].value)
            ) {
              MessageHelper.formErrorHandleClient(
                form[pay_CPFNumber].id,
                MessageHelper.messages["ERROR_CPFNumberInvalid"]
              );
              return false;
            }
          } else {
            //Business registration, check CNPJ#, companyname and CompanyShort name
            //note:CPF field is shared with CNPJ#, only label is different on UI, same input field
            form[pay_CPFNumber].value = trim(form[pay_CPFNumber].value);
            //validate CNPJ /CGC #
            if (
              field == "CPF_NUMBER" &&
              (form[pay_CPFNumber].value == "" ||
                reWhiteSpace.test(form[pay_CPFNumber].value))
            ) {
              MessageHelper.formErrorHandleClient(
                form[pay_CPFNumber].id,
                MessageHelper.messages["ERROR_CNPJNumberEmpty"]
              );
              return false;
            }
            if (
              MessageHelper.utf8StringByteLength(form[pay_CPFNumber].value) > 14
            ) {
              //longer number, 14
              MessageHelper.formErrorHandleClient(
                form[pay_CPFNumber].id,
                MessageHelper.messages["ERROR_CNPJNumberToLong"]
              );
              return false;
            }
            if (
              MessageHelper.utf8StringByteLength(form[pay_CPFNumber].value) !=
                14 ||
              !MyBrazilAccountDisplay.isValidCnpj(form[pay_CPFNumber].value)
            ) {
              MessageHelper.formErrorHandleClient(
                form[pay_CPFNumber].id,
                MessageHelper.messages["ERROR_CNPJNumberInvalid"]
              );
              return false;
            }
            //validate company name, can't be blank
            form[companyName].value = trim(form[companyName].value);
            if (
              form[companyName].value == "" ||
              reWhiteSpace.test(form[companyName].value)
            ) {
              MessageHelper.formErrorHandleClient(
                form[companyName].id,
                MessageHelper.messages["ERROR_CompanyNameEmpty"]
              );
              return false;
            }
            if (!MessageHelper.isValidUTF8length(form[companyName].value, 80)) {
              MessageHelper.formErrorHandleClient(
                form[companyName].id,
                MessageHelper.messages["ERROR_CompanyNameTooLong"]
              );
              return false;
            }
            //validate company's short name, can't be blank
            form[organizationName].value = trim(form[organizationName].value);
            if (
              form[organizationName].value == "" ||
              reWhiteSpace.test(form[organizationName].value)
            ) {
              MessageHelper.formErrorHandleClient(
                form[organizationName].id,
                MessageHelper.messages["ERROR_CompanyShortNameEmpty"]
              );
              return false;
            }
          }
        } else if (field == "EMAIL1" || field == "email1") {
          form[email1].value = trim(form[email1].value);
          if (
            field == "EMAIL1" &&
            (form[email1].value == "" || reWhiteSpace.test(form[email1].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[email1].id,
              MessageHelper.messages["ERROR_EmailEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[email1].value, 256)) {
            MessageHelper.formErrorHandleClient(
              form[email1].id,
              MessageHelper.messages["ERROR_EmailTooLong"]
            );
            return false;
          }
          if (!MessageHelper.isValidEmail(form[email1].value)) {
            MessageHelper.formErrorHandleClient(
              form[email1].id,
              MessageHelper.messages["ERROR_INVALIDEMAILFORMAT"]
            );
            return false;
          }
        } else if (field == "PHONE1" || field == "phone1") {
          form[phone1].value = trim(form[phone1].value);
          if (
            field == "PHONE1" &&
            (form[phone1].value == "" || reWhiteSpace.test(form[phone1].value))
          ) {
            MessageHelper.formErrorHandleClient(
              form[phone1].id,
              MessageHelper.messages["ERROR_PhonenumberEmpty"]
            );
            return false;
          }
          if (!MessageHelper.isValidUTF8length(form[phone1].value, 32)) {
            MessageHelper.formErrorHandleClient(
              form[phone1].id,
              MessageHelper.messages["ERROR_PhoneTooLong"]
            );
            return false;
          }
          if (!MessageHelper.IsValidPhone(form[phone1].value)) {
            MessageHelper.formErrorHandleClient(
              form[phone1].id,
              MessageHelper.messages["ERROR_INVALIDPHONE"]
            );
            return false;
          }
        } else {
          console.debug(
            "error: mandatory field name " +
              mandatoryField +
              " is not recognized."
          );
          return false;
        }
      }
      if (form[address1].value == "" && form[address3].value != "") {
        form[address1].value = form[address3].value;
        form[address3].value = "";
      }
      if (typeof isBrazilStore != "undefined" && isBrazilStore) {
        if (
          form["consumerRegistration"] != null &&
          form["consumerRegistration"].checked
        ) {
          //registered as a consumer, clear out the Business fields
          form[companyName].value = "";
          form[organizationName].value = "";
          form[taxPayerId].value = "";
        }
      }
      return true;
    }
    return false;
  },

  /**
   * This function saves the address entry form when a registered customer wants to edit/add a new address
   * during checkout from  his/her shopping cart.
   * @param {string} The id of the service that was invoked, e.g. AjaxUpdateAddressForPerson, AjaxAddAddressForPerson, etc.
   * @param {string} The name of the form containing address information.
   */

  saveShopCartAddress: function (serviceId, formName) {
    var form = document.forms[formName];
    if (
      form.addressType != null &&
      form.addressType.value == "ShippingAndBilling"
    ) {
      serviceId = "AjaxAddShippingAndBillingAddressForPersonDuringCheckout";
    }
    if (this.validateAddressForm(form)) {
      this.saveAddress(serviceId, formName);
    }
  },

  /**
   * This function saves the address entry form when a registered customer wants to edit/add a new address
   * during checkout from  his/her shopping cart.
   * @param {string} The id of the service that was invoked, e.g. AjaxUpdateAddressForPerson, AjaxAddAddressForPerson, etc.
   * @param {string} The name of the form containing address information.
   */

  savecheckoutAddress: function (serviceId, formName) {
    var form = document.forms[formName];

    if (form.addressType != null && form.addressType.value == "Billing") {
      serviceId = "AjaxAddShippingAndBillingAddressForPersonDuringCheckout";
    }
    if (PaymentValidation.fnValidateUserInfo("clientInformationForm")) {
      this.saveaddressduringCheckout(serviceId, formName);
    }
  },

  /**
   * This function saves the address entry form on an unregistered user's checkout page.
   * @param {string} formName1 The name of the billing address form.
   * @param {string} formName2 The name of the shipping address form.
   */
  /* Added for Shipping Page- Guest User */
  saveUnregisteredShipAddress: function (formName1, formName2) {
    if (formName1 == "") {
      formName1 = this.selectedForm;
    }
    if (
      formName1 == "" &&
      dojo.byId("billingAddrGuest").className == "active"
    ) {
      formName1 = "billingAddressForm";
    }
    if (formName1 == "billingAddressForm") {
      document.location.href =
        "RonaOrderUpdateCmd?ShippingaddressId=" +
        document.billingAddressForm.shippingAddressId.value +
        "&orderId=" +
        document.billingAddressForm.orderId.value +
        "&langId=" +
        document.billingAddressForm.langId.value +
        "&storeId=" +
        document.billingAddressForm.storeId.value +
        "&catalogId=" +
        document.billingAddressForm.catalogId.value +
        "&shipmentType=single&orderPrepare=true&giftCard=true&shippingPageFlag=true&checkoutFlag=false&shipAddressBook=false";
    } else {
      var form1 = document.forms[formName1];

      /*Validate form input fields */
      if (
        ShippingValidationGuest.fnValidateUserShippingInfo(
          "clientInformationForm"
        )
      ) {
        _gaq.push([
          "_trackEvent",
          "Shopping cart",
          "Go to confirmation",
          "Member",
        ]);
        form1.addressType.value = "ShippingAndBilling";
        this.saveAddress("AddShippingAddress", "addAddressForm");
      }
    }
  },

  /* Added for Defect #1540 */
  saveRegisteredAddress: function (formName1) {
    var form1 = document.forms[formName1];
    if (form1 != "") {
      document.location.href =
        "RonaLogonFormView?orderId=" +
        document.clientInformationForm.orderId.value +
        "&firstName=" +
        document.clientInformationForm.firstName.value +
        "&lastName=" +
        document.clientInformationForm.lastName.value +
        "&address1=" +
        document.clientInformationForm.address1.value +
        "&address3=" +
        document.clientInformationForm.address3.value +
        "&city=" +
        document.clientInformationForm.city.value +
        "&zipCode=" +
        document.clientInformationForm.zipCode.value +
        "&email1=" +
        document.clientInformationForm.email1.value +
        "&email1Conf=" +
        document.clientInformationForm.email1Conf.value +
        "&langId=" +
        document.clientInformationForm.langId.value +
        "&storeId=" +
        document.clientInformationForm.storeId.value +
        "&catalogId=" +
        document.clientInformationForm.catalogId.value +
        "&myAcctMain=1&accountCheck=true";
    }
  },

  /**
   * This function saves the address entry form on an unregistered user's checkout page.
   * @param {string} formName1 The name of the billing address form.
   * @param {string} formName2 The name of the shipping address form.
   */
  /* Added for Shipping Page- Registered User */
  saveUnregisteredCheckoutAddress: function (formName1, formName2) {
    if (formName1 == "") {
      formName1 = this.selectedForm;
    }
    if (
      formName1 == "" &&
      dojo.byId("billingAddrGuest").className == "active"
    ) {
      formName1 = "billingAddressForm";
    }
    if (formName1 == "addAddressForm") {
      if (ShippingValidation.fnValidateUserShippingInfo("addAddressForm")) {
        document.location.href =
          "RonaOrderUpdateCmd?FirstName=" +
          document.addAddressForm.firstName.value +
          "&LastName=" +
          document.addAddressForm.lastName.value +
          "&ShippingaddressId=" +
          document.addAddressForm.shippingAddressId.value +
          "&orderId=" +
          document.addAddressForm.orderId.value +
          "&langId=" +
          document.addAddressForm.langId.value +
          "&storeId=" +
          document.addAddressForm.storeId.value +
          "&catalogId=" +
          document.addAddressForm.catalogId.value +
          "&shipmentType=single&orderPrepare=true&giftCard=true&shippingPageFlag=true&checkoutFlag=false&shipAddressBook=true";
        return;
      }
    }
    if (formName1 == "billingAddressForm") {
      document.location.href =
        "RonaOrderUpdateCmd?ShippingaddressId=" +
        document.billingAddressForm.shippingAddressId.value +
        "&orderId=" +
        document.billingAddressForm.orderId.value +
        "&langId=" +
        document.billingAddressForm.langId.value +
        "&storeId=" +
        document.billingAddressForm.storeId.value +
        "&catalogId=" +
        document.billingAddressForm.catalogId.value +
        "&shipmentType=single&orderPrepare=true&giftCard=true&shippingPageFlag=true&checkoutFlag=false&shipAddressBook=false";
    } else {
      var form1 = document.forms[formName1];
      /*Validate form input fields */
      if (
        ShippingValidation.fnValidateUserShippingInfo("clientInformationForm")
      ) {
        if (MyAccountServicesDeclarationJS.addressAdded == "true") {
          document.location.href =
            "RonaOrderUpdateCmd?ShippingaddressId=" +
            document.clientInformationForm.shippingAddressId.value +
            "&orderId=" +
            document.clientInformationForm.orderId.value +
            "&langId=" +
            document.clientInformationForm.langId.value +
            "&storeId=" +
            document.clientInformationForm.storeId.value +
            "&catalogId=" +
            document.clientInformationForm.catalogId.value +
            "&shipmentType=single&orderPrepare=true&giftCard=true&shippingPageFlag=true&checkoutFlag=false&shipAddressBook=false";
        } else {
          _gaq.push([
            "_trackEvent",
            "Shopping cart",
            "Go to confirmation",
            "Member",
          ]);
          form1.addressType.value = "ShippingAndBilling";
          this.saveAddress("AddShippingAddress", "clientInformationForm");
        }
      }
    }
  },
  /* Added for Buyer Info Page- Guest */
  saveUnregisteredBillingAddress: function (formName1, formName2) {
    var form1 = document.forms[formName1];

    /*Validate form input fields */
    var errobj1 = document.getElementById("zipCodeLabel"); //codePostalLabel
    if (errobj1 != null && errobj1.getAttribute("class") == "error") {
      return;
    }

    AddressHelper.clearErrors("saveUnregisteredBillingAddress");

    if (PaymentValidation.fnValidateUserInfo("clientInformationForm")) {
      _gaq.push([
        "_trackEvent",
        "Shopping cart",
        "Go to confirmation",
        "Guest form completed",
      ]);
      form1.addressType.value = "ShippingAndBilling";
      this.saveaddressduringCheckout(
        "AddShippingAddress",
        "clientInformationForm"
      );
    }
  },

  /**
   * This function saves an address entry form to the associated service.
   * @param {string} serviceId The id of the service that was invoked, e.g. AjaxUpdateAddressForPerson, AjaxAddAddressForPerson, etc.
   * @param {string} formName The name of the form containing address information.
   */
  /* Added for Shipping Page- Registered User */
  saveAddress: function (serviceId, formName) {
    var form = document.forms[formName];
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();
    var timeStamp =
      hours + " " + minutes + " " + day + " " + month + " " + year;

    if (form.addressTitle != null && form.addressTitle != undefined) {
      form.nickName.value = form.addressTitle.value;
    } else {
      form.nickName.value = timeStamp;
    }
    var addressService = wc.service.getServiceById(serviceId);
    addressService.formId = formName;

    cursor_wait();
    wc.service.invoke(serviceId);
  },

  /* Added for Buyer Info Page- Guest */
  saveaddressduringCheckout: function (serviceId, formName) {
    var form = document.forms[formName];
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();
    var seconds = currentTime.getSeconds();
    var timeStamp =
      hours +
      " " +
      minutes +
      " " +
      seconds +
      " " +
      day +
      " " +
      month +
      " " +
      year;

    if (form.nickName.value == "") {
      form.nickName.value = form.email1.value + " " + timeStamp;
    }

    var addressService = wc.service.getServiceById(serviceId);
    addressService.formId = formName;

    cursor_wait();
    wc.service.invoke(serviceId);
  },

  /**
   * This function calls UpdateOrderItem/AjaxUpdateOrderItem service to update order calculation
   */

  updateOrderAfterAddressUpdate: function () {
    var params = [];
    params["storeId"] = this.storeId;
    params["catalogId"] = this.catalogId;
    params["langId"] = this.langId;
    params.calculationUsage = "-1,-2,-3,-4,-5,-6,-7";
    params.orderId = ".";

    cursor_wait();
    wc.service.invoke("AjaxUpdateOrderAfterAddressUpdate", params);
  },

  /**
   *  This function populates the country code to mobile phone based on the selected country.
   *  @param {string} countryDropDownId The id of the mobile country drop down list
   *  @param {string} countryCallingCodeId The id of the mobile country calling code text box.
   */

  loadCountryCode: function (countryDropDownId, countryCallingCodeId) {
    this.getCountryArray();
    var countryCode = document.getElementById(countryDropDownId).value;
    document.getElementById(countryCallingCodeId).value =
      countries[countryCode].countryCallingCode;
  },

  /**
   *  This function checks for an entry in the Mobile Phone Number field.
   *  If a Mobile Phone number has been entered, it enables the SMS Notifications/Promotions checkbox,
   *  else it disables the SMS Notifications/Promotions checkbox.
   *  @param {string} form The name of the form containing the Mobile Phone Number entry field.
   */
  enableSMSNotifications: function (form) {
    var form = document.forms[form];
    if (form.mobilePhone1.value != "") {
      form.sendMeSMSNotification.disabled = false;
      form.sendMeSMSPreference.disabled = false;
    } else {
      form.sendMeSMSNotification.disabled = true;
      form.sendMeSMSPreference.disabled = true;
      form.sendMeSMSNotification.checked = false;
      form.sendMeSMSPreference.checked = false;
    }
  },

  /**
   *  This function populates the all addresses and filter the user selected address.
   *  @param {addressId} present billing addressId
   */

  updateMemberAddress: function (addressId) {
    addressBookMember = new Array();
    this.billingAddressId = addressId;
    var theDiv = document.getElementById("displayAddressBookforMember");

    if (typeof theDiv == "undefined") return null;
    var divJSON = eval("(" + theDiv.innerHTML + ")");
    var addressObject = divJSON.addressBookMember;
    for (var i = 0; i < addressObject.length; i++) {
      ob = new Object();
      ob.firstName = addressObject[i].firstName;
      ob.lastName = addressObject[i].lastName;

      ob.address1 = addressObject[i].address1;
      ob.address3 = addressObject[i].address3;
      ob.city = addressObject[i].city;
      ob.state = addressObject[i].state;
      ob.zipCode = addressObject[i].zipCode;
      ob.emailAddress1 = addressObject[i].emailAddress1;
      ob.phone1 = addressObject[i].phone1;

      addressBookMember[addressObject[i].addressId] = ob; //new Object();
      //addressBookMember[addressObject[i].addressId].firstName = addressObject.firstName;
      //addressBookMember[addressObject[i].addressId].lastName = addressObject.lastName;
    }

    if (
      addressBookMember[addressId] != null &&
      addressBookMember[addressId] != undefined
    ) {
      document.getElementById("selectedBillingAddress").style.display = "block";
      if (
        document.getElementById("btn-cancel") != null &&
        document.getElementById("btn-cancel") != undefined
      ) {
        document.getElementById("btn-cancel").style.display = "none";
      }
      var form1 = document.forms["addAddressForm"];
      var firstName = addressBookMember[addressId].firstName;
      var lastName = addressBookMember[addressId].lastName;

      var address1 = addressBookMember[addressId].address1;
      var address3 = addressBookMember[addressId].address3;
      var city = addressBookMember[addressId].city;
      var state = addressBookMember[addressId].state;
      var zipCode = addressBookMember[addressId].zipCode;
      var emailAddress1 = addressBookMember[addressId].emailAddress1;
      var phone1 = addressBookMember[addressId].phone1;

      dojo.byId("memberFirstname").innerHTML = firstName;
      dojo.byId("memberLastname").innerHTML = lastName;
      dojo.byId("memberAddress1").innerHTML =
        address1 + "," + city + "," + state;
      dojo.byId("memberAddress3").innerHTML = address3;
      dojo.byId("memberZipCode").innerHTML = zipCode;
      dojo.byId("memberEmailAddress1").innerHTML = emailAddress1;
      dojo.byId("memberPhone1").innerHTML = phone1;

      //form1.shippingAddressId.value = addressId ;
    }
  },

  updateMemberShippingAddress: function (addressId) {
    addressBookMember = new Array();
    this.shippingAddressId = addressId;
    var theDiv = document.getElementById("displayShippingAddressBookforMember");

    if (typeof theDiv == "undefined") return null;
    var divJSON = eval("(" + theDiv.innerHTML + ")");
    var addressObject = divJSON.addressBookMember;
    for (var i = 0; i < addressObject.length; i++) {
      ob = new Object();
      ob.firstName = addressObject[i].firstName;
      ob.lastName = addressObject[i].lastName;
      ob.address1 = addressObject[i].address1;
      ob.address3 = addressObject[i].address3;
      ob.city = addressObject[i].city;
      ob.state = addressObject[i].state;
      ob.zipCode = addressObject[i].zipCode;
      ob.emailAddress1 = addressObject[i].emailAddress1;
      ob.phone1 = addressObject[i].phone1;

      addressBookMember[addressObject[i].addressId] = ob;
    }

    if (
      addressBookMember[addressId] != null &&
      addressBookMember[addressId] != undefined
    ) {
      document.getElementById("selectedShippingAddress").style.display =
        "block";
      var form1 = document.forms["addAddressForm"];
      var firstName = addressBookMember[addressId].firstName;
      var lastName = addressBookMember[addressId].lastName;
      var address1 = addressBookMember[addressId].address1;
      var address3 = addressBookMember[addressId].address3;
      var city = addressBookMember[addressId].city;
      var state = addressBookMember[addressId].state;
      var zipCode = addressBookMember[addressId].zipCode;
      var emailAddress1 = addressBookMember[addressId].emailAddress1;
      var phone1 = addressBookMember[addressId].phone1;

      dojo.byId("memberFirstname").innerHTML = firstName;
      dojo.byId("memberLastname").innerHTML = lastName;
      dojo.byId("memberAddress1").innerHTML =
        address1 + "," + city + "," + state;
      dojo.byId("memberAddress3").innerHTML = address3;
      dojo.byId("memberZipCode").innerHTML = zipCode;
      dojo.byId("memberEmailAddress1").innerHTML = emailAddress1;
      dojo.byId("memberPhone1").innerHTML = phone1;

      //form1.shippingAddressId.value = addressId ;
    }
  },

  updateAddressIdForOrderItem: function (addressId, ordItemId) {
    addressBookMember = new Array();
    var theDiv = document.getElementById(
      "displayShippingAddressBookforMember_" + ordItemId
    );

    if (typeof theDiv == "undefined") return null;
    var divJSON = eval("(" + theDiv.innerHTML + ")");
    var addressObject = divJSON.addressBookMember;
    for (var i = 0; i < addressObject.length; i++) {
      ob = new Object();
      ob.firstName = addressObject[i].firstName;
      ob.lastName = addressObject[i].lastName;
      ob.orderItemId = addressObject[i].orderItemId;
      addressBookMember[addressObject[i].addressId] = ob;
    }

    if (
      addressBookMember[addressId] != null &&
      addressBookMember[addressId] != undefined
    ) {
      var form1 = document.forms["changeShippingAddressForm"];
      var firstName = addressBookMember[addressId].firstName;
      var lastName = addressBookMember[addressId].lastName;
      var orderItemId = addressBookMember[addressId].orderItemId;
      this.updateAddressIdForThisItem(addressId, orderItemId);
      //form1.shippingAddressId.value = addressId ;
    }
  },

  updateAddressIdForThisItem: function (addressId, orderItemId) {
    //Save it in local array..
    var form1 = document.forms["changeShippingAddressForm"];

    params = [];
    params["storeId"] = "10151";
    params["catalogId"] = "10001";
    params["langId"] = "-1";
    params.orderId = ".";
    params.calculationUsage = "-1,-2,-3,-4,-5,-6,-7";
    params.allocate = "***";
    params.backorder = "***";
    params.remerge = "***";
    params.check = "*n";
    params.shipToRegistrant = "0";
    params.addressId = addressId;
    params.orderItemId = orderItemId;
    params["storeSelected"] = document.getElementById(
      "physicalStoreId_" + orderItemId
    ).value;
    params["isShipAddrChange"] = "true";
    //params.URL=form1.URL.value;
    //For handling multiple clicks
    if (!submitRequest()) {
      return;
    }
    cursor_wait();
    //var url="RonaOrderUpdateCmd?ShippingaddressId="+addressId+"&orderId="+form1.orderId.value+"&ordItemId="+orderItemId+"&langId="+form1.langId.value+"&storeId="+form1.storeId.value+"&catalogId="+form1.catalogId.value+"&shipmentType=Multiple&giftCard=true&shippingPageFlag=true&checkoutFlag=false&shipAddressBook=true";
    //document.location.href=url;
    //wc.service.invoke("OrderItemAddressShipMethodUpdate", params);
  },

  /**
   * Sets the address type when a user wants to add a new address of type shipping and billing during order check out.
   * @param {Object} checkbox The HTML checkbox input object.
   * @param {Object} form The form that contains the new address information.
   */
  setAddressTypeInCreatingNewAddressDuringCheckout: function (checkbox, form) {
    if (form.addressType != null && form.originalAddressType != null) {
      if (checkbox.checked) {
        form.addressType.value = "ShippingAndBilling";
      } else {
        form.addressType.value = form.originalAddressType.value;
      }
    }
  },

  /**
   *  This function is used to update the old billing address and set/add the new billing address.
   *  @param {addressId} old billing addressId
   */

  changeCheckoutBillingAddress: function (oldAddressId) {
    var formName1 = "";
    if (dojo.byId("AddressBook").className == "active") {
      formName1 = "changeBillingAddressForm";
    }
    if (formName1 == "changeBillingAddressForm") {
      addressBookMember = new Array();
      var theDiv = document.getElementById("displayAddressBookforMember");
      var form1 = document.forms["changeBillingAddressForm"];
      if (typeof theDiv == "undefined") return null;
      var divJSON = eval("(" + theDiv.innerHTML + ")");
      var addressObject = divJSON.addressBookMember;
      for (var i = 0; i < addressObject.length; i++) {
        ob = new Object();
        ob.firstName = addressObject[i].firstName;
        ob.lastName = addressObject[i].lastName;
        ob.nickName = addressObject[i].nickName;
        ob.address1 = addressObject[i].address1;
        ob.address3 = addressObject[i].address3;
        ob.city = addressObject[i].city;
        ob.state = addressObject[i].state;
        ob.zipCode = addressObject[i].zipCode;
        ob.emailAddress1 = addressObject[i].emailAddress1;
        ob.phone1 = addressObject[i].phone1;
        addressBookMember[addressObject[i].addressId] = ob;
      }

      if (
        addressBookMember[this.billingAddressId] != null &&
        addressBookMember[this.billingAddressId] != undefined
      ) {
        form1.firstName.value =
          addressBookMember[this.billingAddressId].firstName;
        form1.lastName.value =
          addressBookMember[this.billingAddressId].lastName;
        form1.email1.value =
          addressBookMember[this.billingAddressId].emailAddress1;
        form1.phone1.value = addressBookMember[this.billingAddressId].phone1;
        form1.addressId.value = this.billingAddressId;
      }
      var params = [];
      params.storeId = form1.storeId.value;
      params.catalogId = form1.catalogId.value;
      params.langId = form1.langId.value;
      params.addressId = oldAddressId;
      params.primary = false;
      params.authToken = form1.authToken.value;
      wc.service.invoke("ChangeBillingAddress", params);
    } else {
      var errobj1 = document.getElementById("codePostalLabel");
      if (errobj1 != null && errobj1.getAttribute("class") == "error") {
        return;
      }

      AddressHelper.clearErrors("updateBillingAddress");

      var form1 = document.forms["clientBillingInformationForm"];
      /*Validate form input fields */
      if (
        dojo.byId("ErrorMessageText") != null &&
        dojo.byId("ErrorMessageText") != undefined
      ) {
        dojo.byId("ErrorMessageText").innerHTML = "";
      }
      if (
        ShippingValidation.fnValidateUserInfo("clientBillingInformationForm")
      ) {
        form1.addressType.value = "ShippingAndBilling";
        this.saveAddress(
          "AddNewBillingAddress",
          "clientBillingInformationForm"
        );
      }
    }
  },

  /**
   *  This function is used to update the old shipping address or add the new billing address.
   *  @param {urlString} next page url
   */

  changeCheckoutShippingAddress: function (urlString) {
    var form1 = document.forms["clientShippingInformationForm"];
    /*Validate form input fields */
    /*if(testZipCodeErrorGeneric('codePostalLabel') == false){
			  return;	
			}*/

    var errobj1 = document.getElementById("codePostalLabel"); //codePostalLabel
    if (errobj1 != null && errobj1.getAttribute("class") == "error") {
      return;
    }
    var orderItemId = form1.orderItemId.value;
    var form2 = document.forms["orderItemsShippingForm"];
    form2.orderItemAddrIdUpdate.value = orderItemId;

    if (
      ShippingValidation.fnValidateUserInfo("clientShippingInformationForm")
    ) {
      form1.addressType.value = "ShippingAndBilling";
      this.saveAddress(
        "AddNewShippingAddress",
        "clientShippingInformationForm"
      );
    }
  },

  /**
   *  This function is used to update the billing address information.
   *  @param {urlString} next page url
   */

  updateBillingAddress: function () {
    var form1 = document.forms["billingInformationUpdateForm"];

    if (
      this.validateBillingInfo("billingInformationUpdateForm", true, "billing_")
    ) {
      form1.addressType.value = "ShippingAndBilling";
      this.saveAddress("ChangeBillingAddress", "billingInformationUpdateForm");
    }
  },

  clearErrors: function (from) {
    jQuery("span.error").removeClass("error");
  },

  /**
   *  This function is used to save the guest user shipping address.
   */

  saveGuestUserShippingAddress: function () {
    var formName1 = "";
    var form1 = document.forms["clientShippingInformationForm"];
    /*Validate form input fields */
    if (
      ShippingValidationGuest.fnValidateUserShippingInfo(
        "clientShippingInformationForm"
      )
    ) {
      form1.addressType.value = "ShippingAndBilling";
      this.saveAddress(
        "AddNewShippingAddress",
        "clientShippingInformationForm"
      );
    }
  },

  processToConfirmation: function (urlString) {
    var form1 = document.forms["orderItemsShippingForm"];
    var total = form1.totalNumberOfItems.value;
    arr = new Array();
    for (var int = 0; int < total; int++) {
      ordItem = document.getElementById("orderItem_" + (int + 1)).value;
      arr[int] = ordItem;
    }
    for (var int = 0; int < arr.length; int++) {
      if (jQuery("#giftbox_" + arr[int]).attr("checked")) {
        document.getElementById("giftbox_" + arr[int]).value = "1";
      } else {
        if (
          document.getElementById("giftbox_" + arr[int]) != null &&
          document.getElementById("giftbox_" + arr[int]) != undefined
        ) {
          document.getElementById("giftbox_" + arr[int]).value = "0";
        }
      }
    }
    /*for ( var int = 0; int < arr.length; int++) {
				console.log(document.getElementById("giftbox_"+arr[int]).value);
				console.log(document.getElementById("sender_"+arr[int]).value);
				console.log(document.getElementById("receiver_"+arr[int]).value);
				console.log(document.getElementById("textAreaMessage_"+arr[int]).value);
				
				var e = document.getElementById("addressBook_member_"+arr[int]);
				var strUser = e.options[e.selectedIndex].value;
				console.log(strUser);
			} 
			*/
    form1.submit();
  },

  modifyBillingAddress: function (urlString) {
    var billingEditURL = urlString.replace("http:", "https:");
    jQuery.get(billingEditURL, function (data) {
      jQuery("#billingAddressEdit_Widget").html(data);
      initCustomForms();
    });
    /*
			if(billingEditURL != undefined  && billingEditURL != null){
				wc.render.getRefreshControllerById('BillingAddressEditView_Controller').url=billingEditURL;
				wc.render.updateContext("BillingAddressEditView_Context");
			}
		  */
  },

  modifyShippingAddress: function (urlString) {
    var shippingEditURL = urlString.replace("http:", "https:");
    if (shippingEditURL != undefined && shippingEditURL != null) {
      wc.render.getRefreshControllerById(
        "ShippingAddressEditView_Controller"
      ).url = shippingEditURL;
      wc.render.updateContext("ShippingAddressEditView_Context");
    }
  },

  validateBillingInfo: function (formName, clearErrors, prefix) {
    prefix = "#" + prefix;
    var isFormComplete = true;
    reWhiteSpace = new RegExp(/^\s+$/);
    var reg = /^([0-9_]{3,3})+\-([0-9_]{3,3})+\-([0-9_]{4,4})$/;
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    var canadianPostalCodePattern = /^[a-zA-Z]\d[a-zA-Z]( )?\d[a-zA-Z]\d$/;

    if (clearErrors) {
      this.clearErrors();
    }

    //Address Validation- Empty or null
    if (jQuery(prefix + "address").val() == "") {
      this.setErrorMessage(
        MessageHelper.messages["RONA_ACCOUNT_ADDRESS"],
        jQuery(prefix + "address")
      );
      isFormComplete = false;
    }
    //city Validation- Empty or null
    if (jQuery(prefix + "city").val() == "") {
      this.setErrorMessage(
        MessageHelper.messages["RONA_ACCOUNT_CITY_ERROR"],
        jQuery(prefix + "city")
      );
      isFormComplete = false;
    }
    //city Validation- Empty or null
    if (
      jQuery(prefix + "codePostal").val() == "" ||
      !canadianPostalCodePattern.test(jQuery(prefix + "codePostal").val())
    ) {
      this.setErrorMessage(
        MessageHelper.messages["RONA_ACCOUNT_POSTAL_CODE_ERROR"],
        jQuery(prefix + "codePostal")
      );
      isFormComplete = false;
    }

    //	Apartment Validation
    if (
      jQuery(prefix + "clientAppartment").val() != "" &&
      jQuery(prefix + "clientAppartment").val().length > 6
    ) {
      this.setErrorMessage(
        MessageHelper.messages["RONA_ACCOUNT_APARTMENT_TOO_LONG"],
        jQuery(prefix + "clientAppartment")
      );
      isFormComplete = false;
    }

    //Phone No Validation
    if (jQuery(prefix + "clientPhone").val() == "") {
      this.setErrorMessage(
        MessageHelper.messages["RONA_ACCOUNT_PHONE_ERROR"],
        jQuery(prefix + "clientPhone")
      );
      isFormComplete = false;
    } else {
      if (!phoneNumberPattern.test(jQuery(prefix + "clientPhone").val())) {
        this.setErrorMessage(
          MessageHelper.messages["RONA_ACCOUNT_PHONE_ERROR"],
          jQuery(prefix + "clientPhone")
        );
        isFormComplete = false;
      }
    }

    if (!isFormComplete) {
      return false;
    }
    return true;
  },
  setErrorMessage: function (msg, element) {
    jQuery(element).addClass("error");
    jQuery(element)
      .closest(".content-box")
      .find("div.error ul")
      .append("<li>" + msg + "</li>");
    jQuery(element).closest(".content-box").find("div.error").show();
  },
  clearErrors: function (frm) {
    jQuery("div.error ul").empty();
    jQuery("input.error").removeClass("error");
    jQuery("div.error").hide();
  },
};

/*
page: http://www.rona.ca/
url: http://www.rona.ca/wcsstore/RONAStorefrontAssetStore/20170106/javascript/UserArea/AddressHelper.js
*/
