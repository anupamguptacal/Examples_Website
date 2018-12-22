(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
		let firstWord = "tree";
		let length = firstWord.length;
		document.getElementById("fillFirst").innerText = length;
		document.getElementById("fillFirst").classList.add("result");


		firstWord = "apple";
		length = firstWord.length;
		document.getElementById("fillSecond").innerText = length;
		document.getElementById("fillSecond").classList.add("result");

		firstWord = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		length = firstWord.length;
		document.getElementById("fillThird").innerText = length;
		document.getElementById("fillThird").classList.add("result");
		document.getElementById("resultShow").disabled = true;
	}

})()
