(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("result-show");
		button.addEventListener("click", showResult);
	}

	function showResult() {
    let arr = ["Roger", "Patrick", "Teresa"];
    let stringRep = arr.toString();
		document.getElementById("fillFirst").innerText = stringRep;
		document.getElementById("fillFirst").classList.add("result");


    arr = [1.3, 4.5, 6.5];
    stringRep = arr.toString();
		document.getElementById("fillSecond").innerText = stringRep;
		document.getElementById("result-show").disabled = true;
		document.getElementById("fillSecond").classList.add("result");
	}

})()
