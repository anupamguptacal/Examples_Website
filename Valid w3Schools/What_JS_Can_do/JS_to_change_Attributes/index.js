(function() {
	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let happyButton = document.getElementById("make-happy");
		happyButton.addEventListener("click", makeHappy);

		let sadButton = document.getElementById("make-sad");
		sadButton.addEventListener("click", makeSad);
	}

	function makeHappy() {
		let img = document.getElementById("dog");
		dog.src = "happydog.jpg";
	}

	function makeSad() {
		let img = document.getElementById("dog");
		dog.src = "saddog.jpg";
	}
})();