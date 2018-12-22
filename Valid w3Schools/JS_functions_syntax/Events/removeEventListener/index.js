(function() {
  window.addEventListener("load", initialize);

  function initialize() {
    document.getElementById("button-1").addEventListener("click", changePicture);
    document.getElementById("button-2").addEventListener("click", removeListener);
  }

  function changePicture() {
    let img = document.getElementById("dog-img");
    console.log(img.src);
    if(img.classList.contains("happy")) {
      img.src = "sad.jpeg"
      img.classList.remove("happy");
    } else {
      img.classList.add("happy");
      img.src = "happy.jpeg";
    }
  }

  function removeListener() {
    document.getElementById("button-1").removeEventListener("click", changePicture);
  }

})();
