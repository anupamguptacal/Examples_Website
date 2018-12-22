(function() {
	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let disappearButton = document.getElementById("disappear");
		disappearButton.addEventListener("click", disappear);

		let appearButton = document.getElementById("appear");
		appearButton.addEventListener("click", appear);

	}

	function disappear() {
		let img = document.getElementById("magic-img");
		img.classList.add("hidden");
	}

	function appear() {
		let img = document.getElementById("magic-img");
		img.classList.remove("hidden");
	}
})()
