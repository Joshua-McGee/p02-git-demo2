// // this is a comment

console.log("Javascript is running");

'use strict';

//when the width of the site becomes too small
//this function will move the banner
//to underneath the icons

var width = $(window).width();

window.addEventListener("resize", function(){
	console.log("running");
	width = $(window).width();
	if(width < 1056){

		console.log("fired");

		$("#backIMG").removeClass("commit-banner");
		$("#belowIMG").removeClass("hidden");

		

	//accesability
	// $("#nav-toggle").attr("aria-hidden", "false");
	// $("#nav-items").attr("aria-hidden", "true");
}
if(width > 1056){
	$("#backIMG").addClass("commit-banner");
	$("#belowIMG").addClass("hidden");
}

if(width < 1161) {
	$("#para1").removeClass("commit-paragraph");
	$("#para1").addClass("commit-paragraph-black");

	$("#para2").removeClass("commit-paragraph");
	$("#para2").addClass("commit-paragraph-black");

	$("#para3").removeClass("commit-paragraph");
	$("#para3").addClass("commit-paragraph-black");
}

if(width > 1163) {
	$("#para1").addClass("commit-paragraph");
	$("#para1").removeClass("commit-paragraph-black");

	$("#para2").addClass("commit-paragraph");
	$("#para2").removeClass("commit-paragraph-black");

	$("#para3").addClass("commit-paragraph");
	$("#para3").removeClass("commit-paragraph-black");
}

});


if(width < 1040){

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