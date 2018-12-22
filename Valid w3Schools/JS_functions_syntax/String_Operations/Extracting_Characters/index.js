(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
    let str = "HELLO WORLD";
    let character = str.charAt(0);
		document.getElementById("fillFirst").innerText = character;
		document.getElementById("fillFirst").classList.add("result");


    str = "HELLO";
    character = str.charAt(4);
		document.getElementById("fillSecond").innerText = character;
		document.getElementById("fillSecond").classList.add("result");

    str = "HELLO WORLD";
    character = str.charCodeAt(0);
    document.getElementById("fillThird").innerText = character;
		document.getElementById("fillThird").classList.add("result");

    str = "HELLO WORLD";
    character = str[0];
    document.getElementById("fillFourth").innerText = character;
		document.getElementById("fillFourth").classList.add("result");
		document.getElementById("resultShow").disabled = true;
	}

})()
