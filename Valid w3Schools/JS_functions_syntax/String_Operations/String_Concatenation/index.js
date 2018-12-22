(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
		let firstWord = "Hello ";
		let secondWord = "World";
		document.getElementById("fill").innerText = firstWord + secondWord;
		document.getElementById("fill").classList.add("result");

		firstWord = "Hello ";
		secondWord = "World!";
		let result = firstWord.concat(" ", secondWord);
		document.getElementById("fillSecond").innerText = result;
		document.getElementById("fillSecond").classList.add("result");

		firstWord = "Hello ";
		secondWord = "World!";
		result = firstWord.concat(" :) ",  secondWord);
		document.getElementById("fillThird").innerText = result;
		document.getElementById("fillThird").classList.add("result");
		document.getElementById("resultShow").disabled = true;
	}

})()
