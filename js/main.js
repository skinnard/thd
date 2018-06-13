

$(document).ready(function() {

// SPINNER GIF FUNCTION
// $('#loading').hide();

//*****************************************************
//Open menu when hamburger or menu title is clicked
//*****************************************************

$(".nav-wrapper").on('click', function(){
  $(".hamburger").toggleClass('is-active');
  $("#nav-list").fadeToggle(400);
});

//*****************************************************
// AUDIO PLAYER
//*****************************************************

var audio;

//Hide paude button
$('#pause').hide();

// Initialize Audio
initAudio($('#playlist li:first-child'));

// Initilizer function
function initAudio(element){
  var title = element.attr('title');
  var song = element.attr('song');

  // Create audio object
  audio = new Audio('media/' + song);

  if(!audio.currentTime) {
    $('#duration').html('0.00');
  }

  $('#audio-player .title').text(title);

  $('#playlist li').removeClass('active');
  element.addClass('active');

}

//Play button
$('#play').click(function(){
  audio.play();
  $('#play').hide();
  $('#pause').show();
  $('#duration').fadeIn(400);
  showDuration();
});

// Pause button
$('#pause').click(function(){
  audio.pause();
  $('#pause').hide();
  $('#play').show();
});

// Stop button
$('#stop').click(function(){
  audio.pause();
  audio.currentTime = 0;
  $('#pause').hide();
  $('#play').show();
  $('#duration').fadeOut();
});

// Next button
$('#next').click(function(){
  audio.pause();
  var next = $('#playlist li.active').next();
  if(next.length === 0) {
    next = $('#playlist li:first-child');
  }
  initAudio(next);
  audio.play();
  showDuration();
});

// Next button
$('#prev').click(function(){
  audio.pause();
  var prev = $('#playlist li.active').prev();
  if(prev.length === 0) {
    prev = $('#playlist li:last-child');
  }
  initAudio(prev);
  audio.play();
  showDuration();
});

// TIme duration
function showDuration() {
  $(audio).bind('timeupdate', function(){
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    // Add 0 if tless than 10
    if (s > 10) {
      s = '0' + s;
    }
    $('#duration').html(m + '.' + s);
    var value = 0;
    if (audio.currentTime > 0) {
      value = Math.floor((100 / audio.duration) * audio.currentTime);
    }
    $('#progress').css('width', value+'%');
  });
}

// Volume Controls
$('#volume').change(function(){
  audio.volume = parseFloat(this.value / 10);
});

// Add active state to navigation
var selector = '#nav-list li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});


/* Fancy Box */

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

// Parallax Initialize
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

}); //END OF DOC READY
