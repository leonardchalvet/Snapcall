$(window).on("load",function(){setTimeout(function(){var o=bodymovin.loadAnimation({container:document.getElementById("cover-anim"),renderer:"svg",loop:!1,autoplay:!0,path:"bodymovin/customers-main/data.json"})},750),setTimeout(function(){$("#section-cover").addClass("ready")},100)});