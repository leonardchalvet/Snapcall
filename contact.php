<html>
	<head>

		<title>Contact</title>

		<meta name="description" content="" />

		<meta http-equiv="content-type" content="text/html; charset=utf8" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link rel="stylesheet" type="text/css" href="style/css/contact.css">

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
						<form method="post" action="src/sendEmail.php" onsubmit="return verifForm(this)" class="elAnim__slide anim__delayMedium_3">
							<div class="container-input">
								<input type="text" name="name" placeholder="Name">
								<div class="message-error">
									Please write a name
								</div>
							</div>
							<div class="container-input">
								<input type="text" name="company" placeholder="Company">
								<div class="message-error">
									Please write a company
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
									<span class="btn-text">
										Sent
										<svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
											<path class="path" d="M4.677 8.547l7.07-7.071-7.07 7.07zM.966 4.865l3.71 3.682-3.71-3.682z" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			<section id="section-adress" class="sectionAnim_container">
				<div class="wrapper">
					<img class="pattern elAnim__slide anim__delayMedium_5" src="img/contact/pattern.svg">
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

		<script type="text/javascript">var snapcall_script=document.createElement("script");snapcall_script.setAttribute("class","snapcall");snapcall_script.setAttribute("btn-bid","04cdf6ac90e311e9ade40ae222c5da84");snapcall_script.src="https://snap.snapcall.io/snapapp.min.js";document.body.appendChild(snapcall_script);</script>
	</body>
</html>
