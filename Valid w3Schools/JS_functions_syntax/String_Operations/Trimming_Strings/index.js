(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
    let str = "       Hello World!        ";
    let changed = str.trim();
		document.getElementById("fillFirst").innerText = changed;
		document.getElementById("fillFirst").classList.add("result");


    str = "Hello World!        ";
    changed = str.trim();
		document.getElementById("fillSecond").innerText = changed;
		document.getElementById("fillSecond").classList.add("result");
		document.getElementById("resultShow").disabled = true;
	}

})()
