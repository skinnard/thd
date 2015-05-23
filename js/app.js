
$(document).ready(function() {


//Open menu when hamburger or menu title is clicked
$( "#nav-title" ).click(function() {
  $( ".si-icon-hamburger-cross" ).click();
});

$(".si-icon-hamburger-cross").click(function() {
  $("#nav-list").toggle();
});




}); //END OF DOC READY
