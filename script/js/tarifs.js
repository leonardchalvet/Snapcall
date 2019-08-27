$(window).on('load', function() {

	setTimeout(function(){ 
		$('#section-cover').addClass('ready');
		$('#section-table').addClass('reach');

	}, 100);

	$('#section-faq .container-questions .question').click(function(){
		if ($(this).hasClass('open')) {
			$('#section-faq .container-questions .question').removeClass('open');
		}else {
			$('#section-faq .container-questions .question').removeClass('open');
			$(this).addClass('open');
		}
	})
	
	$('#section-table .container-action .container-date').click(function(){
		
		if($(this).hasClass('left')) {
			$(this).removeClass('left');
			$(this).addClass('right');

			$('#section-table .container-table .head .cell .price').each(function(i){
				let price = $(this).attr('data-value');
				let nbU = $(this).attr('data-price-' + price + '-month');
				let nbD = $(this).attr('data-price-' + price + '-year');
				
				$(this).text(nbD);
			})

			$('#section-table .container-table .head .cell p').removeClass('month');
			$('#section-table .container-table .head .cell p').addClass('year');
		}
		else if($(this).hasClass('right')) {
			$(this).removeClass('right');
			$(this).addClass('left');

			$('#section-table .container-table .head .cell .price').each(function(i){
				let price = $(this).attr('data-value');
				let nbU = $(this).attr('data-price-' + price + '-month');
				let nbD = $(this).attr('data-price-' + price + '-year');

				$(this).text(nbU);
			})

			$('#section-table .container-table .head .cell p').removeClass('year');
			$('#section-table .container-table .head .cell p').addClass('month');
		}
	})
	
	setTimeout(function(){ 
		$('#section-table .container-action .container-date').click();
	}, 1000);

	$('#section-table .container-action .container-money .dropdown .money').click(function(){
		
		if($('#section-table .container-action .container-date').hasClass('left')) {
			$('#section-table .container-action .container-date').click();
		}

		$('#section-table .container-table .head .cell .price').attr('data-value', $(this).attr('data-price'));

		$('#section-table .container-table .head .cell p').removeClass('month');
		$('#section-table .container-table .head .cell p').addClass('year');

		$('#section-table .container-table .head .cell .price').each(function(i){
			let price = $(this).attr('data-value');
			let nb = $(this).attr('data-price-' + price + '-year');
			$(this).text(nb);
		})

		$('#section-table .container-action .container-money').removeClass('open');

		$('#section-table .container-action .container-money > .money span').html($(this).html());
	})

	$('#section-table .container-action .container-money >.money').mouseenter(function(){
		$(this).parent().addClass('open');
	})
	$('#section-table .container-action .container-money .dropdown').mouseleave(function(){
		$(this).parent().removeClass('open');
	})
	$('#section-table').mouseleave(function(){
		$('#section-table .container-action .container-money').removeClass('open');
	})
	$('body').on('click', function(event) { 
	    if (!$(event.target).closest('#section-table .container-action .container-money').length) {
	    	if($('#section-table .container-action .container-money').hasClass('open'))
	    		$('#section-table .container-action .container-money').removeClass('open');
	    }
	})
})