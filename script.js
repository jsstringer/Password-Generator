//password Genarator

// Set up password display
// Genarate Password
// Set clickListen


// Ask Questions


$(document).ready(function () {
    //use vaules for password selection
    var LowerSelector = "abcdefghijklmnopqrstuvwyz";
    var UpperSelector = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var NumSelector = "1234567890";
    var SpecialSelector = "!@#$%^&*()_+";

    var LowerSelector = document.getElementById("LowerSelector");
    var UpperSelector = document.getElementById("UpperSelector");
    var NumSelector = document.getElementById("NumSelector");
    var SpecialSelector = document.getElementById("SpecialSelector");
    var genaratecode = document.getElementById("Genaratecode");
    var PasswordGenarated = document.getElementById("PasswordGenarated")
    var NumCharacters = document.getElementById("NumCharacters");
    // checkboxes with new varables

    function password(l,NumCharacters){
        var password = "";

        // issue how to make the for loop = the new lower, upper, num & special vaules
        //create for loop to choose password charaters
        for (var i = 0; i<l; i++){
            password += NumCharacters.charAt(Math.floor(Math.random() * charaters.length));
        }
            return password;
            //use vaules for password selection
            //include select checked boxes
            //document.getElementById("")

    

    };

    // set onclick for each choice question
    //Lower - Selector.addEventListener("click", function (event) {
    //include select checked boxes
    $(LowerSelector).on("click", function () {
        var lower = document.getElementById("LowerSelector");
        lower.checked = true;
        console.log("lower");
    });

    $("#UpperSelector").on("click", function () {
        var upper = document.getElementById("UpperSelector");
        upper.checked = true;
        console.log("upper");
    });

    $("#NumSelector").on("click", function () {
        var num = document.getElementById("NumSelector");
        num.checked = true;
        console.log("num");
    });

    $("#SpecialSelector").on("click", function () {
        var special = document.getElementById("SpecialSelector");
        special.checked = true;
        console.log("special");
    
    $("genaratecode").on("click", function (event) {
        var characters = "";
        (LowerSelector.checked) ? characters += LowerSelector : "";
        (UpperSelector.checked) ? characters += UpperSelector : "";
        (NumSelector.checked) ? characters += NumCharacters : "";
        (SpecialSelector.checked) ? characters += SpecialSelector : "";
        PasswordGenarated.value = password(NumCharacters.value, characters);
        console.log("passwordGen");
    });
    
    
    
});

     //when any choice is clicked
    //document.getElementById("Lower-Selector")
    // get userChoice from button (which did user choose?)
    // Return password results
    //send random password to text box
    




    // Copy to clipboard
    //set clickListener // <button onclick="myFunction()">Copy text</button>
    //function myFunction() {
})
