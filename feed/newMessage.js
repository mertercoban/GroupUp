$(function () {
  $("#notification").delay(2500).fadeIn();
  $("#notification").click(function () {
    $(this).hide();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("main").prepend(
      `<div class="card" id="new">
<div class="card-header">
<img src="https://randomuser.me/api/portraits/thumb/men/74.jpg" width="40" height="40" />
<div>Dr. Erol Bey on CENG311</div>
</div>
<div class="card-separator"></div>
<div class="card-content">Midterm grades have been announced. The average is 69 which means the possibility of no curving being needed is very high.</div>
</div>`
    );
    $("#new").delay(850).fadeIn();
    return false;
  });
});
