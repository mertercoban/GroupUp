function renderPosts(maleAvatars, femaleAvatars) {
  // get posts from posts.json file
  $.get("./posts.json", function (data) {
    $.each(data.posts, function (_, post) {
      let avatarURL = "#";
      if (post.gender == "male")
        avatarURL = maleAvatars[post.userId % maleAvatars.length];
      else if (post.gender == "female")
        avatarURL = femaleAvatars[post.userId % femaleAvatars.length];
      $("main").append(
        `<div class="card">
<div class="card-header">
<img src="${avatarURL}" width="40" height="40" />
<div>${post.name} on ${post.groupName}</div>
</div>
<div class="card-separator"></div>
<div class="card-content">${post.message}</div>
</div>`
      );
    });
  });
}

async function fetchAvatars(url) {
  const avatars = [];
  // get avatars photos from external source
  await $.ajax({
    url: url,
    dataType: "json",
    timeout: 3000,
    success: function (data) {
      $.each(data.results, function (_, picture) {
        avatars.push(picture.picture.thumbnail);
      });
    },
    error: function () {
      avatars.push("#");
    },
  });
  return avatars;
}

$(async function () {
  const femaleAvatars = await fetchAvatars(
    "https://randomuser.me/api/?gender=female&results=20&inc=picture"
  );
  const maleAvatars = await fetchAvatars(
    "https://randomuser.me/api/?gender=male&results=20&inc=picture"
  );
  renderPosts(maleAvatars, femaleAvatars);
});
