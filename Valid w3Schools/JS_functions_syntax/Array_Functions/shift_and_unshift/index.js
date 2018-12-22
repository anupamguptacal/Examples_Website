(function() {

	"use strict";
	window.addEventListener("load", initialize);
  let pushArray = ["Roger", "Patrick", "Teresa"];
  let popArray = [1.3, 4.5, 6.5];

	function initialize() {
		let button = document.getElementById("result-show");
		button.addEventListener("click", showResult);
    let pushButton = document.getElementById("unshift-element");
    pushButton.addEventListener("click", pushElement);
    let popButton = document.getElementById("shift-element");
    popButton.addEventListener("click", popElement);

		let pushPopButton = document.getElementById("shift-unshift-element");
    pushPopButton.addEventListener("click", popElementPushArray);
	}

	function showResult() {
    pushArray.unshift("Samantha");
		document.getElementById("fillFirst").innerText = pushArray.toString();

    let deleted = popArray.shift();
		document.getElementById("fillSecond").innerText = popArray.toString();
    document.getElementById("fill-third").innerText = deleted;

		document.getElementById("fillSecond").classList.add("result");
		document.getElementById("result-show").disabled = true;
	}

	function popElementPushArray() {
		let deleted = pushArray.shift();
		document.getElementById("fillFirst").innerText = pushArray.join(", ");
	}

  function pushElement() {
    let input = document.getElementById("input-box");
    pushArray.unshift(input.value);
    document.getElementById("fillFirst").innerText = pushArray.toString();
  }

  function popElement() {
    let deleted = popArray.shift();
		document.getElementById("fillSecond").innerText = popArray.toString();
    document.getElementById("fill-third").innerText = deleted;
  }

})()
