(function() {

  window.addEventListener("load", initialize);

  function initialize() {
    let input = document.querySelector("input");
    input.addEventListener("blur", changeText);
  }

  function changeText() {
    let input = document.querySelector("input");
    input.value = input.value.toUpperCase();
  }
})();
