(function() {
  window.addEventListener("load", initialize);

  function initialize() {
    document.getElementById("button-2").addEventListener("click", activate);
  }

  function activate() {
    document.getElementById("button-1").addEventListener("click", changeText);
  }

  function changeText() {
    document.getElementById("button-1").innerText = "Changed Text!";
  }
})();
