//password Genarator

// Set up password display
// Genarate Password
// Set clickListen


// Ask Questions

var lowerSelector = "abcdefghijklmnopqrstuvwyz";
var upperSelector = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSelector = "1234567890";
var specialSelector = "!@#$%^&*()_+";
var passwordGenarated = "";
var numCharacters = "";
var numCharacters = false;
var  hasspecialSelector = false;

  // Variable to store boolean regarding the inclusion of numeric characters
var  hasnumSelector = false;

// Variable to store boolean regarding the inclusion of lowercase characters
var  haslowerSelector = false;

// Variable to store boolean regarding the inclusion of uppercase characters
var hasupperSelector = false;

$(document).ready(function () {
    //use vaules for password selection



    //charsetarray
    characters = [
        'abcdefghijklmnopqrstuvwyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '1234567890',
        '!@#$%^&*()_+'];
    
    var passwordClick = document.querySelector("#passwordGenarated");
    var copyPassword = document.querySelector("#copyPW");
    var resetPassword = document.querySelector("reset");



 numCharacters = parseInt(prompt(
    "How many characters would you like your password to contain?"
  ));
//   parseInt(document.getElementById("NumCharacters").value = numCharacters);

  hasspecialSelector = confirm(
    "Click OK to confirm including special characters."
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  hasnumSelector = confirm(
    "Click OK to confirm including numeric characters."
  );

// Variable to store boolean regarding the inclusion of lowercase characters
  haslowerSelector = confirm(
"Click OK to confirm including lowercase characters."
);

// Variable to store boolean regarding the inclusion of uppercase characters
 hasupperSelector = confirm(
"Click OK to confirm including uppercase characters."
);

pass = [];


    
    
    function copyClipboard(event) {
        console.log('hey');
        let password = document.getElementById("thePassword").select()
    
        console.log(password);
        document.execCommand('copy')
        
      //   var copy2Clipboard = document.getElementById("copyPassword");
      //   copy2Clipboard.select();
      //   document.execCommand("copy");
        alert("password add to clipboard");
        
        // console.log('hey');
        // event.preventDefault();
        // let password = $("#thePassword");
        // console.log(password.val())
        // console.log(password)
        // password.html.select()
        // document.execCommand("copy");
        // alert("password add to clipboard");
    }


    $("#copyPassword").on('click', copyClipboard)

});
function passwordClick() {

    // SUDO
    // Assume numCharacters  = 6
    // for (0, 1, 2, 3, 4, 5) {
    //    generateRandonChar
    //  
    // }
    // 
    // generateRandonChar
    //      // what's condition?
    // var availalbeCharForChoosing = ""
    // if number, availalbeCharForChoosing += "0123456789"
    // if lower, availalbeCharForChoosing += "abc.....z"
    // if upper, availalbeCharForChoosing += "ABC.....Z"
    // if symbol, availalbeCharForChoosing += "..."
    // from availalbeCharForChoosing, pick a char at random index
    // return randomChar



        passwordGenarated = "";
        //event.preventDefult();
        //var password = {};
        console.log("line29-passwordfunction");
        // issue how to make the for loop = the new lower, upper, num & special vaules
        //create for loop to choose password charaters
        for (var ii = 0; ii < numCharacters; ii++){
            


            // generateRandonChar
            var availalbeCharForChoosing = "";

            if (haslowerSelector === true) {
                availalbeCharForChoosing += lowerSelector;
            }
            else {
                console.log("not added");
            }

            if (hasupperSelector === true){
                availalbeCharForChoosing += upperSelector;
            }
            else {
                console.log("not added");
            }
            if (hasnumSelector === true){
                availalbeCharForChoosing += numSelector;
                //password = (result[numSelector] + 1);
                //password = (NumCharacters + ( 1 * NumSelector));
            }
            else {
                console.log("not added");
            }

            if (hasspecialSelector === true){
                availalbeCharForChoosing += specialSelector;
                
            }
            else {
                console.log("not added");
            }

            console.log("We are at password char index " + ii + " , char avaiable for randomly picking is " + availalbeCharForChoosing)

            var randonIndex = Math.floor(Math.random() * availalbeCharForChoosing.length);
            var chosenChar = availalbeCharForChoosing[randonIndex];
            console.log("random index is " + randonIndex + ', chosenChar is ' + chosenChar);

            passwordGenarated += chosenChar

            // var newChar = passwordGenarated.charAt(index)
            // pass.push(newChar);
            //return passwordClick;    
        };
        console.log(passwordGenarated);
        document.getElementById("thePassword").textContent = passwordGenarated;
}