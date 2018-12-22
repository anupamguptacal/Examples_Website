(function() {
	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		console.log("Here is my first console.log statement");
		console.log("Woohoo! This works!");
		let button = document.getElementById("console-message");
		button.addEventListener("click", logMessage);
	}

	function logMessage() {
		console.log(document.querySelector("input").value);
		document.getElementById("success-message").classList.remove("hidden");
		setTimeout(removeMessage, 3000);
	}

	function removeMessage() {
		document.getElementById("success-message").classList.add("hidden");
	}
})();
