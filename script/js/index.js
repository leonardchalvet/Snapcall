$(window).on('load', function() {


	setTimeout(function(){ 
		$('#section-cover').addClass('ready');

		/* SECTION LOGO */
		$('#section-logos').addClass('ready');
		sectionLogosCaroussel(
			'#section-logos', 
			'.container-el .el', 
			2000
		);

	}, 100)
	

	setTimeout(function(){ 

		var animation = bodymovin.loadAnimation({
		  container: document.getElementById('cover-anim'),
		  renderer: 'svg',
		  loop: true,
		  autoplay: true,
		  path: 'bodymovin/home/section-cover/data.json'
		})

	}, 750);

	setTimeout(function(){ 
		$('#section-logos').addClass('ready');
	}, 1000);


	

	/* SECTION LOGO */
	function sectionLogosCaroussel(Section, El, Delay){
		
		var El = Section + ' ' + El;
		var Img = El + ":nth-child(1) img";

		var numberEl = document.querySelectorAll(El).length;
		var countEl = 1;

		var numberImg = document.querySelectorAll(Img).length;
		var countImg = 1;

		function prg(){

			document.querySelector(El).classList.remove('active');
			

			function selectEl(){
				var sEl = El + ':nth-child(' + countEl + ')';
				document.querySelector(sEl).classList.add('active');
			}
			function selectImg(){
				var sImg = El + ':nth-child(' + countEl + ')' + ' ' + 'img';
				var sImgNew = El + ':nth-child(' + countEl + ')' + ' ' + 'img:nth-child(' + countImg + ')';

				[].forEach.call(document.querySelectorAll(sImg), function(el) {
				  el.classList.remove('active');
				});
				document.querySelector(sImgNew).classList.add('active');
			}
			
			if (countEl >= numberEl) {
				countEl = 1;
			} else {
				countEl++;
			}

			if (countImg >= numberImg) {
				countImg = 1;
			} else {
				countImg ++;
			}

			selectImg();
			selectEl();

			clearInterval(interval);
			interval = setInterval(function() {
		      prg();
		    }, Delay);

		}

		function init(){
			$(El + ':nth-child(1) img:nth-child(1)').addClass('active');
			$(El + ':nth-child(2) img:nth-child(2)').addClass('active');
			$(El + ':nth-child(3) img:nth-child(3)').addClass('active');
			$(El + ':nth-child(4) img:nth-child(4)').addClass('active');
		};

		init();

		var interval = setInterval(function() {
	    	prg();
	    }, Delay);

	}
		

})