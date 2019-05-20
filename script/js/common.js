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
	        if ($window.scrollTop() >= $(this).offset().top - windowHeight) {
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
	
})