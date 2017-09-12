 $(function(){
  window.onscroll = function(){
        if(document.documentElement.scrollTop+document.body.scrollTop>=560){
            $(".main-top").addClass("main-t1");
        }
        if(document.documentElement.scrollTop+document.body.scrollTop<560){
             $(".main-top").removeClass("main-t1");
        }
    }

$(".main-06-ul li:first").addClass("main-06-li")
    $(".main-06-fl-div").eq(0).addClass("main-06-fl-div1");
    $(".main-06-ul li").mouseover(function(){
      var li=$(this).index();
      $(this).addClass("main-06-li").siblings().removeClass("main-06-li");
      $(".main-06-fl-div").eq(li).addClass("main-06-fl-div1").siblings().removeClass("main-06-fl-div1");
    })

var t=$(".flashBg ul li").width();
var _index5=0;
$(".main-06-a-fr").click(function(){
  _index5++;
  var len=$(".flashBg ul li").length;
  if(_index5+2>len){
    $("#four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
  }
  $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*t},1000);
  });

$(".main-06-a-fl").click(function(){
  if(_index5==0){
    $("ul.mobile").prepend($("ul.mobile").html());
    _index5=3
  }
  _index5--;
  $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*t},1000);
  });
  

  $(".sbysf_tab").children().mouseover(function(){
        var lis=$(this).index();
           $(this).addClass("now").siblings().removeClass("now");
           $(".sb_list ul").animate({
               left:-1100*lis
           },500)
      })

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
  }else if(ab==4){
         $("html,body").animate({
    scrollTop:4100
  },500);
  }
  })

 

 })


 
