$(window).on('load', function() {

	setTimeout(function(){ 
		$('#section-cover').addClass('ready');
	}, 100);

	/* SECTION QUOTES */
	function sectionCarousel(Delay, Section, Pp, Hp, Nav){

		Pp = Section + ' ' + Pp;
		Hp = Section + ' ' + Hp;
		Nav = Section + ' ' + Nav;

		let valDelay = 0;
		let numberEl = $(Pp).length;
		let countEl = 1;
		
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

				$('.clr').removeClass('color-1 color-2 color-3 color-4 color-5');
				$(Nav).removeClass('color-1 color-2 color-3 color-4 color-5');

				$(elPp + '.anim-show').removeClass('anim-show').addClass('anim-hide-top');
				setTimeout(function(){ 
					$(elPp + '.anim-hide-top').removeClass('anim-hide-top displayBlock').addClass('anim-hide-bottom');
					$(elPp + ':nth-child('+countEl+')').addClass('displayBlock').outerWidth();
					$(elPp + ':nth-child('+countEl+')').removeClass('anim-hide-bottom').addClass('anim-show');
				}, 750);

				$(elHp + '.anim-show').removeClass('anim-show').addClass('anim-hide-top');
				setTimeout(function(){ 
					$(elHp + '.anim-hide-top').removeClass('anim-hide-top displayBlock').addClass('anim-hide-bottom');
					$(elHp + ':nth-child('+countEl+')').addClass('displayBlock').outerWidth();
					$(elHp + ':nth-child('+countEl+')').removeClass('anim-hide-bottom').addClass('anim-show');
						
					$('.clr').addClass('color-' + countEl);
				    $(Nav).addClass('color-' + countEl);
				    state = true;

				}, 750);

				clearInterval(interval);
				interval = setInterval(function() {
			      prg('next');
			    }, valDelay);

			} else if (countEl < 1) {
				countEl = numberEl;
				prg(drtc);
			} else {
				countEl = 0;
				prg(drtc);
			};
			
		};

		function init(){
			$(Pp + ':nth-child(1)').addClass('displayBlock anim-show');
			$(Pp + ':not(:nth-child(2))').addClass('anim-hide-bottom');
			$(Hp + ':nth-child(1)').addClass('displayBlock anim-show');
			$(Hp + ':not(:nth-child(2))').addClass('anim-hide-bottom');
		};

		$(Nav + ' .arrow:nth-child(2)').click(function(){
			clearInterval(interval);
			prg('next');
		})
		$(Nav + ' .arrow:nth-child(1)').click(function(){
			clearInterval(interval);
			prg('prev');
		})

		init();

		var interval = setInterval(function() {
	    	prg('next');
	    }, valDelay);

	    valDelay = Delay;

	};

	if ( $( "#section-carrousel" ).length ) {
		sectionCarousel(
			5000,
			'#section-carrousel', 
			".container-pp .container-el .el",
			".container-text .container-el .el",
			".container-arrow"
		);
	}

})