$(function () {
  $("#received").hide();
  $("form").on("submit", function (e) {
    console.log(e);
    $(this).children().fadeOut(410);
    $("#received").delay(400).fadeIn();
    return false;
  });
});
