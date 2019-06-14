<?php

// load Composer
require 'vendor/autoload.php';

use Zendesk\API\HttpClient as ZendeskAPI;

$subdomain = "snapcall";
$username  = "thomas@snapcall.io"; // replace this with your registered email
$token     = "bzQi13NcWOUbQSEY0UCAs2Si0FGROJSiFUgvD3Pn"; // replace this with your token

$client = new ZendeskAPI($subdomain);
$client->setAuth('basic', ['username' => $username, 'token' => $token]);

$name     = isset($_POST['name'])     ?  $_POST['name']     : null ;
$compagny = isset($_POST['compagny']) ?  $_POST['compagny'] : null ;
$email    = isset($_POST['email'])    ?  $_POST['email']    : null ;
$text     = isset($_POST['text'])     ?  $_POST['text']     : null ;

if($name != null && $compagny != null && $email != null && $text != null) {
	
	$newTicket = $client->tickets()->create([
		'requester' => [ 'name' => $name ],
	    'subject'   => 'Ticket from snapcall.io',
	    'recipient' => $email,
	    'comment'   => [
	        'body' => 'compagny : '.$compagny.', '.$text
	    ],
	    'priority'  => 'normal'
	]);

}

header('Location: ../');