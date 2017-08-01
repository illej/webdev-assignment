/*  JQUERY */
var elementPosition = $('.main-nav').offset();

$(window).scroll(function () {
	if ($(window).scrollTop() > elementPosition.top) {
		$('.main-nav').css('position', 'fixed').css('top', '0');
		$('.main-content').css('margin-top', $('.main-nav').height());
	} else {
		$('.main-nav').css('position', 'static');
		$('.main-content').css('margin-top', '0');
	}
});

$('.wrapper').css('margin-bottom', $('#footer-ul').outerHeight());

/* FlexSlida */
// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
	animation: "slide"
  });
});