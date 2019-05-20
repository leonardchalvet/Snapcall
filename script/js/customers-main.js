$(window).on('load', function() {

	setTimeout(function(){ 

		var animation = bodymovin.loadAnimation({
		  container: document.getElementById('cover-anim'),
		  renderer: 'svg',
		  loop: false,
		  autoplay: true,
		  path: 'bodymovin/customers-main/data.json'
		})

	}, 750);
	

	setTimeout(function(){ 
		$('#section-cover').addClass('ready');
	}, 100);



	function sectionQuotesCarousselQuotes(Delay, Section, El, Nav){
		
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

	sectionQuotesCarousselQuotes(
		7000,
		'.section-quotes-1',  
		".container-quotes .quote",
		".container-nav .nav"
	);

	sectionQuotesCarousselQuotes(
		7000,
		'.section-quotes-2',  
		".container-quotes .quote",
		".container-nav .nav"
	);
	


})