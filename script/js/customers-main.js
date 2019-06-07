$(window).on('load', function() {

	setTimeout(function(){ 

		var animation = bodymovin.loadAnimation({
		  container: document.getElementById('cover-anim'),
		  renderer: 'svg',
		  loop: true,
		  autoplay: true,
		  path: 'bodymovin/customers-main/data.json'
		})

	}, 750);
	

	setTimeout(function(){ 
		$('#section-cover').addClass('ready');
	}, 100);

})