$(document).ready(function() {
  $("#addreview-btn").on("click", function(event) {
    event.preventDefault();

    console.log("Button clicked!");

    let newReview = {
      comment: $("#review-text")
        .val()
        .trim()
    };
    console.log(newReview);

    $.ajax({
      url: "/api/games",
      method: "POST",
      data: newReview
    }).then(function(data) {
      console.log(data);
    });
  });
});
