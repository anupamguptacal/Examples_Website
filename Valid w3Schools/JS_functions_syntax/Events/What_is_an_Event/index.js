(function() {
  window.addEventListener("load", initialize);

  function initialize() {
    let button = document.getElementById("click-me-button");
    button.addEventListener("click", changeText);
  }

  function changeText() {
    let button = document.getElementById("click-me-button");
    if(button.innerText !== "I can change Text when clicked!") {
      button.innerText = "I can change Text when clicked!";
    } else {
      button.innerText = "Click me";
    }
  }
})();
