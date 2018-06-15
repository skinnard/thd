

$(document).ready(function() {

// SPINNER GIF FUNCTION
// $('#loading').hide();

//*****************************************************
//Open menu when hamburger or menu title is clicked
//*****************************************************

var windowWidth = $( window ).width();
console.log(windowWidth);

if (windowWidth > 1200) {
  console.log('greater');
  $(".nav-wrapper").on('click', function(){
    $(".hamburger").toggleClass('is-active');
    $("#nav-list").fadeToggle(400);
  });
} else {
  console.log('less');
  $(".nav-wrapper").on('click', function(){
    $(".hamburger").toggleClass('is-active');
    $("#nav-list").slideToggle(400);
  });
}

//*****************************************************
// Fancy Box 
//*****************************************************

$("a#single_image").fancybox();

/* Using custom settings */

$("a#inline").fancybox({
  'hideOnContentClick': true
});

/* Apply fancybox to multiple items */

$("a.group").fancybox({
  'transitionIn'	:	'elastic',
  'transitionOut'	:	'elastic',
  'speedIn'		:	600,
  'speedOut'		:	200,
  'overlayShow'	:	false
});

$("a.grouped_elements").fancybox();

//*****************************************************
// Parallax
//*****************************************************
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


}); //END OF DOC READY
