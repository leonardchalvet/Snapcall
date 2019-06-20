$(window).on('load', function() {
	$(document).on("click","#section-categorie .container-categorie .container-el .el",function() {
		$('#section-categorie .container-categorie .container-el .el').removeClass('open');
		$(this).addClass('open');
	})
});