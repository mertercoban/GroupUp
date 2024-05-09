$(function () {
  $("#notification").delay(2500).fadeIn();
  $("#notification").click(function () {
    $(this).hide();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("#new").delay(850).fadeIn();
    return false;
  });
});
