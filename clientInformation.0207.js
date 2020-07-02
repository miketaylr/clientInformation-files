var usssa = angular.module("usssa", ["ui.bootstrap", "ngDfp"]).config([
  "$compileProvider",
  function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(
      /^\s*(https?|ftp|mailto|chrome-extension|javascript):/
    );
    // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
  },
]);
usssa.config(function (DoubleClickProvider) {
  console.log("DoubleClickProvider Targeting", window.location.href);

  function getSport() {
    var sport = 0;
    if (window.location.href.indexOf("baseball") > -1) sport = 11;
    if (window.location.href.indexOf("basketball5on5") > -1) sport = 12;
    if (window.location.href.indexOf("basketball3on3") > -1) sport = 20;
    if (window.location.href.indexOf("fastpitch") > -1) sport = 16;
    if (window.location.href.indexOf("usaes") > -1) sport = 32;
    if (window.location.href.indexOf("flagfootball") > -1) sport = 13;
    if (window.location.href.indexOf("juniorgolf") > -1) sport = 14;
    if (window.location.href.indexOf("discgolf") > -1) sport = 21;
    if (window.location.href.indexOf("teamgolf") > -1) sport = 25;
    if (window.location.href.indexOf("karate") > -1) sport = 26;
    if (window.location.href.indexOf("lacrosse") > -1) sport = 22;
    if (window.location.href.indexOf("soccer") > -1) sport = 15;
    if (window.location.href.indexOf("slowpitch") > -1) sport = 17;
    if (window.location.href.indexOf("gslslowpitch") > -1) sport = 34;
    if (window.location.href.indexOf("taekwondo") > -1) sport = 24;
    if (window.location.href.indexOf("volleyball") > -1) sport = 18;

    return sport;
  }

  function getPage() {
    var page = "home";

    if (window.location.href.indexOf("ISTS") > -1) page = "teams";
    if (window.location.href.indexOf("Team") > -1) page = "teams";
    if (window.location.href.indexOf("TournamentMain") > -1) page = "events";
    if (window.location.href.indexOf("FindEventSimple") > -1) page = "events";
    return page;
  }

  console.log("Targeting s:", getSport(), "p:", getPage());

  DoubleClickProvider.defineSlot(
    "/170737076/USSSA_728x90_BTF",
    [728, 90],
    "div-gpt-ad-USSSA_728x90_BTF",
    [
      { id: "s", value: getSport() },
      { id: "p", value: getPage() },
    ]
  )
    .defineSlot(
      "/170737076/USSSA_300x250_BTF",
      [300, 250],
      "div-gpt-ad-USSSA_300x250_BTF",
      [
        { id: "s", value: getSport() },
        { id: "p", value: getPage() },
      ]
    )
    .defineSlot(
      "/170737076/USSSA_300x130_SPN",
      [300, 130],
      "div-gpt-ad-USSSA_300x130_SPN",
      [
        { id: "s", value: getSport() },
        { id: "p", value: getPage() },
      ]
    )
    .defineSlot(
      "/170737076/USSSA_728x90_SA",
      [728, 90],
      "div-gpt-ad-USSSA_728x90_SA",
      [
        { id: "s", value: getSport() },
        { id: "p", value: getPage() },
      ]
    )
    .defineSlot(
      "/170737076/USSSA_300x250_ATF",
      [300, 250],
      "div-gpt-ad-USSSA_300x250_ATF",
      [
        { id: "s", value: getSport() },
        { id: "p", value: getPage() },
      ]
    )
    .defineSlot(
      "/170737076/USSSA_728x90_ATF",
      [728, 90],
      "div-gpt-ad-USSSA_728x90_ATF",
      [
        { id: "s", value: getSport() },
        { id: "p", value: getPage() },
      ]
    );
});
usssa.controller("mainController", mainController);

function mainController($scope, $rootScope, $filter, $http, $window) {
  if (
    $rootScope.gzip != 1 &&
    window.location.href.indexOf("localhost") < 0 &&
    window.location.href.indexOf("usss.com") < 0 &&
    window.location.href.indexOf("www3") < 0
  ) {
    $http({
      method: "POST",
      url: "http://api.usssa.com/?action=get-current-season-id",
      data: "gdSport=11",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .success(function (data, status, headers, config) {
        $rootScope.gzip = 1;
      })
      .error(function (data, status, headers, config) {
        if (window.location.href.indexOf("www.") > -1)
          location.href = window.location.href.replace("www.", "www3.");
        else
          location.href = window.location.href.replace(
            "usssa.com",
            "www3.usssa.com"
          );
      });
  }

  $rootScope.isIE7orLower = function () {
    if ($window.clientInformation) {
      if ($window.clientInformation.userAgent.indexOf("MSIE 7.") != -1) {
        return true;
      } else if ($window.clientInformation.userAgent.indexOf("MSIE 6.") != -1) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  $rootScope.dateAndTime = moment().format("MMMM Do YYYY, h:mm a");
  $rootScope.nowUnix = moment().format("X");
  $rootScope.today = moment().format("l");
}
/*
page: http://www.usssa.com/
url: http://www.usssa.com/js/app.js
*/
