// ==UserScript==
// @name        戦果ガチャ自動化
// @namespace   
// @description 戦果ガチャ自動化
// @includes    *
// @excludes    
// ==/UserScript==



console.log("> ガチャ引くよ～");



function runGacha(data1, data2) {

/**
  // chrome コンソール で実行するならこの２行でいける
  var btn = $('.btn-medal.multi[disable=false]')[0];
  $(btn).trigger('tap');
*/

  var btn = document.getElementsByClassName('btn-medal multi')[0];
  if (btn && btn.getAttribute('disable') ==='false') {
    console.log("> ひける！");
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('tap', true, true);
    btn.dispatchEvent(evt);
  } else {
    console.log("> ひけない！");
  }

}


mo = new MutationObserver(runGacha);
contents = document.getElementsByClassName("contents")[0];
options = {childList:true, subtree:true};
mo.observe(contents, options);
