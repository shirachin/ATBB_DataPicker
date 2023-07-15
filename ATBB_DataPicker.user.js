// ==UserScript==
// @name         ATBB_DataPicker
// @namespace    https://github.com/shirachin/ATBB_DataPicker
// @version      2.1.1
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
    function search_element(word, next = true) {
        const element_all = document.querySelectorAll("td");
        const element = Array.from(element_all).filter((element) => {
            return element.textContent.replace(/\s{2}/g, "").trim() === word;
        })[0];
        let ret = next ? element.nextElementSibling : element;
        return ret != null ? ret : document.createElement('td').appendChild(document.createTextNode(""));
    }

    window.addEventListener('load', () => {
        if (document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > nav > ul > li:nth-child(2)")) {
            if (document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.contents > form.word-b > nav > ul > li:nth-child(2)").textContent.replace(/\s{2}/g, "").trim() == '物件詳細情報') {
                let result = {
                    '建物情報': {
                        '物件種目': search_element("物件種目").textContent.replace(/\s{2}/g, "").trim(),
                        '建物名': search_element("建物名・部屋番号").textContent.replace(/\s{2}/g, "").trim(),
                        '所在地': search_element("所在地").textContent.replace("地図を見る", "").replace(/\s{2}/g, "").trim(),
                        'その他所在地': search_element("その他所在地").textContent.replace("地図を見る", "").replace(/\s{2}/g, "").trim(),
                        '交通': search_element("交通(最寄駅/バス停)").textContent.replace(/\s{2}/g, "").trim(),
                        '利用駅1': search_element("利用駅1").textContent.replace(/\s{2}/g, "").trim(),
                        '利用駅2': search_element("利用駅2").textContent.replace(/\s{2}/g, "").trim(),
                        'その他交通手段': search_element("その他交通手段").textContent.replace(/\s{2}/g, "").trim(),
                        '間取り': search_element("間取り").textContent.replace(/\s{2}/g, "").trim(),
                        '間取り内訳': search_element("間取り内訳").textContent.replace(/\s{2}/g, "").trim(),
                        '専有面積': search_element("専有面積").textContent.replace(/\s{2}/g, "").trim(),
                        'バルコニー': search_element("バルコニー").textContent.replace(/\s{2}/g, "").trim(),
                        '建物構造': search_element("建物構造").textContent.replace(/\s{2}/g, "").trim(),
                        '階建': search_element("階建/階").textContent.split("/")[0].replace(/\s{2}/g, "").trim(),
                        '階': search_element("階建/階").textContent.split("/")[1].replace(/\s{2}/g, "").trim(),
                        '築年': search_element("築年月").textContent.split("年")[0].replace("年", "").replace(/\s{2}/g, "").trim(),
                        '築月': search_element("築年月").textContent.split("年")[1].replace("月", "").replace(/\s{2}/g, "").trim(),
                        '総戸数': search_element("総戸数").textContent.replace(/\s{2}/g, "").trim(),
                        '駐車場': search_element("駐車場").textContent.replace(/\s{2}/g, "").trim(),
                        'バイク置場': search_element("バイク置場").textContent.replace(/\s{2}/g, "").trim(),
                        '駐輪場': search_element("駐輪場").textContent.replace(/\s{2}/g, "").trim(),
                        '主要採光面': search_element("主要採光面").textContent.replace(/\s{2}/g, "").trim(),
                        '管理員の勤務形態': search_element("管理員の勤務形態").textContent.replace(/\s{2}/g, "").trim(),
                        'リフォーム履歴': search_element("リフォーム履歴").textContent.replace(/\s{2}/g, "").trim(),
                        'リノベーション履歴': search_element("リノベーション履歴").textContent.replace(/\s{2}/g, "").trim(),
                        '温泉': search_element("温泉").textContent.replace(/\s{2}/g, "").trim(),
                        '設備': search_element("設備").textContent.replace(/\s{2}/g, "").trim(),
                        '特記事項': search_element("特記事項").textContent.replace(/\s{2}/g, "").trim(),
                        '備考': search_element("備考").textContent.replace(/\s{2}/g, "").trim(),
                        '周辺環境': search_element("周辺環境").textContent.replace(/\s{2}/g, "").trim()
                    },
                    '費用': {
                        '管理費等': search_element("管理費等").textContent.replace(/\s{2}/g, "").trim(),
                        '管理費': search_element("管理費").textContent.replace(/\s{2}/g, "").trim(),
                        '礼金': search_element("礼金").textContent.replace(/\s{2}/g, "").trim(),
                        '敷金': search_element("敷金").textContent.replace(/\s{2}/g, "").trim(),
                        '敷引': search_element("敷引").textContent.replace(/\s{2}/g, "").trim(),
                        '共益費': search_element("共益費").textContent.replace(/\s{2}/g, "").trim(),
                        '雑費': search_element("雑費").textContent.replace(/\s{2}/g, "").trim(),
                        '鍵交換代等': search_element("鍵交換代等").textContent.replace(/\s{2}/g, "").trim(),
                        '保証金': search_element("保証金").textContent.replace(/\s{2}/g, "").trim(),
                        '保証金償却': search_element("保証金償却").textContent.replace(/\s{2}/g, "").trim(),
                        '賃貸保証': search_element("賃貸保証").textContent.replace(/\s{2}/g, "").trim(),
                        'クレジットカード決済': search_element("クレジットカード決済").textContent.replace(/\s{2}/g, "").trim(),
                        '保険等加入': search_element("保険等加入").textContent.replace(/\s{2}/g, "").trim(),
                        'その他一時金': search_element("その他一時金").textContent.replace(/\s{2}/g, "").trim(),
                        'ランニングコスト': search_element("ランニングコスト").textContent.replace(/\s{2}/g, "").trim()
                    },
                    '契約条件': {
                        '現況': search_element("現況").textContent.replace(/\s{2}/g, "").trim(),
                        '入居日': search_element("入居日").textContent.replace(/\s{2}/g, "").trim(),
                        '契約期間': search_element("契約期間").textContent.replace(/\s{2}/g, "").trim(),
                        '更新料': search_element("更新料").textContent.replace(/\s{2}/g, "").trim(),
                        '入居条件': search_element("入居条件").textContent.replace(/\s{2}/g, "").trim(),
                        '設備保証': search_element("設備保証").textContent.replace(/\s{2}/g, "").trim(),
                        'フリーレント': search_element("フリーレント").textContent.replace(/\s{2}/g, "").trim()
                    }
                }

                const type = "text/plain";
                const data = [new ClipboardItem({ [type]: new Blob([JSON.stringify(result)], { type }) })];
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