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

			<section id="section-help">
				<div class="wrapper">
					<div class="container-title">
						<h2>Help Center</h2>
						<h1>We're happy<br>to help.</h1>
					</div>
					<div class="container-help">
						<!--
						<div class="search">
							<input type="text" name="search" placeholder="Search for what you need help with">
							<img src="img/help/icn/icn-search.svg">
						</div>
						-->
						<div class="container-el"></div>
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

	$.getJSON("https://snapcall.zendesk.com/api/v2/help_center/en-us/categories.json", function(result){
		$.each(result, function(i, f){
			if(i == 'categories'){
				$.each(f, function(k, t){
					let html = '<a href="sections?id=' + f[k]['id'] + '&pos=' + k + '" class="el">' +
								   '<div class="icn">' +
								      '<img src="img/help/icn/icn-' + k + '.svg">' +
								   '</div>' +
								   '<h4>' + f[k]['name'] + '</h4>' +
								   '<p>' + f[k]['description'] + '</p>' +
							   '</a>';

					$('#section-help .container-help .container-el').append(html);
				});
			}
		});
	});

});

</script>
