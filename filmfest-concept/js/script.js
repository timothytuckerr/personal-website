$(document).ready(function() {
  $('#main').fadeIn(1500);
  // randomEffect();
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(window).scroll(function() {
	parallax();
})

function parallax() {
	var wScroll = $(window).scrollTop();
	$('.down-indicator').css('opacity', (100 - (wScroll * 0.5)) + '%');
	$('.parallax-bg').css('background-position', 'center ' + (10 + (wScroll * 0.05)) + 'em');
	$('.parallax-bg-main').css('background-position', 'center ' + (10 - (wScroll * 0.0002)) + 'em');
}

/* animation: bobble 5s infinite (delay) alternate; */
function randomEffect() {
  thumbnailArray = $('.thumbnail');
  thumbnailArray.each(function(index) {
    var scale = Math.floor(Math.random() * Math.floor(2000));
    $(this).css('animation', 'bobble 5s infinite ' + scale + 'ms alternate');
  })
}
