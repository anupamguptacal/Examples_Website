(function() {

	"use strict";
	window.addEventListener("load", initialize);

	function initialize() {
		let button = document.getElementById("resultShow");
		button.addEventListener("click", showResult);
	}

	function showResult() {
    let str = "Apple, Banana, Kiwi";
    let res = str.slice(7,13);
    console.log(res);
		document.getElementById("fillFirst").innerText = res;
		document.getElementById("fillFirst").classList.add("result");

    str = "Apple, Banana, Kiwi";
    res = str.slice(-12,-6);
    console.log(res);
    document.getElementById("fillSecond").innerText = res;
		document.getElementById("fillSecond").classList.add("result");

    str = "Apple, Banana, Kiwi";
    res = str.slice(7);
    document.getElementById("fillThird").innerText = res;
		document.getElementById("fillThird").classList.add("result");


    str = "Apple, Banana, Kiwi";
    res = str.slice(7,13);
    document.getElementById("fillFourth").innerText = res;
		document.getElementById("fillFourth").classList.add("result");

    str = "Apple, Banana, Kiwi";
    res = str.substr(7,6);
    document.getElementById("fillFifth").innerText = res;
		document.getElementById("fillFifth").classList.add("result");
		document.getElementById("resultShow").disabled = true;
	}

})()
