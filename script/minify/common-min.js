$(window).on("load",function(){function t(){$(".cm-button-style1").each(function(){var t=$(this).find(".btn-text").width(),n=$(this).find(".container-btn-arrow").css("margin-left"),a=t+parseInt(n);$(this).find(".container-btn-arrow").css({"-webkit-transform":"translateX(-"+a+"px)","-moz-transform":"translateX(-"+a+"px)","-ms-transform":"translateX(-"+a+"px)","-o-transform":"translateX(-"+a+"px)",transform:"translateX(-"+a+"px)"})})}function n(){var t=$window.height()/1.5;$(".sectionAnim_container").each(function(){$window.scrollTop()>=$(this).offset().top-t&&($(this).hasClass("reach")||$(this).addClass("reach"))})}function a(t,n,a,o){a=n+" "+a,o=n+" "+o;var s=0,i=$(a).length,e=1,l;function c(t){"next"===t?e++:"prev"===t&&e--,e<=i&&e>=1?($(a+".anim-show").removeClass("anim-show").addClass("anim-hide-top"),setTimeout(function(){$(a+".anim-hide-top").removeClass("anim-hide-top displayBlock").addClass("anim-hide-bottom"),$(a+":nth-child("+e+")").addClass("displayBlock").outerWidth(),$(a+":nth-child("+e+")").removeClass("anim-hide-bottom").addClass("anim-show")},750),clearInterval(d),d=setInterval(function(){c("next")},s)):e<1?(e=i,c()):(e=1,c())}function r(){$(a+":nth-child(1)").addClass("displayBlock anim-show"),$(a+":nth-child(2)").addClass("anim-hide-bottom"),$(a+":nth-child(3)").addClass("anim-hide-bottom")}$(o+":nth-child(2)").click(function(){clearInterval(d),c("next")}),$(o+":nth-child(1)").click(function(){clearInterval(d),c("prev")}),r();var d=setInterval(function(){c("next")},s);s=t}setTimeout(function(){t()},50),$window=$(window),$window.scroll(function(){n(),$window.scrollTop()>=1?$("#header-desktop").addClass("scroll"):$("#header-desktop").removeClass("scroll")}),n(),$(".cm-section-quotes").length&&$(".cm-section-quotes").each(function(t){let n=$(this).attr("class").split(" "),o="";for(let t=0;t<n.length;t++)n[t].indexOf("quotes")>-1&&(o+="."+n[t]);a(7e3,o,".container-quotes .quote",".container-nav .nav")})});