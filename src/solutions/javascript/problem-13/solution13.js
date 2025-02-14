function addEventListenerToButton() {
  let a = document.getElementById("clickMe");
  a.addEventListener("click", function () {
    alert("Button CLicked");
  });
}
addEventListenerToButton();
