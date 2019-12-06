$(document).ready(function() {
  $("#main_search").on("click", function() {
    event.preventDefault();

    let game = $("#game_input")
      .val()
      .trim();

    console.log(game);

    window.location.href = `/search/${game}`;

    // what to do while waiting for response?

    if (game) {
      $("#intro").fadeOut("slow", function() {
        //find both queries here with a function:
      });
    }
  });
});
