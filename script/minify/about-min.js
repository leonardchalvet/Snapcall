$(window).on("load",function(){function n(n,a,e,t,o){e=a+" "+e,t=a+" "+t,o=a+" "+o;let i=0,l=$(e).length,s=2,r,c;function d(n){c=!1;let a=e,r=t;"next"===n?s++:"prev"===n&&s--,s<=l&&s>=1?($(".clr").removeClass("color-1 color-2 color-3 color-4"),$(o).removeClass("color-1 color-2 color-3 color-4"),$(a+".active").removeClass("active").addClass("hide").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(n){$(a+".hide").removeClass("hide").addClass("wait"),$(a+":nth-child("+s+")").removeClass("wait").addClass("active")}),$(r+".active").removeClass("active").addClass("hide").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(n){$(r+".hide").removeClass("hide").addClass("wait"),$(r+":nth-child("+s+")").removeClass("wait").addClass("active"),$(".clr").addClass("color-"+s),$(o).addClass("color-"+s),c=!0}),clearInterval(h),h=setInterval(function(){d("next")},i)):s<1?(s=l,d(n)):(s=1,d(n))}function v(){$(e+":nth-child(2)").addClass("active"),$(e+":not(:nth-child(2))").addClass("wait"),$(t+":nth-child(2)").addClass("active"),$(t+":not(:nth-child(2))").addClass("wait")}$(o+" .arrow:nth-child(2)").click(function(){clearInterval(h),d("next")}),$(o+" .arrow:nth-child(1)").click(function(){clearInterval(h),d("prev")}),v();var h=setInterval(function(){d("next")},i);i=n}setTimeout(function(){$("#section-cover").addClass("ready")},100),$("#section-carrousel").length&&n(5e3,"#section-carrousel",".container-pp .container-el .el",".container-text .container-el .el",".container-arrow")});