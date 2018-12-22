(function() {
  window.addEventListener("load", initialize);

  function initialize() {
    let div = document.getElementById("change-text");
    div.addEventListener("click", changeText);
  }

  function changeText() {
    this.classList.toggle("blue");
    let obj = document.querySelector("#change-text>p");
    if(obj.innerText === "Changed Text!") {
      obj.innerText = "Click me to change my Text!";
    } else {
      obj.innerText = "Changed Text!";
    }
  }
})();
