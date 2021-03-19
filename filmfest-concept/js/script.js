var theaterContent = {};

$(document).ready(function() {
  $('#main').fadeIn(1500);
  // randomEffect();
  $.getJSON("js/theater-content.json", function(content) {
    saveContent(content);
  });
});

function saveContent(content) {
  theaterContent = content;
  console.log(theaterContent);
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(window).scroll(function() {
	parallax();
})

$(".video-box").hover(
  function() {
    var id = this.id;
    var imgSelector = "#" + id + " img";
    var videoSelector = "#" + id + " video";
    var imgHeight = $(imgSelector).height();
    var imgWidth = $(imgSelector).width();
    $(videoSelector).css('height', imgHeight + 'px');
    $(videoSelector).css('width', imgWidth + 'px');
    $(imgSelector).css('display', 'none');
    $(videoSelector).css('display', 'block');
  }, function() {
    var id = this.id;
    $("#" + id + " video").css('display', 'none');
    $("#" + id + " img").css('display', 'block');
  }
);

$(".video-box").click(function() {
  loadContent(this.id);
  openTheater();
});

$(".outer").click(function() {
  closeTheater();
})

function loadContent(contentID) {
  var filmContent = theaterContent[contentID];
  var aboutTitle = "About the creator";
  if (filmContent["multiple-creators"]) {
    aboutTitle += "s";
  }
  $(".theater.title").text(filmContent["title"]);
  $(".theater.creator").text(filmContent["creator"]);
  $(".theater.description").text(filmContent["description"]);
  $(".theater.about").text(aboutTitle);
  $(".theater.bio").text(filmContent["bio"]);
}

function openTheater() {
  document.getElementById("theater").style.display = "block";
}

function closeTheater() {
  document.getElementById("theater").style.display = "none";
}


function parallax() {
	var wScroll = $(window).scrollTop();
  var topGallery = $('#video-gallery').offset().top;
	$('.down-indicator').css('opacity', (100 - (wScroll)) + '%');
	$('.parallax-bg').css('background-position', 'center ' + (5 + (wScroll * 0.05)) + 'em');
  if (wScroll >= topGallery) {
    $('.parallax-bg-gallery').css('background-position', 'center ' + (5 + ((wScroll - topGallery) * 0.1)) + 'em');
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
