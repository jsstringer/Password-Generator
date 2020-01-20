//password Genarator

// Set up password display
// Genarate Password
// Set clickListen


// Ask Questions


$(document).ready(function () {
    //use vaules for password selection


    var lowerSelector = "abcdefghijklmnopqrstuvwyz";
    var upperSelector = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numSelector = "1234567890";
    var specialSelector = "!@#$%^&*()_+";
    var passwordGenarated = "";
    var numCharacters = "";

    characters = ['abcdefghijklmnopqrstuvwyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ','1234567890','!@#$%^&*()_+'];
    
    var genaratecode = document.getElementById("Genaratecode");



var numCharacters = parseInt(prompt(
    "How many characters would you like your password to contain?"
  ));
//   parseInt(document.getElementById("NumCharacters").value = numCharacters);

var  hasspecialSelector = confirm(
    "Click OK to confirm including special characters."
  );

  // Variable to store boolean regarding the inclusion of numeric characters
var  hasnumSelector = confirm(
    "Click OK to confirm including numeric characters."
  );

// Variable to store boolean regarding the inclusion of lowercase characters
var  haslowerSelector = confirm(
"Click OK to confirm including lowercase characters."
);

// Variable to store boolean regarding the inclusion of uppercase characters
var hasupperSelector = confirm(
"Click OK to confirm including uppercase characters."
);

function password (numCharacters){
    var password = {};
    console.log("line29-passwordfunction");
    // issue how to make the for loop = the new lower, upper, num & special vaules
    //create for loop to choose password charaters
    for (var ii = 0; ii <characters.length; ii++){
        
        if (lowerSelector === true) {
            password = (result[lowerSelector] + 1);
        }
        else {
            console.log("not added");
        }

        if (upperSelector === true){
            password = (result[upperSelector] + 1);
        }
        else {
            console.log("not added");
        }
        if (numSelector === true){
            password = (result[numSelector] + 1);
            //password = (NumCharacters + ( 1 * NumSelector));
        }
        else {
            console.log("not added");
        }

        if (specialSelector === true){
            password = (result[specialSelector] + 1);
            
        }
        else {
            console.log("not added");
        }

        console.log("Math.floor(Math.random() + numCharacters.length) " + Math.floor(Math.random() ));
        
        passwordGenarated += passwordCharSet.charAt(Math.floor(Math.random() * numSet));
    //___________________________________________________________________

    
        return password;
    //--------------------------------------------------------------------    
    };

        //use vaules for password selection
        //include select checked boxes
        //document.getElementById(""
};       
    //var passwordOptions = {
    //    length: length,
    //    hasSpecialCharacters: hasSpecialCharacters,
    //    hasNumericCharacters: hasNumericCharacters,
    //    hasLowerCasedCharacters: hasLowerCasedCharacters,
    //    hasUpperCasedCharacters: hasUpperCasedCharacters
  

//   console.log(passwordOptions);

pass = [];
});
