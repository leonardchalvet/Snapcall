$(window).on('load', function() {

	setTimeout(function(){ 
		$('#section-cover').addClass('ready');
	}, 100);

})

function verifForm(f)
{
	let nameOk     = verifTinyText(f.name);
	let compagnyOk = verifTinyText(f.compagny);
	let emailOk    = verifEmail(f.email);
	let textOk     = verifBigText(f.text);
   
   	if(nameOk && compagnyOk && emailOk && textOk)
    	return true;
   	else return false;
}

function verifTinyText(c) {
	if(c.value.length < 5)
	{
		$('#section-form .container-form input[name='+c.name+']').addClass('error');
		return false;
	}
	else
	{
		$('#section-form .container-form input[name='+c.name+']').removeClass('error');
		return true;
	}
}

function verifBigText(c) {
	if(c.value.length < 10)
	{
		$('#section-form .container-form textarea[name='+c.name+']').addClass('error');
		return false;
	}
	else
	{
		$('#section-form .container-form textarea[name='+c.name+']').removeClass('error');
		return true;
	}
}

function verifEmail(c) {
	let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(!regex.test(c.value))
	{
		$('#section-form .container-form input[name='+c.name+']').addClass('error');
		return false;
	}
	else
	{
		$('#section-form .container-form input[name='+c.name+']').removeClass('error');
		return true;
	}
}