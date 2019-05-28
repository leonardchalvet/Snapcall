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
		let countEl = 2;
		
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

				$('.clr').removeClass('color-1 color-2 color-3 color-4');
				$(Nav).removeClass('color-1 color-2 color-3 color-4');

				$(elPp + '.active').removeClass('active').addClass('hide').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
					    function(e) {

				    $(elPp + '.hide').removeClass('hide').addClass('wait');

				    $(elPp + ':nth-child(' + countEl + ')').removeClass('wait').addClass('active');
				    
				});

				$(elHp + '.active').removeClass('active').addClass('hide').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
					    function(e) {

				    $(elHp + '.hide').removeClass('hide').addClass('wait');
				    
				    $(elHp + ':nth-child(' + countEl + ')').removeClass('wait').addClass('active');

				    $('.clr').addClass('color-' + countEl);
				    $(Nav).addClass('color-' + countEl);
				    state = true;

				});

				clearInterval(interval);
				interval = setInterval(function() {
			      prg('next');
			    }, valDelay);

			} else if (countEl < 1) {
				countEl = numberEl;
				prg(drtc);
			} else {
				countEl = 1;
				prg(drtc);
			};
			
		};

		function init(){
			$(Pp + ':nth-child(2)').addClass('active');
			$(Pp + ':not(:nth-child(2))').addClass('wait');
			$(Hp + ':nth-child(2)').addClass('active');
			$(Hp + ':not(:nth-child(2))').addClass('wait');
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