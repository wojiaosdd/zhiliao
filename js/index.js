$(function() {
		var count = $("#slideBox .bd li").length;
		var html = '';
		for(var i = 0; i < count; i++) {
			html += i ? '<li></li>' : '<li class="on"></li>';
		}
		$('#slideBox .hd ul').append(html);

		// banner轮播图
		jQuery(".slideBox").slide({
			mainCell: ".bd ul",
			effect: "leftLoop",
			autoPlay: true,
			mouseOverStop: true,
			interTime: 5000
		});

		// 16那么年行业积累手风琴
		! function(a) {
			var b = function() {
				this.init()
			};
			b.prototype = {
					init: function() {
						this.productShow()
					},
					productShow: function() {
						var b = a(".J_productsBox"),
							c = b.find("li.J_item"),
							d = function() {
								var b = a(window).width();
								return 1200 > b ? !0 : !1
							};
						c.hover(function() {
								var b = a(this),
									e = d() ? 238 : 238,
									f = d() ? 464 : 464;
								c.not(b).stop().animate({ width: e }).removeClass("on"),
									b.stop().animate({ width: f }).addClass("on")
							}),
							a(window).resize(function() {
								c.filter(".on").mouseenter()
							})
					}
				},
				new b
		}(jQuery);

		// 16年的行业积累
		var oSpeed = 600;
		var oTop = $('.qyjz-productlist li').height();
		$('.qyjz-productlist li').hover(function() {
			$(this).find('.qyjz-productlist-on').stop().animate({ 'top': 0 }, oSpeed);
		}, function() {
			$(this).find('.qyjz-productlist-on').stop().animate({ 'top': -oTop }, oSpeed);
		});

		$('.jz-service-close').click(function(event) {
			$(this).parent('.jz-service-open').hide().siblings('.jz-service-packup').show();
		});
		$('.jz-service-packup').mouseenter(function() {
			$(this).hide().siblings('.jz-service-open').show();
		});

		// 成熟解决方案Tab切换
		$("#J_plan_av").delegate("LI", "mouseover", function() {
			$("#J_plan_av > LI").removeClass("action");
			var n = $(this).addClass("action").attr("num");
			$("div.anli-main-plan-cell").hide();
			$("div.anli-main-plan-cell[num='" + n + "']").show();
		});

		//初始化典型案例宽度
		var count = $(".slid li").length;
		$(".slid ul").css("width", (count * 243) + "px");
		//初始化给按钮绑定事件
		$(".case-con a.slid_next").bind("click", function() { customerleft(); });
		$(".case-con a.slid_prev").bind("click", function() { customerright(); });
		//向左滚动
		function customerleft() {
			var a_next = $(".case-con a.slid_next");
			var ul = $(".slid ul");
			a_next.unbind("click");
			var count = $(".slid li").length - 1;
			var left = ul.position().left;
			var pleft = left - 243;
			var aleft = -1 * count * 243 + 1200;
			if(left <= aleft) {
				ul.animate({ right: '10px' }, 500, function() { a_next.bind("click", function() { customerleft() }) });
			} else { ul.animate({ left: pleft + 'px' }, 400, function() { a_next.bind("click", function() { customerleft() }) }); }
		}
		//向右滚动
		function customerright() {
			var a_prev = $(".case-con a.slid_prev");
			var ul = $(".slid ul");
			a_prev.unbind("click");
			var count = $(".slid li").length;
			var left = ul.position().left;
			var pleft = left + 243;
			if(left >= 0) {
				ul.animate({ left: '0px' }, 500, function() { a_prev.bind("click", function() { customerright() }) });
			} else { ul.animate({ left: pleft + 'px' }, 400, function() { a_prev.bind("click",
function() { customerright() })
});
}
}
});





$(function() {
	var dongli = $(".arrange_bottom_div ul .dongli");
dongli.each(function() { //遍历五个出来的小东西的数量
	$(document).scroll(function() {

		var vv = $(document).scrollTop();
//		console.log(vv);
		if(vv > 480) {
			
				var a = $(this); //获取当前
				var i = a.index(); //获取数量
				dongli.stop(true).animate({ margin: '0px' }, 1000);
};
			});
		
	});
});
//大图展示的start
$(function() {

	var mingpian1 = $(".datu .mingpian1");
	var mingpian2 = $(".datu .mingpian2");
	var mingpian3 = $(".datu .mingpian3");
	var datu_img = $(".datu .datu_div_img");
	var datu_div_zi = $(".datu .datu_div_zi");

	$(document).scroll(function() {

		var ff = $(document).scrollTop();
		console.log(ff);
		if(ff > 1100) {
			mingpian1.stop(true).animate({
				top:"370px"
			}, 700);
			mingpian2.stop(true).animate({
				right:"60px"
			}, 1000);
			mingpian3.stop(true).animate({
				top:"570px"
			}, 900);
			datu_img.stop(true).animate({
				left:"60px"
			}, 500);
			datu_div_zi.stop(true).animate({
				left:"40px"
			}, 1200);
		};
	});

});
//大图展示的end
//资讯栏目的切换start
$(function(){
	var zixunli=$(".zixun_div .zixun_div_ul li");
	
	var zixunyinul=$(".zixun_yindiv .zixun_yindiv_ul");
	console.log(zixunyinul);
	zixunli.click(function(){
		var ind=$(this).index();
		console.log(ind);
		var ww=ind*1200;
		zixunyinul.stop(true).animate({ marginLeft: -ww+'px' }, 1000);
		zixunli.eq(ind).addClass("onzixun_div_li").siblings().removeClass("onzixun_div_li");
	});
});

//资讯栏目的切换end
//案例栏切换start
//$(function(){
//	var anlili=$("#anli .anli_div_ul li");
//	
//	var anliul=$("#anli .anli_yindiv_ul");
//
//	anlili.click(function(){
//		var ind=$(this).index();
//		console.log(ind);
//		var anw=ind*1200;
//		anliul.stop(true).animate({ marginLeft: -anw+'px' }, 1000);
//		anlili.eq(ind).addClass("onanli_div_li").siblings().removeClass("onanli_div_li");
//	});
//});
//案例栏切换end
//窗口右边的客服栏目start
