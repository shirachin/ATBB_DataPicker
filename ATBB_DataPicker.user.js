// ==UserScript==
// @name         ATBB_DataPicker
// @namespace    https://github.com/shirachin/ATBB_DataPicker
// @version      1.1.1
// @description  Reads necessary information from ATBB and outputs it in json format.
// @author       shirachin
// @match        https://atbb.athome.co.jp/front-web/mainservlet/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=athome.co.jp
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @updateURL    https://github.com/shirachin/ATBB_DataPicker/raw/main/ATBB_DataPicker.user.js
// @downloadURL  https://github.com/shirachin/ATBB_DataPicker/raw/main/ATBB_DataPicker.user.js
// @supportURL   https://github.com/shirachin/ATBB_DataPicker/
// ==/UserScript==

var $ = window.jQuery;

(function() {
  document.onkeydown = function (e){
    if(e.shiftKey && e.key == "Enter"){
      var pageTitle = $("table").find("td.subtitle").text();
      console.log(pageTitle)

        // 物件詳細画面判定
        if(pageTitle.indexOf('物件詳細情報') > -1){
            console.log('物件詳細画面')

            // 住所取得
            var address = $('td:contains("所在地") ~ td:first').text().trim() + ' /' + $('td:contains("建物名") ~ td:first').text().trim();
            var mainStation = $('td:contains("交通") ~ td:first').text().trim();
            var station_1 = $('td:contains("利用駅1") ~ td:first').text().trim();
            var station_2 = $('td:contains("利用駅2") ~ td:first').text().trim();
            var maintenance = '';
            var maintenanceTemp = ''
            var regex = /[^0-9]/g;
            var maintenance_1 = $('td:contains("共益費") ~ td:first').text().trim().replace(regex, "");
            var maintenance_2 = $('td:contains("管理費") ~ td:first').text().trim().replace(regex, "");
            if(maintenance_1 == ''){
                maintenance = maintenance_2;
            } else {
                maintenance = maintenance_1;
            }
            var floorPlan = $('td:contains("間取り") ~ td:first').text().trim();
            var area = $('td:contains("専有面積") ~ td:first').text().trim();
            var building = $('td:contains("築年月") ~ td:first').text().trim().match(/\d+/g);
            var floor = $('td:contains("階建") ~ td:first').text().trim().match(/\d+/g).reverse();

            var structure = $('td:contains("建物構造") ~ td:first').text().trim();
            var floorBreakdown = $('td:contains("間取り内訳") ~ td:first').text().trim();
            var contract = $('td:contains("契約期間") ~ td:first').text().trim();
            var parking = $('td:contains("駐車場") ~ td:first').text().trim();
            var statusQuo = $('td:contains("現況") ~ td:first').text().trim();
            var movingInto = $('td:contains("入居日") ~ td:first').text().trim();
            var insurance = $('td:contains("保険等加入") ~ td:first').text().trim();

            console.log('aa')

            var pushData = {
                "address" : address,
                "station" : {
                    "main" : mainStation,
                    "others" : {
                        "other_1" : station_1,
                        "other_2" : station_2
                    }
                },
                "maintenance" : maintenance,
                "deposit" : "0",
                "key_money" : "0",
                "floor_plan" : floorPlan,
                "area" : area,
                "building_complete" : {
                    "year" : building[0],
                    "month" : building[1]
                },
                "floor" : {
                    "number" : floor[0],
                    "total" : floor[1]
                },
                "structure" : structure,
                "floorBreakdown" : floorBreakdown,
                "contract" : contract,
                "parking" : parking,
                "statusQuo" : statusQuo,
                "movingInto" : movingInto,
                "insurance" : insurance
            }

            console.log(pushData)
            let jsonData = JSON.stringify(pushData)
            navigator.clipboard.writeText(jsonData).then(
                () => {
                    alert('jsonを取得しました。')
                },
                () => {
                    alert('jsonを取得出来ませんでした。')
                });

        }


        // 検索条件入力画面判定
        if(pageTitle.indexOf('検索条件入力') > -1){
            //console.log('検索画面')

            // 物件検索条件入力
            $('input[name="ekiHoFun"][value="15"]').prop('checked', true);
            $('*[name="chinryoFrom"]').val("60000");
            $('*[name="chinryoTo"]').val("90000");
            $('input[name="kakakutaiJokenCode"][value="0"]').prop('checked', true);
            $('input[name="kakakutaiJokenCode"][value="2"]').prop('checked', true);
            $('input[name="kakakutaiJokenCode"][value="4"]').prop('checked', true);
            $('*[name="senyuMensekiFrom"]').val("20");
            $('input[name="chikuNensu"][value="15"]').prop('checked', true);
            $('input[name="kodawariJokenCode"][value="20"]').prop('checked', true);
        }


        // 物件番号検索画面判定
        if(pageTitle.indexOf('物件番号検索') > -1){

            alert('物件番号検索')
        }
    }
  };
})();