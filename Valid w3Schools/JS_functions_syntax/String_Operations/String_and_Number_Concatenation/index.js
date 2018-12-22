(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
		let firstWord = "Hello World";
		let number = 3;
		document.getElementById("fillFirst").innerText = firstWord + number;
		document.getElementById("fillFirst").classList.add("result");


		firstWord = "33";
		number = 5;
		document.getElementById("fillSecond").innerText = firstWord + number;
		document.getElementById("fillSecond").classList.add("result");
		document.getElementById("resultShow").disabled = true;
	}

})()
