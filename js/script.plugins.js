;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				Flaxslider
		------------------------------------------------ */

			if($('.main_slider').length){
				$('.main_slider').flexslider({
					animation: "fade",
					controlNav: true,
					pauseInvisible: false
				});
			}

        /* ------------------------------------------------
				End of Flaxslider
		------------------------------------------------ */

		/* ------------------------------------------------
				owlCarousel
		------------------------------------------------ */

			if($('.team_slider').length){

				$('.team_slider').owlCarousel({
					nav:true,
					center: true,
					margin: 30,
				    navText: [ '', '' ],
				    loop:true,
				    responsive:{
				        0:{
				            items:1
				        },
				        768:{
				            items:3
				        }
				    }
				})
			
			}

			if($('.reviews_slider').length){

				$('.reviews_slider').owlCarousel({
					nav:true,
				    loop:true,
				    navText: [ '', '' ],
				    items:1
				})
			
			}

        /* ------------------------------------------------
				End of owlCarousel
		------------------------------------------------ */

		/* ------------------------------------------------
				magnificPopup
		------------------------------------------------ */

			$('.video_play').magnificPopup({
				
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false

			});

        /* ------------------------------------------------
				End of magnificPopup
		------------------------------------------------ */

		/* ------------------------------------------------
				Instafeed
		------------------------------------------------ */

			if($('#instafeed').length){
				var userId = $('#instafeed').attr('data-userId');
				var feed = new Instafeed({
					// tagName: 'nature',
					get :  'user' , 
        			userId : +userId,
        			accessToken :  '2303923949.3a81a9f.4d6d1ad0ab314949b36d97477b43af23', 
					limit: 8,
					resolution: 'standard_resolution',
					template: '<div class="col-sm-3"><a class="instafeed_link" href="{{image}}" title="{{location}}"><img src="{{image}}" /></a></div>',
					after: function(){
									
						$('#instafeed').magnificPopup({
							delegate: '.instafeed_link',
							type: 'image',
							gallery: {
								enabled: true
							},
							zoom: {
								enabled: true,
								duration: 300 // don't foget to change the duration also in CSS
							}
							
						});

					}
				});

				feed.run();
			}

		/* ------------------------------------------------
				End of Instafeed
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
	    Parallax
		------------------------------------------------ */

			if($(".blackout[class*='bg'],.blackout2[class*='bg'],.video_img, .cstheme_parallax").length){

				$(".blackout[class*='bg'],.blackout2[class*='bg'],.video_img, .cstheme_parallax").each(function(){

					$(this).parallax("50%", 0.2);

				});

			}
		/* ------------------------------------------------
		    End Parallax
		------------------------------------------------ */

	});

})(jQuery);