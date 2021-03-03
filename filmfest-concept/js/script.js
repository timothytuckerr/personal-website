$(document).ready(function() {
  $('#main').fadeIn(1500);
})

$(window).scroll(function() {
	parallax();
})

function parallax() {
	var wScroll = $(window).scrollTop();
	$('.down-indicator').css('opacity', (100 - (wScroll * 0.4)) + '%');
	$('.parallax-bg').css('background-position', 'center ' + (10 + (wScroll * 0.05)) + 'em');
	$('.parallax-bg-main').css('background-position', 'center ' + (10 - (wScroll * 0.002)) + 'em');
}
