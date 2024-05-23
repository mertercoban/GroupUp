$(function () {
  $.get("./groups.json", function (data) {
    $.each(data.joinedGroups, function (_, group) {
      console.log(group);
      $(".joined-groups").append(
        `
        <div class="joined-group">
            <div class="joined-title">${group.groupName}</div>
            <div class="joined-message">
            <strong>${group.name}:</strong> ${group.lastMessage}
            </div>
        </div>`
      );
    });
    $.each(data.recommendedGroups, function (_, group) {
      $(".recommendations").append(
        `<div class="recommended-tile">
            <div class="recommended-title">${group.groupName}</div>
            <button class="recommended-join">Join Group</button>
        </div>`
      );
    });
    $(".recommended-tile>button").click(function () {
      const tileElements = $(this).parent().children();
      var title = "";
      tileElements.each((index, element) => {
        if (element.className == "recommended-title") title = element.innerText;
      });
      $(".joined-groups").prepend(
        `<div class="joined-group">
              <div class="joined-title">${title}</div>
              <div class="joined-message">
              <i>You've joined ${title}. Say Hi!</i>
              </div>
          </div>`
      );
      $(this).parent().fadeOut();

      return false;
    });
  });
});
