$(document).ready(function() {
    $("#addreview-btn").on("click", function(event) {
        event.preventDefault();

        $.ajax({
            url: "/api/games",
            method: "POST"
        })
        .then(function(data) {
            console.log(data);
            
        })
    })
});