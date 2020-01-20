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



var length = parseInt(prompt(
    "How many characters would you like your password to contain?"
  ));
  parseInt(document.getElementById("NumCharacters").value = numCharacters);

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
        else (lowerSelector === false){
            console.log("not added");
        }

        if (upperSelector === true){
            password = (result[upperSelector] + 1);
        }
        else (upperSelector === false){
            console.log("not added");
        }
        if (numSelector === true){
            password = (result[numSelector] + 1);
            //password = (NumCharacters + ( 1 * NumSelector));
        }
        else (numSelector === false){
            console.log("not added");
        }

        if (specialSelector === true){
            password = (result[specialSelector] + 1);
            
        }
        else (specialSelector === false){
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
        //document.getElementById("")



};       
    //var passwordOptions = {
    //    length: length,
    //    hasSpecialCharacters: hasSpecialCharacters,
    //    hasNumericCharacters: hasNumericCharacters,
    //    hasLowerCasedCharacters: hasLowerCasedCharacters,
    //    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  console.log(passwordOptions);

pass = [];

// if conditions and the divide length based on the conditions
/*$(".genaratecode").on("click", function (event) {
    event.preventDefault();
    var characters = "";

    (document.getElementById("LowerSelector")) ? characters += lowerSelector : "";
    (document.getElementById("UpperSelector")) ? characters += upperSelector : "";
    (document.getElementById("NumSelector")) ? characters += numSelector : "";
    (document.getElementById("SpecialSelector")) ? characters += specialSelector : "";
    console.log("78;" .getElementById + characters);
    console.log("NumCharacters.value, : "+ NumCharacters.value);
    console.log("Ncharacters, : "+characters);
        var value = password(NumCharacters.value, characters);
    console.log("passwordGen ---> " +value);
});
  

    // set onclick for each choice question
    //Lower - Selector.addEventListener("click", function (event) {
    //include select checked boxes
    /*$("#LowerSelector").on("click", function () {
        

     //when any choice is clicked
    //document.getElementById("Lower-Selector")
    // get userChoice from button (which did user choose?)
    // Return password results
    //send random password to text box
    




    // Copy to clipboard
    //set clickListener // <button onclick="myFunction()">Copy text</button>
    //function myFunction() {)
