//password Genarator

// Set up password display
// Genarate Password
// Set clickListen


// Ask Questions

$(document).ready(function () {

    var lowerCaseLetters = document.getElementById("LowerSelector").value;
    var upperCaseLetters = document.getElementById("UpperSelector").value;


    function passwordGen() {
        let values = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
        let password = "";

        for (var i = 0; i == values; i++) {
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));


    document.getElementById("Password-Genarated").value = password;

    document.getElementById("")

            $("#LowerSelector").on("click", function () {
                if (document.getElementById("#LowerSelector").checked) {
                    rate_value = document.getElementById().value;
                console.log(this)
                }
            }
        
        }
    
    
    }
    // set onclick for each choice question
    //Lower - Selector.addEventListener("click", function (event) {

        //when any choice is clicked
        //document.getElementById("Lower-Selector")
        // get userChoice from button (which did user choose?)

        // compare userChoice with answer 

        // alert user


    // Return password results
        //create for loop to choose password charaters
    



            // Copy to clipboard
            //set clickListener // <button onclick="myFunction()">Copy text</button>
            //function myFunction() {
            //var copyText = document.getElementById("Copy-to-Clipboard");
            //copyText.select();
            //copyText.setSelectionRange(0, 99999)
            //document.execCommand("copy");
            //alert("Copied the text: " + copyText.value);
}