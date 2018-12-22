(function() {
	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let changeButton = document.getElementById("change-content");
		changeButton.addEventListener("click", changeStyle);
	}

	function changeStyle() {
		let paragraph = document.getElementById("para-1");
		paragraph.style.fontSize = "28pt";
		paragraph.style.color = "blue";
	}
})();
