<html>
	<head>

		<title>help FAQ</title>

		<meta name="description" content="" />

		<meta http-equiv="content-type" content="text/html; charset=utf8" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link rel="stylesheet" type="text/css" href="style/css/helpFAQ.css">

		<link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png">
		<link rel="manifest" href="img/favicon/site.webmanifest">
		<link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg" color="#4cd964">
		<meta name="msapplication-TileColor" content="#2d89ef">
		<meta name="theme-color" content="#ffffff">

		<script type="text/javascript" src="script/minify/jQuery.3.3.1-min.js"></script>

	</head>

	<body>

		<?php include('common-header.php') ?>

		<main>

			<section id="section-categorie">
				<div class="wrapper">
					<div class="container-title"></div>
					<div class="container-categorie">
						<div class="path">
							<a href="helps">Help Center</a>
							<img src="img/help/arrow.svg">
							<a></a>
						</div>
						<div class="container-el"></div>
					</div>
				</div>
			</section>

		</main>

		<?php include('common-footer.php') ?>

		<script type="text/javascript" src="script/minify/helpFAQ-min.js"></script>

		<script type="text/javascript" src="script/minify/common-min.js"></script>
	</body>
</html>

<script type="text/javascript">

$(window).on('load', function() {

	let urlParam = function(name){
	    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    if (results==null){
	       return null;
	    }
	    else{
	       return results[1] || 0;
	    }
	}

	let id  = urlParam('id');
	let pos = urlParam('pos');

	let url = $(location).attr("href").split('?')[0];
	history.pushState(null, null, url);

	$.getJSON("https://snapcall.zendesk.com/api/v2/help_center/en-us/categories/" + id + ".json", function(result){
		$.each(result, function(i, f){

			let text = '<div class="icn">' +
							'<img src="img/help/icn/icn-' + pos + '.svg">' +
						'</div>' +
						'<h1>' + f['name'] + '</h1>';

			$('#section-categorie .container-title').append(text);
			$('#section-categorie .container-categorie .path a:last-child').append(f['name']);
		});
	});

	$.getJSON("https://snapcall.zendesk.com/api/v2/help_center/en-us/categories/" + id + "/sections.json", function(result){
		$.each(result, function(i, f){
			if(i == 'sections'){
				$.each(f, function(k, t){

					let text = '<div class="el">' +
								  '<h4>' + f[k]['name'] +
									'<img src="img/common/arrow-3.svg">' +
								  '</h4>' +
								  '<ul>';

					$.getJSON("https://snapcall.zendesk.com/api/v2/help_center/en-us/sections/" + f[k]['id'] + "/articles.json", function(question){
						$.each(question, function(j, q){
							if(j == 'articles'){
								$.each(q, function(l, rq){
									text += '<li><a href=articles?idC=' + id + '&idS=' + f[k]['id'] + '&idA=' + q[l]['id'] + '&pos=' + pos + '>' + q[l]['name'] + '</a></li>';
								});
							}
						});
					});

					setTimeout(function() {
						text += '</ul></div>';
						$('#section-categorie .container-categorie .container-el').append(text);
					}, 500);

				});
			}

		});
	});

});

</script>
