// ==UserScript==
// @name         ATBB_DataPicker
// @namespace    https://github.com/shirachin/ATBB_DataPicker
// @version      2.1.0
// @description  Reads necessary information from ATBB and outputs it in json format.
// @author       mimimi
// @match        https://atbb.athome.co.jp/front-web/mainservlet/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=athome.co.jp
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @updateURL    https://github.com/shirachin/ATBB_DataPicker/raw/main/ATBB_DataPicker.user.js
// @downloadURL  https://github.com/shirachin/ATBB_DataPicker/raw/main/ATBB_DataPicker.user.js
// @supportURL   https://github.com/shirachin/ATBB_DataPicker/
// ==/UserScript==

(function () {
    window.addEventListener('load', () => {
        if (document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > nav > ul > li:nth-child(2)")) {
            if (document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > nav > ul > li:nth-child(2)").textContent.replace(/\s{2}/g, "").trim() == '物件詳細情報') {
                let result = {
                    '建物情報': {
                        '物件種目': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(1) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '建物名・部屋番号': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(2) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '所在地': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(3) > td.common-data").textContent.replace("地図を見る", "").replace(/\s{2}/g, "").trim(),
                        'その他所在地': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(4) > td.common-data").textContent.replace("地図を見る", "").replace(/\s{2}/g, "").trim(),
                        '交通(最寄駅/バス停)': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(5) > td.common-data.list-data01-l").textContent.replace(/\s{2}/g, "").trim(),
                        '利用駅1': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(6) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '利用駅2': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(7) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        'その他交通手段': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(8) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '間取り': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(9) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '間取り内訳': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(9) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '専有面積': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(10) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        'バルコニー': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(10) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '建物構造': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(11) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '階建/階': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(11) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '築年月': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(12) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '総戸数': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(12) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '駐車場': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(13) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        'バイク置場': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(13) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '駐輪場': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(14) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '主要採光面': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(14) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '管理員の勤務形態': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(15) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        'リフォーム履歴': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(16) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        'リノベーション履歴': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(17) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '温泉': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(18) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '設備': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(19) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '特記事項': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(20) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '備考': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(21) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '周辺環境': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(2) > tbody > tr:nth-child(22) > td.common-data").textContent.replace(/\s{2}/g, "").trim()
                    },
                    '費用': {
                        '管理費': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(1) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '礼金': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(2) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '敷金': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(2) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '敷引': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(3) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '共益費': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(3) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '雑費': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(4) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '鍵交換代等': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(4) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '保証金': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(5) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '保証金償却': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(6) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '賃貸保証': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(7) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        'クレジットカード決済': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(8) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '保険等加入': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(9) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        'その他一時金': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(10) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        'ランニングコスト': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(6) > tbody > tr:nth-child(11) > td.common-data").textContent.replace(/\s{2}/g, "").trim()
                    },
                    '契約条件': {
                        '現況': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(8) > tbody > tr:nth-child(1) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '入居日': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(8) > tbody > tr:nth-child(1) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '契約期間': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(8) > tbody > tr:nth-child(2) > td:nth-child(2)").textContent.replace(/\s{2}/g, "").trim(),
                        '更新料': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(8) > tbody > tr:nth-child(2) > td:nth-child(4)").textContent.replace(/\s{2}/g, "").trim(),
                        '入居条件': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(8) > tbody > tr:nth-child(3) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        '設備保証': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(8) > tbody > tr:nth-child(4) > td.common-data").textContent.replace(/\s{2}/g, "").trim(),
                        'フリーレント': document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > div:nth-child(40) > table:nth-child(8) > tbody > tr:nth-child(5) > td.common-data").textContent.replace(/\s{2}/g, "").trim()
                    }
                }
                const type = "text/plain";
                const data = [new ClipboardItem({[type]: new Blob([JSON.stringify(result)], {type})})];
                navigator.clipboard.write(data).then(() => {
                    alert('コピー完了');
                }, () => {
                    alert('コピー失敗');
                });
                console.log(result);
            }
        }
    });
})();