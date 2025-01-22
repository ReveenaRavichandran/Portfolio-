 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

	// JavaScript to toggle sections and update button styles

	document.getElementById('btn-education').addEventListener('click', function () {
		// Show education section and hide other sections
		document.getElementById('education-tab').classList.add('show', 'active');
		document.getElementById('experience-tab').classList.remove('show', 'active');
		document.getElementById('certifications-tab').classList.remove('show', 'active');

		// Update button styles
		this.classList.add('active');
		document.getElementById('btn-experience').classList.remove('active');
		document.getElementById('btn-certifications').classList.remove('active');
	});

	document.getElementById('btn-experience').addEventListener('click', function () {
		// Show experience section and hide other sections
		document.getElementById('experience-tab').classList.add('show', 'active');
		document.getElementById('education-tab').classList.remove('show', 'active');
		document.getElementById('certifications-tab').classList.remove('show', 'active');

		// Update button styles
		this.classList.add('active');
		document.getElementById('btn-education').classList.remove('active');
		document.getElementById('btn-certifications').classList.remove('active');
	});

	document.getElementById('btn-certifications').addEventListener('click', function () {
		// Show certifications section and hide other sections
		document.getElementById('certifications-tab').classList.add('show', 'active');
		document.getElementById('education-tab').classList.remove('show', 'active');
		document.getElementById('experience-tab').classList.remove('show', 'active');

		// Update button styles
		this.classList.add('active');
		document.getElementById('btn-education').classList.remove('active');
		document.getElementById('btn-experience').classList.remove('active');
	});


	// Dynamic scrolling logo carousel
	document.addEventListener("DOMContentLoaded", () => {
		const carousel = document.querySelector(".logo-carousel");

		if (carousel) {
			const logos = carousel.innerHTML; // Duplicate content for seamless scroll
			carousel.innerHTML += logos;

			let scrollAmount = 0;
			const scrollSpeed = 2; // Adjust this value for scrolling speed (higher = faster)

			function scrollLogos() {
				scrollAmount += scrollSpeed;
				carousel.scrollLeft = scrollAmount;

				// Reset scroll position for seamless loop
				if (scrollAmount >= carousel.scrollWidth / 2) {
					scrollAmount = 0;
				}

				requestAnimationFrame(scrollLogos);
			}

			// Start the scrolling animation
			scrollLogos();
		}
	});


	document.addEventListener('DOMContentLoaded', function () {
		// Loop through each number element
		document.querySelectorAll('.number').forEach(function (element) {
			var number = element.getAttribute('data-number');
			var displayValue = parseInt(number, 10);

			// Check if number has a '+' symbol
			if (number.includes('+')) {
				// Show the number followed by '+'
				element.innerHTML = displayValue + '+';
			} else if (number === '3') { // For the "★★★" symbol
				element.innerHTML = '★★★';
			} else {
				// Display just the number (for any other cases)
				element.innerHTML = displayValue;
			}
		});
	});

	$(document).ready(function () {
		// Close the menu after a link is clicked
		$(".navbar-nav .nav-link").on("click", function () {
			$(".navbar-collapse").collapse('hide');
		});
	});

})(jQuery);

