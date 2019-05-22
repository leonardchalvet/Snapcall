$(window).on('load', function() {


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

			      	prg('next');

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

	if ( $( "#section-quotes" ).length ) {
		sectionQuotesCarouselQuotes(
			7000,
			'#section-quotes',  
			".container-quotes .quote",
			".container-nav .nav"
		);
	}


	/* SECTION QUOTES */
	
	if ( $( "#section-carousel" ).length ) {
		sectionCarousel(
			5000,
			'#section-carousel',  
			".container-steps .step", 
			".container-img .container-el .el",
			".container-text .container-el .el"
		);
	}

	/* SECTION QUOTES */
	function sectionCarousel(Delay, Section, El, Pp, Hp){

		El = Section + ' ' + El;
		Pp = Section + ' ' + Pp;
		Hp = Section + ' ' + Hp;

		let valDelay = 0;
		let numberEl = $(El).length;
		let countEl;
		
		let drtc;

		let state;

		function prg(drtc){

			state = false;

			let elPp = Pp;
			let elHp = Hp;

			if (drtc === 'next') {
				countEl++;
			} else if (drtc === 'prev') {
				countEl--;
			};

			if (countEl <= numberEl && countEl >= 1) {

				$(El + '.active').removeClass('active');
				$(El).removeClass('prev next next-first');

				$(El + ':nth-child('+countEl+')').addClass('active');
				

				if ($(El + ':nth-child(1)').hasClass('active')) {
					$(El + ':nth-child('+countEl+')').nextAll().addClass('next-first');
				} else {
					$(El + ':nth-child('+countEl+')').prevAll().addClass('prev');
					$(El + ':nth-child('+countEl+')').nextAll().addClass('next');
				}

				$(elPp + '.active').removeClass('active').addClass('hide').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
					    function(e) {

				    $(elPp + '.hide').removeClass('hide').addClass('wait');
				    
				});

				$(elHp + '.active').removeClass('active').addClass('hide').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
					    function(e) {

				    $(elHp + '.hide').removeClass('hide').addClass('wait');
				    state = true;

				});

				$('.' + $(El + '.active').data('el')).removeClass('wait').addClass('active');


				clearInterval(interval);
				interval = setInterval(function() {
			      prg('next');
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
			$(El + ':nth-child(1)').show().addClass('active');
			$(Pp + ':nth-child(2)').addClass('active');
			$(Pp + ':not(:nth-child(2))').addClass('wait');
			$(Hp + ':nth-child(2)').addClass('active');
			$(Hp + ':not(:nth-child(2))').addClass('wait');
		};

		init();

		var interval = setInterval(function() {
	    	prg('next');
	    }, valDelay);

	    valDelay = Delay;

	};


})

