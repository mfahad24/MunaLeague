$(document).ready(function() {
  $("#opennav").click(function(){
    $("#navdiv").animate({width:'toggle'},350);
    // $("#navdiv").fadeIn();
  });

  $("#navdiv").click(function(){
  $("#navdiv").animate({width:'toggle'},350);
  });

  $('a').click(function(e) {
    $('.navselect').text($(this).attr('.navselect'));
    history.pushState({}, '', $(this).attr('href'));
    e.preventDefault();
});


});

// (function (){
// var navopen = document.getElementById("opennav")
// var navclose = document.getElementById("closenav")
// var navbar = document.getElementById("navdiv")
//
// // navclose.style.display = "none";
//
// navopen.onclick = function() {
//   navbar.style.display = "block";
//   // navopen.style.display = "block";
//   // navclose.style.display = "block";
// }
//
// // navclose.onclick = function() {
// //   navbar.style.display = "none";
// //   navclose.style.display = "none"
// //   navopen.style.display = "block";
// // }
//
// navbar.onclick = function () {
//   navbar.style.display = "none";
//   // navopen.style.display = "block";
//   // navclose.style.display = "none"
// }
//
//
// })();
