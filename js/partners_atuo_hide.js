$(function () {
  const tickerLength = $(".partners ul li").length;
  const tickerHeight = $(".partners ul li").outerHeight();
  $(".partners ul li:last-child").prependTo(".partners ul");
  $(".partners ul").css("marginLeft", -tickerLength);
  function moveLeft() {
    if ($(window).width() < 900 || ($(window).width() >= 1200 && $(window).width() <= 1279)) {
      $(".partners ul").animate(
        {
          left: -tickerLength,
        },
        600,
        function () {
          $(".partners ul li:first-child").appendTo(".partners ul");
          $(".partners ul").css("left", "");
        }
      );
    }
  }
  setInterval(function () {
    moveLeft();
  }, 2500);
});