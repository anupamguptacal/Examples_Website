(function() {
	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("alert-message");
		button.addEventListener("click", alertMessage);
	}

	function alertMessage() {
		alert(document.querySelector("input").value);
		document.getElementById("success-message").classList.remove("hidden");
		setTimeout(removeMessage, 3000);
	}

	function removeMessage() {
		document.getElementById("success-message").classList.add("hidden");
	}
})()
