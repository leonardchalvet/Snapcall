$(window).on('load', function() {

	
	function sectionModulesHoverBtn(){
		$('.cm-button-style1').each(function() {

			var width = $(this).find('.btn-text').width();
			var margin = $(this).find('.container-btn-arrow').css('margin-left');
			var calcTranslate = (width + parseInt(margin));
			$(this).find('.container-btn-arrow').css({
			  '-webkit-transform' : 'translateX(-' + calcTranslate + 'px)',
			  '-moz-transform'    : 'translateX(-' + calcTranslate + 'px)',
			  '-ms-transform'     : 'translateX(-' + calcTranslate + 'px)',
			  '-o-transform'      : 'translateX(-' + calcTranslate + 'px)',
			  'transform'         : 'translateX(-' + calcTranslate + 'px)'
			});
		})
		
	};

	setTimeout(function(){ sectionModulesHoverBtn(); }, 50);


	$window = $(window);
	function animScroll() {
		var windowHeight = $window.height() / 1.5;
	    $('.sectionAnim_container').each(function() {
	        if ($window.scrollTop() >= $(this).offset().top - windowHeight + (windowHeight/4)) {
            	if (!$(this).hasClass('reach')) {
	                $(this).addClass('reach');
	            }
	        }
	    });
	};
	$window.scroll(function() {
	    animScroll();
	});
	animScroll();


	/* CM SECTION QUOTE */

	function sectionQuotesCarouselQuotes(Delay, Section, El, Nav){
		
		El = Section + ' ' + El;
		Nav = Section + ' ' + Nav;

		var valDelay = 0;
		var numberEl = $(El).length;
		var countEl = 1;
		
		var drtc;

		function prg(drtc){

			if (drtc === 'next') {
				countEl++;
			} else if (drtc === 'prev') {
				countEl--;
			};

			if (countEl <= numberEl && countEl >= 1) {


				$(El + '.anim-show').removeClass('anim-show').addClass('anim-hide-top');
				setTimeout(function(){ 
					$(El + '.anim-hide-top').removeClass('anim-hide-top displayBlock').addClass('anim-hide-bottom');
					$(El + ':nth-child('+countEl+')').addClass('displayBlock').outerWidth();
					$(El + ':nth-child('+countEl+')').removeClass('anim-hide-bottom').addClass('anim-show');

				}, 750);

				clearInterval(interval);

				interval = setInterval(function() {

			      	//prg('next');

			    }, valDelay);

			} else if (countEl < 1) {
				countEl = numberEl;
				prg();
			} else {
				countEl = 1;
				prg();
			};
			
		};

		function init(){	    
			$(El + ':nth-child(1)').addClass('displayBlock anim-show');
			$(El + ':nth-child(2)').addClass('anim-hide-bottom');
			$(El + ':nth-child(3)').addClass('anim-hide-bottom');
		};

		$(Nav + ':nth-child(2)').click(function(){
			clearInterval(interval);
			prg('next');
		})
		$(Nav + ':nth-child(1)').click(function(){
			clearInterval(interval);
			prg('prev');
		})

		init();

		var interval = setInterval(function() {
	    	prg('next');
	    }, valDelay);

	    valDelay = Delay;

	};

	if ( $( ".cm-section-quotes" ).length ) {

		$('.cm-section-quotes').each(function(i) {

			if ($(this).data('carousel') === "on") {
		  	
			  	let allClassQuotes = $(this).attr('class').split(' ');
			  	let goodClass = '';

			  	for(let n = 0 ; n < allClassQuotes.length ; n++ ) {
			  		if(allClassQuotes[n].indexOf('quotes') > -1) {
			  			goodClass += '.' + allClassQuotes[n];
				  	}
			  	}

			  	sectionQuotesCarouselQuotes(
					7000,
					goodClass,  
					".container-quotes .quote",
					".container-nav .nav"
				);

			} else {
				$(this).find('.quote').addClass('displayBlock anim-show');
			}

		});
	}

	/* END CM SECTION QUOTE */



    $window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() >= 1 ) {
	        $('#header-desktop').addClass('scroll');
	        $('#header-mobile').addClass('scroll');
	    } else {
	    	$('#header-desktop').removeClass('scroll');
	    	$('#header-mobile').removeClass('scroll');
	    };
	});

	$('#header-desktop .li-dropdown').click(function(){
		if ($(this).hasClass('show')) {
			$('#header-desktop .li-dropdown').removeClass('show');
			setTimeout(function() {
				$('#header-desktop .li-dropdown .dropdown').removeClass('displayBlock');
			}, 250);
		} else {
			$('#header-desktop .li-dropdown').removeClass('show');
			$('#header-desktop .li-dropdown .dropdown').removeClass('displayBlock');
			
			$(this).find('.dropdown').addClass('displayBlock').outerWidth();
			$(this).addClass('show');
		}
	})

	$('main').click(function(){
		$('#header-desktop .li-dropdown').removeClass('show');
		$('#header-desktop .li-dropdown .dropdown').removeClass('displayBlock');
	})


	$('#header-mobile .head .wrapper .container-action').click(function(){
		$('#header-mobile').toggleClass('open');
		$('body').toggleClass('block');
	})

	$('#header-mobile .container-link .wrapper .list-link .link').click(function(){
		$('#header-mobile .container-link .wrapper .list-link .link').removeClass('active');
		$(this).addClass('active');
	})

	
})