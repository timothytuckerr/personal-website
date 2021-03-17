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
  var topGallery = $('#video-gallery').offset().top;
  console.log(topGallery);
	$('.down-indicator').css('opacity', (100 - (wScroll)) + '%');
	$('.parallax-bg').css('background-position', 'center ' + (5 + (wScroll * 0.05)) + 'em');
  if (wScroll >= topGallery) {
    $('.parallax-bg-gallery').css('background-position', 'center ' + (5 + ((wScroll - topGallery) * 0.08)) + 'em');
  }
}

/* animation: bobble 5s infinite (delay) alternate; */
function randomEffect() {
  thumbnailArray = $('.thumbnail');
  thumbnailArray.each(function(index) {
    var scale = Math.floor(Math.random() * Math.floor(2000));
    $(this).css('animation', 'bobble 5s infinite ' + scale + 'ms alternate');
  })
}
