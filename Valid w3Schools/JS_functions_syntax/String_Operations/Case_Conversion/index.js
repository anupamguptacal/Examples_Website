(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
    let str = "Cats are the best!";
    let replaced = str.toUpperCase();
		document.getElementById("fillFirst").innerText = replaced;
		document.getElementById("fillFirst").classList.add("result");


    str = "WE WERE ON A BREAK!"
    replaced = str.toLowerCase();
		document.getElementById("fillSecond").innerText = replaced;
		document.getElementById("resultShow").disabled = true;
		document.getElementById("fillSecond").classList.add("result");
	}

})()
