$(window).on("load",function(){function t(t,n,e){var n,i=(n=t+" "+n)+":nth-child(1) img",a=document.querySelectorAll(n).length,o=1,c=document.querySelectorAll(i).length,l=1;function d(){function t(){var t=n+":nth-child("+o+")";document.querySelector(t).classList.add("active")}function i(){var t=n+":nth-child("+o+") img",e=n+":nth-child("+o+") img:nth-child("+l+")";[].forEach.call(document.querySelectorAll(t),function(t){t.classList.remove("active")}),document.querySelector(e).classList.add("active")}document.querySelector(n).classList.remove("active"),o>=a?o=1:o++,l>=c?l=1:l++,i(),t(),clearInterval(h),h=setInterval(function(){d()},e)}function s(){$(n+":nth-child(1) img:nth-child(1)").addClass("active"),$(n+":nth-child(2) img:nth-child(2)").addClass("active"),$(n+":nth-child(3) img:nth-child(3)").addClass("active"),$(n+":nth-child(4) img:nth-child(4)").addClass("active")}s();var h=setInterval(function(){d()},e)}function n(t,n,e,i){e=n+" "+e,i=n+" "+i;var a=0,o=$(e).length,c=1,l;function d(t){"next"===t?c++:"prev"===t&&c--,c<=o&&c>=1?($(e+".anim-show").removeClass("anim-show").addClass("anim-hide-top"),setTimeout(function(){$(e+".anim-hide-top").removeClass("anim-hide-top displayBlock").addClass("anim-hide-bottom"),$(e+":nth-child("+c+")").addClass("displayBlock").outerWidth(),$(e+":nth-child("+c+")").removeClass("anim-hide-bottom").addClass("anim-show")},750),clearInterval(h),h=setInterval(function(){d("next")},a)):c<1?(c=o,d()):(c=1,d())}function s(){$(e+":nth-child(1)").addClass("displayBlock anim-show"),$(e+":nth-child(2)").addClass("anim-hide-bottom"),$(e+":nth-child(3)").addClass("anim-hide-bottom")}$(i+":nth-child(2)").click(function(){clearInterval(h),d("next")}),$(i+":nth-child(1)").click(function(){clearInterval(h),d("prev")}),s();var h=setInterval(function(){d("next")},a);a=t}setTimeout(function(){$("#section-cover").addClass("ready"),$("#section-logos").addClass("ready"),t("#section-logos",".container-el .el",2e3)},100),setTimeout(function(){var t=bodymovin.loadAnimation({container:document.getElementById("cover-anim"),renderer:"svg",loop:!0,autoplay:!0,path:"bodymovin/home/section-cover/data.json"})},750),setTimeout(function(){$("#section-logos").addClass("ready")},1e3),n(7e3,"#section-quotes",".container-quotes .quote",".container-nav .nav")});