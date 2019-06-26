<html>
	<head>

		<title>help FAQ</title>

		<meta name="description" content="" />

		<meta http-equiv="content-type" content="text/html; charset=utf8" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- <link rel="stylesheet" type="text/css" href="style/css/helpFAQ.css"> -->

		<link rel="stylesheet" type="text/css" href="style/css/helpFAQ-3.css">

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

			<!--
				<section id="section-categorie" class="article">
					<div class="wrapper">
						<div class="container-title"></div>
						<div class="container-categorie">
							<div class="path">
								<a href="helpFAQ-1.php">Help Center</a>
								<img src="img/help/arrow-2.svg">
								<a href="#"></a>
								<img src="img/help/arrow-2.svg">
								<a></a>
								<img src="img/help/arrow.svg">
								<a></a>
							</div>
							<div class="container-el">
								<div class="el">
									<h4>Others questions.</h4>
									<ul></ul>
								</div>
								<div class="container-text"></div>
							</div>
						</div>
					</div>
				</section>
			-->

			<section id="section-head">
				<div class="wrapper">
					<div class="container-title">

					</div>
					<div class="container-path">
						<a href="helps">Help Center</a>
						<img src="img/help/arrow-2.svg">
						<a href="#"></a>
						<img src="img/help/arrow-2.svg">
						<a></a>
						<img src="img/help/arrow.svg">
						<a></a>
					</div>
				</div>
			</section>

			<section id="section-post">
				<div class="wrapper">
					<div class="container-list">
						<h3>Others questions.</h3>
						<ul>

						</ul>
					</div>
					<div class="container-wysiwyg">

					</div>
				</div>
			</section>


		</main>

		<?php include('common-footer.php') ?>

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

	let idC  = urlParam('idC');
	let idS  = urlParam('idS');
	let idA  = urlParam('idA');
	let pos = urlParam('pos');

	let url = $(location).attr("href").split('?')[0];
	history.pushState(null, null, url);

	$.getJSON("https://snapcall.zendesk.com/api/v2/help_center/en-us/categories/" + idC + ".json", function(result){
		$.each(result, function(i, f){

			let text = '<div class="icn">' +
							'<img src="img/help/icn/icn-' + pos + '.svg">' +
						'</div>' +
						'<h1>' + f['name'] + '</h1>';

			$('#section-head .container-title').append(text);
			$('#section-head .container-path a:nth-child(3)').append(f['name']);
			$('#section-head .container-path a:nth-child(3)').attr('href', 'helpsSub?id=' + f['id'] + '&pos=' + pos);
		});
	});

	$.getJSON("https://snapcall.zendesk.com/api/v2/help_center/en-us/sections/" + idS + ".json", function(result){
		$.each(result, function(i, f){
			$('#section-head .container-path a:nth-child(5)').append(result[i]['name']);
		});
	});

	$.getJSON("https://snapcall.zendesk.com/api/v2/help_center/en-us/sections/" + idS + "/articles.json", function(result){
		$.each(result, function(i, f){
			if(i == 'articles'){
				$.each(f, function(j, t){

					let text = '<li><a href="articles?idC=' + idC + '&idS=' + idS + '&idA=' + f[j]['id'] + '&pos=' + pos + '">' + f[j]['name'] + '</a></li>';

					$('#section-post .container-list ul').append(text);
				});
			}
		});
	});

	$.getJSON("https://snapcall.zendesk.com/api/v2/help_center/en-us/articles/" + idA + ".json", function(result){
		$.each(result, function(i, f){

			$('#section-head .container-path a:last-child').append(result[i]['name']);

			let text = '<h3>' + result[i]['name'] + '</h3>' + result[i]['body'];

			$('#section-post .container-wysiwyg').append(text);
		});
	});

});

</script>
