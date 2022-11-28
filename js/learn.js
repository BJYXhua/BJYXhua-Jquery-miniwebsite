$(function(){
    $(".zez").mouseover(function(){
        $(".cheng").css('display', 'block');
       
    })
})
$(function(){
 $(".cheng").mouseleave(function(){
        $(".cheng").css('display', 'none');
    })
})

$(function(){
    $(".close").click(function(){
        $(".close").remove();
        $(".guangao").remove();
    })
})
 
 
 var uname = $('#nameShow');
 if(localStorage['userName'] == null){
     uname.html('请登录');
     uname.attr('href','login.html');
 }else{
     uname.html('欢迎您 '+ localStorage['userName']);
     uname.attr('href','#');
 }
 
 
 
 $(".tiao1").click(function(){
$("html,body").animate({ scrollTop: $(".tiao1").offset().top-$(this).height() }, 500); 
 })

 $(".tiao2").click(function(){
$("html,body").animate({ scrollTop: $("#wy1").offset().top-$(this).height() }, 500); 
 })


 $(".tiao3").click(function(){
$("html,body").animate({ scrollTop: $("#wy2").offset().top-$(this).height() }, 500); 
 })

 $(".tiao4").click(function(){
$("html,body").animate({ scrollTop: $("#wy3").offset().top-$(this).height() }, 500); 
 })

 $(".tiao5").click(function(){
$("html,body").animate({ scrollTop: $("#wy4").offset().top-$(this).height() }, 500); 
 })


$(function (){
    $(".menu").hover(function() {
        $(".submenu1").find("ul").stop().slideDown();
    },function(){
        $(".submenu1").find("ul").stop().slideUp();
    })
   
})
$(function(){
    $(".menu_read").hover(function() {
        $(".submenu_read").find("ul").stop().slideDown();
    },function(){
        $(".submenu_read").find("ul").stop().slideUp();
    })
})


window.onload = function(){
    var divs = document.querySelector(".totop");
    //获取可视区域的高度;
    var clientH = document.documentElement.clientHeight;
    var timer = null;
    var Ontop = document.documentElement.scrollTop ;
    // || document.body.scrollTop;
    //兼容性设置;	

    window.onscroll = function() {
        //获得滚动条到顶部的距离
        Ontop = document.documentElement.scrollTop;
        // || document.body.scrollTop;
        //兼容性设置;
        if (Ontop > clientH * 0.2) {
            divs.style.display = "block";
        } else {
            divs.style.display = "none";
        }
        toTop(); //调用回到顶部函数；
    }
    
    //回到顶部函数;
    function toTop(){
        divs.onclick = function(){
        timer = setInterval(function(){ 	
            //让滚动条到顶部的距离自动缩减到0;
            document.documentElement.scrollTop = document.body.scrollTop = Math.floor(Ontop - 200);//兼容性设置;
            //设置定时器
                if(Ontop === 0 || document.documentElement.scrollTop === 0){
                    clearInterval(timer);
                }
            },10);
        }
    }
}



        

