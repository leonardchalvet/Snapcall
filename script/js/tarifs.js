$(window).on('load', function() {

	setTimeout(function(){ 
		$('#section-cover').addClass('ready');
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
				let nbU = parseInt($(this).attr('data-price-' + price + '-month'));
				let nbD = parseInt($(this).attr('data-price-' + price + '-year'));
				let sign = '';
				if(price == 'eur') { sign = '€'; }
				else if(price == 'usd') { sign = '$'; }

				countDown($(this), nbU, nbD, sign);
			})

			$('#section-table .container-table .head .cell p').removeClass('month');
			$('#section-table .container-table .head .cell p').addClass('year');
		}
		else if($(this).hasClass('right')) {
			$(this).removeClass('right');
			$(this).addClass('left');

			$('#section-table .container-table .head .cell .price').each(function(i){
				let price = $(this).attr('data-value');
				let nbU = parseInt($(this).attr('data-price-' + price + '-month'));
				let nbD = parseInt($(this).attr('data-price-' + price + '-year'));
				let sign = '';
				if(price == 'eur') { sign = '€'; }
				else if(price == 'usd') { sign = '$'; }

				countUp($(this), nbD, nbU, sign);
			})

			$('#section-table .container-table .head .cell p').removeClass('year');
			$('#section-table .container-table .head .cell p').addClass('month');
		}
	})

	$('#section-table .container-action .container-money .dropdown .money').click(function(){
		$('#section-table .container-table .head .cell .price').attr('data-value', $(this).attr('data-price'));

		$('#section-table .container-action .container-date').removeClass('right');
		$('#section-table .container-action .container-date').addClass('left');
		$('#section-table .container-table .head .cell p').removeClass('year');
		$('#section-table .container-table .head .cell p').addClass('month');

		$('#section-table .container-table .head .cell .price').each(function(i){
			let price = $(this).attr('data-value');
			let nb = $(this).attr('data-price-' + price);
			$(this).text(nb);
		})

		$('#section-table .container-action .container-money').removeClass('open');
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

	let countUp = function(el, start, value, sign) {
		let localStart = start;
		setInterval(function() {
			if (localStart < value) {
				localStart+=10000;
				if (localStart > value) localStart = value;
				el.text(localStart + '' + sign);
			}
		}, 0);
	}

	let countDown = function(el, start, value, sign) {
		let localStart = start;
		setInterval(function() {
			if (localStart > value) {
				localStart-=10000;
				if (localStart < value) localStart = value;
				el.text(localStart + '' + sign);
			}
		}, 0);
	}
})