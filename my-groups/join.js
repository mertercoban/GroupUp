$(function () {
  $(".recommended-tile>button").click(function () {
    const tileElements = $(this).parent().children();
    var title = "";
    tileElements.each((index, element) => {
      if (element.className == "recommended-title") title = element.innerText;
    });
    $(".joined-groups").prepend(
      `<div class="joined-group">
          <div class="joined-title">${title}</div>
          <div class="joined-message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odio!
          </div>
      </div>`
    );
    $(this).parent().fadeOut();

    return false;
  });
});
