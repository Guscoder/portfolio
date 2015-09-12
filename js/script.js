$(document).ready(function(){

// Page scroll function

$(window).scroll(function(){
	if($('.navbar').offset().top > 50){
		$('.navbar-fixed-top').addClass('top-nav-collapse')
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse')
	}
});


$(function(){
	$('.page-scroll a').on('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr("href")).offset().top
		}, 1500,'easeInOutExpo');
		event.preventDefault();
	});


// Sorting Projects when user clicks project category

$(function(){
	$('.project-type a').on('click', function(){

		$('.projectGroup2').fadeIn(400);

		// Current class assigniment
		$('.project-type a.current').removeClass('current');
		$(this).parent().addClass('current');
		
		// Get & filter link text
		var category = $(this).text().toLowerCase().replace(' ','-');
		
		// Remove hidden class if 'all-projects' is selected
		if(category == 'all-projects'){
			$('.project-group:hidden').fadeIn('slow').removeClass('hidden');
			$('.projectGroup2').fadeIn('slow');
			$('#showProjectsArrow').hide();

		} else {
			$('.project-group').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}

		// Stop link behaviour
		return false;
	});
});
});

// Project display function

$(function(){
	$('#showProjectsArrow').on('click', function(){
		$('.projectGroup2').fadeIn(400);
		$('#showProjectsArrow').hide();
		});
	});


// Initialize tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

});