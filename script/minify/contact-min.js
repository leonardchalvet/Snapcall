function verifForm(e){let n=verifTinyText(e.name),r=verifTinyText(e.compagny),o=verifEmail(e.email),a=verifBigText(e.text);return!!(n&&r&&o&&a)}function verifTinyText(e){return e.value.length<5?($("#section-form .container-form input[name="+e.name+"]").addClass("error"),!1):($("#section-form .container-form input[name="+e.name+"]").removeClass("error"),!0)}function verifBigText(e){return e.value.length<10?($("#section-form .container-form textarea[name="+e.name+"]").addClass("error"),!1):($("#section-form .container-form textarea[name="+e.name+"]").removeClass("error"),!0)}function verifEmail(e){let n;return/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(e.value)?($("#section-form .container-form input[name="+e.name+"]").removeClass("error"),!0):($("#section-form .container-form input[name="+e.name+"]").addClass("error"),!1)}$(window).on("load",function(){setTimeout(function(){$("#section-cover").addClass("ready")},100)});