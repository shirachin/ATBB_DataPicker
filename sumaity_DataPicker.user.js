// ==UserScript==
// @name         Sumaity_DataPicker
// @namespace    https://github.com/shirachin/ATBB_DataPicker
// @version      1.1.0
// @description  Reads necessary information from Sumaity and outputs it in json format.
// @author       shirachin
// @match        https://sumaity.com/chintai/*
// @icon         https://sumaity.com//ui/utility/common/favicon.ico
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @updateURL    https://github.com/shirachin/ATBB_DataPicker/raw/main/Sumaity_DataPicker.user.js
// @downloadURL  https://github.com/shirachin/ATBB_DataPicker/raw/main/Sumaity_DataPicker.user.js
// @supportURL   https://github.com/shirachin/ATBB_DataPicker/
// ==/UserScript==

var $ = window.jQuery;

(function() {
    var current_url = location.host;
    if(current_url == 'sumaity.com'){
        let supermarket = document.querySelector("#neighborhoodInfo > div > div > dl.surroundingInfoList.supermarket > dt > span");
        console.log(supermarket);
    }
})();