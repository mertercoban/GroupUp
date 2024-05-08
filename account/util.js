const availableTags = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"];

$(function () {
  $("#bday").datepicker();

  $("#email").autocomplete({
    delay: 0,
    source: function (req, resp) {
      var results = [];
      $.each(availableTags, function (i, el) {
        let count = 0;
        let c = 0;
        for (; c < req.term.length; c++) {
          const element = req.term[c];
          if (element == "@") {
            count++;
          }
        }
        if (count == 1) {
          if (req.term[c - 1] == "@") {
            results.push(req.term + el);
          } else {
            const [user, domain] = req.term.split("@");
            if (el.startsWith(domain)) {
              results.push(user + "@" + el);
            }
          }
        }
      });
      resp(results);
    },
  });
});
