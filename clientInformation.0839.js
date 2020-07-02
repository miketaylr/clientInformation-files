//mobile
if (
  window.clientInformation.userAgent.search(/(iPhone)|(iPod)|(Android)/g) != -1
) {
  // pc view cookie is set
  if (document.cookie.indexOf("ccmDisableMobileView=1") != -1) {
    if (window.location.pathname.match(/^(\/sp|\/sp\/.*)/gi)) {
      // in case /sp prefix resides there
      //do redirect
      window.location.pathname = String(window.location.pathname).replace(
        /\/sp/g,
        ""
      );
    } else {
      // in case no /sp prefix in url
      //passthrough
    }
  } else {
    // no pc view cookie
    if (window.location.pathname.match(/^(\/sp|\/sp\/.*)/gi)) {
      // in case /sp prefix resides there
      // passthrough
    } else {
      // redirect
      window.location.pathname = "/sp" + window.location.pathname;
    }
  }
  //pc
} else {
  console.log("pc");
  if (window.location.pathname.match(/^(\/sp|\/sp\/.*)/gi)) {
    window.location.pathname = String(window.location.pathname).replace(
      /\/sp/g,
      ""
    );
  }
}
/*
page: http://www.biyougeka.com/
url: https://www.biyougeka.com/concrete/js/iphoneLink.js?v=a75e1102584be8c0ae8ec7ccc20a24c2
*/
