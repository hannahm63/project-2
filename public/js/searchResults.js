$(document).ready(function() {
  $(".searchResult").on("click", function() {
    let choiceName = this.getAttribute("data-name");
    console.log(choiceName + "dflksjdfds");
    const concat = choiceName
      .replace(/ /gm, "%2520")
      .replace(/:/gm, "%253A")
      .replace(/'/gm, "%2527");

    let choicePlatform = this.getAttribute("data-platform").toLowerCase();

    const adjustedPf = choicePlatform
      .replace(/ps4/gm, "playstation-4")
      .replace(/n64/gm, "nintendo-64")
      .replace(/xone/gm, "xbox-one");

    console.log(`${concat} and ${adjustedPf}`);

    window.location.href = `/games/${concat}/${adjustedPf}`;
  });
});
