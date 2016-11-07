// // this is a comment

console.log("Javascript is running");

'use strict';

//when the width of the site becomes too small
//this function will move the banner
//to underneath the icons

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