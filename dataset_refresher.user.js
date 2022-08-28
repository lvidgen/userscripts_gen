// ==UserScript==
// @name         CS dataset refresher
// @namespace    http://greasemonkey.net/
// @version      0.1
// @description  refresh CS dataset
// @author       You
// @match        https://app.powerbi.com/groups/GROUP_ID/list?ctid=CT_ID*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  const intvl = 1; //minutes between refresh
setInterval(function(){
  if (document.getElementsByClassName("datasetRefreshIcons")[0] && document.getElementsByClassName("datasetRefreshIcons")[0].childElementCount==0){
    document.querySelector("button[title='Refresh now']").click();
    console.log("last dataset refresh", new Date(Date.now()));
  }
    }, intvl * 60000)
})();
