$(window).on('load', function() {
	if (window.matchMedia("(max-width: 700px)").matches) {
		$('#section-categorie .container-categorie .container-el .el').click(function(){
			$('#section-categorie .container-categorie .container-el .el').removeClass('open');
			$(this).addClass('open');
		})
	}
});