var TrackingUtility;

(function () {
  TrackingUtility = function (clientId) {
    var parameters = this.collectClientInformations();
    parameters.additional = this.getSearchParameters();

    $.ajax({
      type: "GET",
      url: "//crm.aniviaswiss.com/tracking",
      data: parameters,
    });
  };

  TrackingUtility.prototype.collectClientInformations = function () {
    var clientInformations = {
      screenWidth: screen.width,
      screenHeight: screen.height,
      url: location.href,
    };

    return clientInformations;
  };

  TrackingUtility.prototype.getSearchParameters = function () {
    var prmstr = window.location.search.substr(1);

    return prmstr != null && prmstr != ""
      ? this.transformToAssocArray(prmstr)
      : {};
  };

  TrackingUtility.prototype.transformToAssocArray = function (prmstr) {
    var params = {};
    var prmarr = prmstr.split("&");
    for (var i = 0; i < prmarr.length; i++) {
      var tmparr = prmarr[i].split("=");
      params[tmparr[0]] = tmparr[1];
    }

    return params;
  };
})();

/*
page: http://www.alphaboostpro.com/
url: http://crm.aniviaswiss.com/Vendor/JavaScript/TrackingUtility.js
*/
