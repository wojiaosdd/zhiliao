window.onscroll = function(){
        if(document.documentElement.scrollTop+document.body.scrollTop>=430){
            $(".main-guding").addClass("main-t1");
        }
        if(document.documentElement.scrollTop+document.body.scrollTop<430){
             $(".main-guding").removeClass("main-t1");
        }
    }

$(".main-guding").children().click(function(){
	var ab=$(this).index();
	if(ab==0){
		$("html,body").animate({
		scrollTop:430
	},500);
	}else if(ab==1){
         $("html,body").animate({
		scrollTop:1180
	},500);
	}else if(ab==3){
         $("html,body").animate({
		scrollTop:2900
	},500);
	}
	
})

