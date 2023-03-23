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
// @updateURL    https://github.com/shirachin/ATBB_DataPicker/raw/main/Sumaity_DataPicker
// @downloadURL  https://github.com/shirachin/ATBB_DataPicker/raw/main/Sumaity_DataPicker
// @supportURL   https://github.com/shirachin/ATBB_DataPicker/
// ==/UserScript==

var $ = window.jQuery;

(function() {
    document.onkeydown = function (e){
        if(e.shiftKey && e.key == "Enter"){
            sample = $("#neighborhoodInfo > div > div > dl.surroundingInfoList.supermarket > dd > dl:nth-child(1)").text().trim()
            console.log(sample)
        }
    };
})();