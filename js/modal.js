// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("mycart");
var span = document.getElementsByClassName("close")[0];
let myCartModal = document.getElementById("myCartModal");
let cartCount = document.getElementById("cartCount");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}