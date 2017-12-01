$(function(){
            //  $("#jnBrandTab li a").click(function(){
            //        $(this).parent().addClass("chos").siblings().removeClass("chos");
            //        var index=$("#jnBrandTab li a").index(this);
            //        move(index);
            //        return false;
            //  }).eq(0).click();
            //  function move(idx){
            //      var w = $("#jnBrandList li").outerWidth();
            //      var ulWidth=w*4;
            //      $("#jnBrandList").stop().animate({left:-idx*ulWidth+"px"},1000)
            // }
            var links=$("#lbt_dian li");
            var len=links.length;
            console.log(len);
            var index=0;
            var timer=null;
            links.click(function(){
                 index=$(this).index();
                 showImage(index);
            }).eq(0).trigger("click");

            $("#lbt").hover(function(){
                clearInterval(timer);
            },function(){
                timer=setInterval(function(){
                    index++;
                    if(index==len){
                        index=0;
                    }
//                  console.log(index);
                    showImage(index);
                },3000);
            }).trigger("mouseleave");
            function showImage(idx){
                links.eq(idx).addClass("ondian").siblings().removeClass("ondian");
               
                $("#lbt_img").find("li").stop(true,true).eq(idx).fadeIn().siblings().fadeOut();
            }
        });