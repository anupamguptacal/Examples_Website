(function() {
	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("change-content");
		button.addEventListener("click", changeContent);
	}

	function changeContent() {
		let paragraph = document.getElementById("para-1");
		paragraph.innerText = "Tra La La!";
	}
})()
