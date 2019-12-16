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

   // var LowerSelector = document.getElementById("LowerSelector");
    //var UpperSelector = document.getElementById("UpperSelector");
   // var NumSelector = document.getElementById("NumSelector");
   // var SpecialSelector = document.getElementById("SpecialSelector");
    var genaratecode = document.getElementById("Genaratecode");
    var PasswordGenarated = document.getElementById("PasswordGenarated")
    var NumCharacters = document.getElementById("NumCharacters");
    // checkboxes with new varables

    function password(l,NumCharacters){
        var password = "";
        console.log("line29-passwordfunction");
        // issue how to make the for loop = the new lower, upper, num & special vaules
        //create for loop to choose password charaters
        for (var i = 0; i<l; i++){

            check = $("#LowerSelector").prop("checked");
            if (check){
                password = (NumCharacters + ( 1 * LowerSelector));
            }

            check = $("#UpperSelector").prop("checked");
            if (check){
                password = (NumCharacters + (1 * UpperSelector));
            }

            check = $("#NumSelector").prop("checked");
            if (check){
                password = (NumCharacters + (1 * NumSelector));
            }

            check = $("#SpecialSelector").prop("checked");
            if (check){
                password = (NumCharacters + (1 * SpecialSelector));
            }
        

            console.log("Math.floor(Math.random() + NumCharacters.length) "+Math.floor(Math.random()   *8));
            password += NumCharacters.charAt(Math.floor(Math.random() * 9));
        }
            return password;
            //use vaules for password selection
            //include select checked boxes
            //document.getElementById("")
    
    

    };
  

    // set onclick for each choice question
    //Lower - Selector.addEventListener("click", function (event) {
    //include select checked boxes
    /*$("#LowerSelector").on("click", function () {
        
        
        check = $("#LowerSelector").prop("checked");
        if(check) {
             alert("Checkbox is checked.");
        } else {
            alert("Checkbox is unchecked.");
        }
        console.log("lower");
    });

    $("#UpperSelector").on("click", function () {
        
        check = $("#UpperSelector").prop("checked");
        if(check) {
             alert("Checkbox is checked.");
        } else {
            alert("Checkbox is unchecked.");
        }
        console.log("upper");
    });

    $("#NumSelector").on("click", function () {
        
        check = $("#NumSelector").prop("checked");
        if(check) {
             alert("Checkbox is checked.");
        } else {
            alert("Checkbox is unchecked.");
        }
        console.log("num");
    });

    $("#SpecialSelector").on("click", function () {
        
        check = $("#SpecialSelector").prop("checked");
        if(check) {
             alert("Checkbox is checked.");
        } else {
            alert("Checkbox is unchecked.");
        }
        console.log("special");
    });*/
    $(".genaratecode").on("click", function (event) {
        event.preventDefault();
        var characters = "";
        (document.getElementById("LowerSelector").checked) ? characters += LowerSelector : "";
        (document.getElementById("UpperSelector").checked) ? characters += UpperSelector : "";
        (document.getElementById("NumSelector").checked) ? characters += NumSelector : "";
        (document.getElementById("SpecialSelector").checked) ? characters += SpecialSelector : "";
        console.log("78;" .getElementById + characters);
        console.log("NumCharacters.value, : "+ NumCharacters.value);
        console.log("Ncharacters, : "+characters);
            var value = password(NumCharacters.value, characters);
        console.log("passwordGen ---> " +value);
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
