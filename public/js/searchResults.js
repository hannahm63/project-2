$(document).ready(function() {
  $(".searchResult").on("click", function() {
    let choiceName = this.getAttribute("data-name");
    console.log(choiceName + "dflksjdfds");
    const concat = choiceName
      .replace(/ /gm, "%2520")
      .replace(/:/gm, "%253A")
      .replace(/'/gm, "%2527");
    let choicePlatform = this.getAttribute("data-platform").toLowerCase();

    console.log(`${concat} and ${choicePlatform}`);

    window.location.href = `/game/${concat}/${choicePlatform}`;
  });
});
