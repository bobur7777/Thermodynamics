$(document).ready(function () {
  $(".button h3").click(function () {
    $(".button h4").toggle(300);
  });
  $(".close__button img").click(function (e) {
    $(".download__1").hide(300);
    $(".download__2").hide(300);
    $(".download__3").hide(300);
    $(".download__4").hide(300);
    $(".download__5").hide(300);
    $(".download__6").hide(300);
    $(".download__7").hide(300);
  });
  $(".b_maruza").click(function (e) {
    $(".download__1").show(200);
    $(".download__2").hide(200);
    $(".download__3").hide(200);
    $(".download__4").hide(200);
    $(".download__5").hide(200);
    $(".download__6").hide(200);
    $(".download__7").hide(200);
  });
  $(".b_present").click(function (e) {
    $(".download__2").show(200);
    $(".download__1").hide(200);
    $(".download__3").hide(200);
    $(".download__4").hide(200);
    $(".download__5").hide(200);
    $(".download__6").hide(200);
    $(".download__7").hide(200);
  });
  $(".b_video").click(function (e) {
    $(".download__3").show(200);
    $(".download__1").hide(200);
    $(".download__2").hide(200);
    $(".download__4").hide(200);
    $(".download__5").hide(200);
    $(".download__6").hide(200);
    $(".download__7").hide(200);
  });
  $(".b_amaliy").click(function (e) {
    $(".download__4").show(200);
    $(".download__1").hide(200);
    $(".download__2").hide(200);
    $(".download__3").hide(200);
    $(".download__5").hide(200);
    $(".download__6").hide(200);
    $(".download__7").hide(200);
  });
  $(".b_lab").click(function (e) {
    $(".download__5").show(200);
    $(".download__1").hide(200);
    $(".download__2").hide(200);
    $(".download__3").hide(200);
    $(".download__4").hide(200);
    $(".download__6").hide(200);
    $(".download__7").hide(200);
  });
  $(".b_test").click(function (e) {
    $(".download__6").show(200);
    $(".download__1").hide(200);
    $(".download__2").hide(200);
    $(".download__3").hide(200);
    $(".download__4").hide(200);
    $(".download__5").hide(200);
    $(".download__7").hide(200);
  });
  $(".used_lib").click(function (e) {
    $(".download__7").show(200);
    $(".download__1").hide(200);
    $(".download__2").hide(200);
    $(".download__3").hide(200);
    $(".download__4").hide(200);
    $(".download__5").hide(200);
    $(".download__6").hide(200);
  });
});
