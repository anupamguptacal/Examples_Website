(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
    let arr = ["Roger", "Patrick", "Teresa"];
    let arrTwo = ["Three", "Four", "Five"];
    let result = arr.concat(arrTwo);
		document.getElementById("fillFirst").innerText = result.join(", ");
    document.getElementById("fillFirst").classList.add("result");


    let arrThree = [1.3, 4.5, 6.5];
    result = arr.concat(arrTwo, arrThree);
		document.getElementById("fillSecond").innerText = result.join(", ");
    document.getElementById("fillSecond").classList.add("result");
    document.getElementById("resultShow").disabled = true;
	}

})()
