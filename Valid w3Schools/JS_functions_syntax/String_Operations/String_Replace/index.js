(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
    let str = "Cats are the best!";
    let replaced = str.replace("Cats", "Dogs");
		document.getElementById("fillFirst").innerText = replaced;
		document.getElementById("fillFirst").classList.add("result");


    str = "Cats are Cats"
    replaced = str.replace("Cats", "Dogs");
		document.getElementById("fillSecond").innerText = replaced;
		document.getElementById("fillSecond").classList.add("result");

    str = "Cats";
    let notReplaced = str.replace("cats", "Dogs")
		document.getElementById("fillThird").innerText = notReplaced;
		document.getElementById("fillThird").classList.add("result");

    str = "Cats";
    replaced = str.replace("Cats", "Dogs");
    document.getElementById("fillFourth").innerText = replaced;
		document.getElementById("fillFourth").classList.add("result");
		document.getElementById("resultShow").disabled = true;
	}

})()
