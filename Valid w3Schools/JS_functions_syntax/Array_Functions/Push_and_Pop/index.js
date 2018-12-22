(function() {

	"use strict";
	window.addEventListener("load", initialize);
  let pushArray = ["Roger", "Patrick", "Teresa"];
  let popArray = [1.3, 4.5, 6.5];

	function initialize() {
		let button = document.getElementById("result-show");
		button.addEventListener("click", showResult);
    let pushButton = document.getElementById("push-element");
    pushButton.addEventListener("click", pushElement);
    let popButton = document.getElementById("pop-element");
    popButton.addEventListener("click", popElement);
		let pushPopButton = document.getElementById("pop-push-element");
    pushPopButton.addEventListener("click", popElementPushArray);

	}

	function showResult() {
    pushArray.push("Samantha");
		document.getElementById("fillFirst").innerText = pushArray.join(", ");
		document.getElementById("fillFirst").classList.add("result");

    popArray.pop();
		document.getElementById("fillSecond").innerText = popArray.join(", ");
		document.getElementById("fillSecond").classList.add("result");
		document.getElementById("result-show").disabled = true;
	}

  function pushElement() {
    let input = document.getElementById("input-box");
    pushArray.push(input.value);
    document.getElementById("fillFirst").innerText = pushArray.join(", ");
  }

	function popElementPushArray() {
		pushArray.pop();
		document.getElementById("fillFirst").innerText = pushArray.join(", ");
	}

  function popElement() {
    popArray.pop();
		document.getElementById("fillSecond").innerText = popArray.toString();
  }

})()
