<html>
	<head>

		<title>Contact</title>

		<meta name="description" content="" />

		<meta http-equiv="content-type" content="text/html; charset=utf8" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link rel="stylesheet" type="text/css" href="style/css/contact.css">

		<script type="text/javascript" src="script/minify/jQuery.3.3.1-min.js"></script>

	</head>
	
	<body>

		<?php 
			include('common-header.php'); 
		?> 

		<main>

			<section id="section-cover">
				<div class="wrapper">
					<h1>
						<span>
							Get in
						</span>
						<span>
							touch.
						</span>
					</h1>
					<p>
						Questions? Comments? Bug reporting? Ideas? Or just to say Hi… 
						<br>We are always here.
					</p>
				</div>
			</section>

			<section id="section-form" class="sectionAnim_container">
				<div class="wrapper">
					<div class="container-text">
						<h2 class="elAnim__slide anim__delayMedium_1">
							We've been expecting you.
						</h2>
						<p class="elAnim__slide anim__delayMedium_2">
							You can always reach out immediately by using the SnapCall button. But if you are shy, you can also spend time and fill in this form here:
						</p>
					</div>
					<div class="container-form">
						<form method="post" action="sendmail.php" onsubmit="return verifForm(this)" class="elAnim__slide anim__delayMedium_3">
							<div class="container-input">
								<input type="text" name="name" placeholder="Name">
								<div class="message-error">
									Please write a name
								</div>
							</div>
							<div class="container-input">	
								<input type="text" name="compagny" placeholder="Compagny">
								<div class="message-error">
									Please write a compagny
								</div>
							</div>
							<div class="container-input">
								<input type="text" name="email" placeholder="Email*">
								<div class="message-error">
									Your email is not valid
								</div>
							</div>
							<div class="container-input">
								<textarea rows="6" name="text" placeholder="Let us know how we can help*"></textarea>
								<div class="message-error">
									Please write a message
								</div>
							</div>
							<div class="validate">
								<p>
									By submitting this form, you are granting consent to contact you in the future with relevant communications. You may unsubscribe anytime in the future.
								</p>
								<button>
									<span class="btn-text">
										Send
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			<section id="section-adress" class="sectionAnim_container">
				<div class="wrapper">
					<img class="pattern" src="img/contact/pattern.svg">
					<div class="container-text">
						<h2 class="elAnim__slide anim__delayMedium_0">
							Where you can find us.
						</h2>
						<h6 class="elAnim__slide anim__delayMedium_1">Paris,</h6>
						<img class="elAnim__slide anim__delayMedium_2" src="img/product/logo-StationF.svg">
						<p class="elAnim__slide anim__delayMedium_3">
							55 parvis Alan Turing, 75013 Paris
						</p>
					</div>
					<div class="container-map elAnim__slide anim__delayMedium_4">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.2416537235813!2d2.3679104155689035!3d48.83452911034074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67221ef45df29%3A0x74b250b094e588ab!2s55+Parvis+Alan+Turing%2C+75013+Paris!5e0!3m2!1sfr!2sfr!4v1559900782889!5m2!1sfr!2sfr" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
				</div>
			</section>

		</main>

		<?php include('common-footer.php') ?>

		<script type="text/javascript" src="script/minify/contact-min.js"></script>

		<script type="text/javascript" src="script/minify/common-min.js"></script>
	</body>
</html>