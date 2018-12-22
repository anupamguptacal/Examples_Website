(function() {
  window.addEventListener("load", initialize);

  function initialize() {
    let div = document.getElementById("change-text");
    div.addEventListener("mouseover", changeText);
    div.addEventListener("mouseout, changeText");
  }

  function changeText() {
    let p = document.querySelector("#change-text>p")
    if(!(p.innerText == "Changed Text!")) {
      p.innerText = "Changed Text!";
    } else {
      p.innerText = "Hover over me to change my color and text!";
    }
  }
})();
