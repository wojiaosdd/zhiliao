$(function() {

	var len = $(".lbt_div ul li").length;
	$(".lbt_div ul").css("width",900*len+"px");
	console.log(len);
	var index = 0;
	var timer = null;
	$(".xiao_lbt").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			index++;
			if(index == len) {
				index = 0;
			}
			//                  console.log(index);
			showImage(index);
		}, 2000);
	}).trigger("mouseleave");
	
$(".zy_you").click(function(){
     	index=index+1;
        if(index == len) {
				index = len-1;
			}
			showImage(index);
		
	});
	$(".zy_zuo").click(function(){

        if(index == 0) {
				index = 0;
			}
        else{
     	index=index-1
        }
			showImage(index);
		
	});
	function showImage(idx) {
	    $(".lbt_div ul").css("left",-idx*900+"px");
	}

});