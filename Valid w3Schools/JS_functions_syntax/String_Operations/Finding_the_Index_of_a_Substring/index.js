(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
    let firstWord = "tree";
    let sentence = "A tree";
    let position = sentence.indexOf(firstWord);
		document.getElementById("fillFirst").innerText = position;
		document.getElementById("fillFirst").classList.add("result");


		firstWord = "apple";
    sentence = "apple apple is not apple";
    position = sentence.lastIndexOf(firstWord);
    let secondPosition = sentence.indexOf(firstWord, 5);
		document.getElementById("fillSecond").innerText = position;
		document.getElementById("fillSecond").classList.add("result");
    document.getElementById("fillFifth").innerText = secondPosition;
		document.getElementById("fillFifth").classList.add("result");

    firstWord = "no";
    sentence = "yes is a valid response";
    let firstPosition = sentence.indexOf(firstWord);
    let lastPosition = sentence.lastIndexOf(firstWord);
		document.getElementById("fillThird").innerText = firstPosition;
		document.getElementById("fillThird").classList.add("result");
    document.getElementById("fillFourth").innerText = lastPosition;
		document.getElementById("fillFourth").classList.add("result");
		document.getElementById("resultShow").disabled = true;
	}

})()
