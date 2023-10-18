/* ローディングアニメーション
* -------------------------------------------- */
$(window).on('load', function () {
  $("#splash-logo").delay(1200).fadeOut('slow');
  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow', function () {
    $('body').addClass('appear');
  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  // $('.splashbg').on('animationend', function () {
});

/* 一文字ずつ文字が出現
* -------------------------------------------- */

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


/* ドロワーナビ
* -------------------------------------------- */
// $(function () {
$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

/* ページ内リンク
* -------------------------------------------- */
// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function () {
  let header = $(".header").innerHeight();
  let speed = 300;
  let id = $(this).attr("href");
  let target = $("#" == id ? "html" : id);
  let position = $(target).offset().top - header - 30;
  $("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

/* WOW.js
* -------------------------------------------- */
new WOW().init();

$(window).on('load', function () {
  $('.anime-horizontal').addClass('active');
});



