(function (){
var navopen = document.getElementById("opennav")
var navclose = document.getElementById("closenav")
var navbar = document.getElementById("navdiv")

navclose.style.display = "none";

navopen.onclick = function() {
  navbar.style.display = "block";
  navopen.style.display = "none";
  navclose.style.display = "none";
}

// navclose.onclick = function() {
//   navbar.style.display = "none";
//   navclose.style.display = "none"
//   navopen.style.display = "block";
// }

navbar.onclick = function () {
  navbar.style.display = "none";
  navopen.style.display = "block";
}


})();
