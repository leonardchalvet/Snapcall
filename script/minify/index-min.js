$(window).on("load",function(){function t(t,e,n){var e,c=(e=t+" "+e)+":nth-child(1) img",o=document.querySelectorAll(e).length,i=1,l=document.querySelectorAll(c).length,a=1;function d(){function t(){var t=e+":nth-child("+i+")";document.querySelector(t).classList.add("active")}function c(){var t=e+":nth-child("+i+") img",n=e+":nth-child("+i+") img:nth-child("+a+")";[].forEach.call(document.querySelectorAll(t),function(t){t.classList.remove("active")}),document.querySelector(n).classList.add("active")}document.querySelector(e).classList.remove("active"),i>=o?i=1:i++,a>=l?a=1:a++,c(),t(),clearInterval(r),r=setInterval(function(){d()},n)}function s(){$(e+":nth-child(1) img:nth-child(1)").addClass("active"),$(e+":nth-child(2) img:nth-child(2)").addClass("active"),$(e+":nth-child(3) img:nth-child(3)").addClass("active"),$(e+":nth-child(4) img:nth-child(4)").addClass("active")}s();var r=setInterval(function(){d()},n)}setTimeout(function(){$("#section-cover").addClass("ready"),$("#section-logos").addClass("ready"),t("#section-logos",".container-el .el",2e3)},100),setTimeout(function(){var t=bodymovin.loadAnimation({container:document.getElementById("cover-anim"),renderer:"svg",loop:!0,autoplay:!0,path:"bodymovin/home/section-cover/data.json"})},750),setTimeout(function(){$("#section-logos").addClass("ready")},1e3)});