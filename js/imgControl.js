// // this is a comment

 console.log("Javascript is running");

 'use strict';

// var width = window.innerWidth;
// console.log("Width: "+width);

// if(width < 500){
// 	document.getElementById("nav-toggle").className = "";

// 	document.getElementById("nav-items").className += " hidden";
// }

// document.getElementById("nav-toggle").addEventListener("click", function(){
// 	document.getElementById("nav-items").className = "";
// });

var width = $(window).width();

if(width < 960){

	$("#backIMG").removeClass("commit-banner");
	$("#belowIMG").removeClass("hidden");

	//accesability
	// $("#nav-toggle").attr("aria-hidden", "false");
	// $("#nav-items").attr("aria-hidden", "true");
}



/*
	$("nav") = <nav>
	$(".nav") = <div class = "nav">
	$("#nav") = <div id = "nav">
*/