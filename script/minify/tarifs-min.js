$(window).on("load",function(){setTimeout(function(){$("#section-cover").addClass("ready")},100),$("#section-faq .container-questions .question").click(function(){$(this).hasClass("open")?$("#section-faq .container-questions .question").removeClass("open"):($("#section-faq .container-questions .question").removeClass("open"),$(this).addClass("open"))}),$("#section-table .container-action .container-date").click(function(){$(this).hasClass("left")?($(this).removeClass("left"),$(this).addClass("right"),$("#section-table .container-table .head .cell .price").each(function(e){let t=$(this).attr("data-value"),a=$(this).attr("data-price-"+t+"-month"),n=$(this).attr("data-price-"+t+"-year");$(this).text(n)}),$("#section-table .container-table .head .cell p").removeClass("month"),$("#section-table .container-table .head .cell p").addClass("year")):$(this).hasClass("right")&&($(this).removeClass("right"),$(this).addClass("left"),$("#section-table .container-table .head .cell .price").each(function(e){let t=$(this).attr("data-value"),a=$(this).attr("data-price-"+t+"-month"),n=$(this).attr("data-price-"+t+"-year");$(this).text(a)}),$("#section-table .container-table .head .cell p").removeClass("year"),$("#section-table .container-table .head .cell p").addClass("month"))}),setTimeout(function(){$("#section-table .container-action .container-date").click()},1e3),$("#section-table .container-action .container-money .dropdown .money").click(function(){$("#section-table .container-table .head .cell .price").attr("data-value",$(this).attr("data-price")),$("#section-table .container-table .head .cell p").removeClass("year"),$("#section-table .container-table .head .cell p").addClass("month"),$("#section-table .container-table .head .cell .price").each(function(e){let t=$(this).attr("data-value"),a=$(this).attr("data-price-"+t+"-month");$(this).text(a)}),$("#section-table .container-action .container-money").removeClass("open"),$("#section-table .container-action .container-money > .money span").html($(this).html())}),$("#section-table .container-action .container-money >.money").mouseenter(function(){$(this).parent().addClass("open")}),$("#section-table .container-action .container-money .dropdown").mouseleave(function(){$(this).parent().removeClass("open")}),$("#section-table").mouseleave(function(){$("#section-table .container-action .container-money").removeClass("open")}),$("body").on("click",function(e){$(e.target).closest("#section-table .container-action .container-money").length||$("#section-table .container-action .container-money").hasClass("open")&&$("#section-table .container-action .container-money").removeClass("open")})});