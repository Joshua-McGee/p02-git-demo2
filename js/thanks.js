//java script for calculator
//when a send button is pressed
//this function creates a pop up informing
// the user that they have sent the message
//then redirects them
console.log("Javascript is running");

'use strict';

$("#thanks").click( function() {
    alert("You have successfully contacted a tutor, thank you for using our site.");
    var count = 1;
    setInterval(function(){
        count--;
        if (count == 0) {
            window.location = '../index.html'; 
        }
    },1000);
});



