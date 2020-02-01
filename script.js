var lowerSelector = "abcdefghijklmnopqrstuvwyz";
var upperSelector = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSelector = "1234567890";
var specialSelector = "!@#$%^&*()_+";
var passwordGenarated = "";
var numCharacters = "";

var numCharacters = false;
var hasspecialSelector = false;
var hasnumSelector = false;
var haslowerSelector = false;
var hasupperSelector = false;

$(document).ready(function() {
  characters = [
    "abcdefghijklmnopqrstuvwyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "1234567890",
    "!@#$%^&*()_+"
  ];

  numCharacters = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  hasspecialSelector = confirm(
    "Click OK to confirm including special characters."
  );

  hasnumSelector = confirm("Click OK to confirm including numeric characters.");

  haslowerSelector = confirm(
    "Click OK to confirm including lowercase characters."
  );
  hasupperSelector = confirm(
    "Click OK to confirm including uppercase characters."
  );

  pass = [];

  function copyClipboard(event) {
    let password = document.getElementById("thePassword").select();
    document.execCommand("copy");
    alert("password add to clipboard");
  }

  $("#copyPassword").on("click", copyClipboard);
});
function passwordClick() {
  passwordGenarated = "";

  for (var ii = 0; ii < numCharacters; ii++) {
    var availalbeCharForChoosing = "";

    if (haslowerSelector === true) {
      availalbeCharForChoosing += lowerSelector;
    }

    if (hasupperSelector === true) {
      availalbeCharForChoosing += upperSelector;
    }

    if (hasnumSelector === true) {
      availalbeCharForChoosing += numSelector;
    }

    if (hasspecialSelector === true) {
      availalbeCharForChoosing += specialSelector;
    }

    var randonIndex = Math.floor(
      Math.random() * availalbeCharForChoosing.length
    );
    var chosenChar = availalbeCharForChoosing[randonIndex];

    passwordGenarated += chosenChar;
  }

  document.getElementById("thePassword").textContent = passwordGenarated;
}
