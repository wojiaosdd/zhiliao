$(function(){
  window.onscroll = function(){
        if(document.documentElement.scrollTop+document.body.scrollTop>=430){
            $(".main-guding").addClass("main-t1");
        }
        if(document.documentElement.scrollTop+document.body.scrollTop<430){
             $(".main-guding").removeClass("main-t1");
        }
    }
})