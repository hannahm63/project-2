$(document).ready(function() {
  $("#addreview-btn").on("click", function(event) {
    event.preventDefault();

    console.log("Button clicked!");

    let newReview = {
      comment: $("#review-text")
        .val()
        .trim(),
      rating: $("input[name='star']:checked").val(),
      title: $("#review-text").attr("data-title"),
      platform: $("#review-text")
        .attr("data-platform")
        .split("=")[1]
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
