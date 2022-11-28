$(function () {
    //用户
       var uname=$("#nameShow");
       if(localStorage["userName"]==null){
           uname.html("请登录");
           uname.attr("href","login.html");
       }else{
            uname.html("欢迎您 "+localStorage["userName"]);
            uname.attr("href","#");
       }

    //轮播图效果
    var index = 1;
    var timer;
    var Num = 4;
    var num;
    $('.banner ul a').click(function () {
        // console.log($(this).text());
        num = $(this).text();
        show(num);
    })
    timer = setInterval(show, 2000);
    function show(num) {
        if (Number(num)) {
            clearTimeout(timer);
            //通过单击数字改变index值
            index = num;
        }
        for (var i = 1; i <= Num; i++) {
            if (i == index) {
                $("#list" + index).css("display", "block");

            } else {
                $("#list" + i).css("display", "none");
            }
        }
        if (index == Num) {
            index = 1;
        } else {
            //修改index值，让它能显示下一张图
            index++;
        }
     
    }
    //返回顶部 
 $(".retruntop").click(function(){
    $('html,body').animate({
        scrollTop: 0
    }, 'slow');
 })




  //点击效果
  $(".menu_read").eq(0).click(function(){
    $(".menu_read").find("a").eq(0).css("color","orange")  
  })
  $(".menu").eq(0).click(function(){
    $(".menu").find("a").eq(0).css("color","orange")  
  })


  $(".right ul li a").eq(0).click(function(){
    $(".color1").css("color","orange")  
  })
  $(".right ul li a").eq(1).click(function(){
    $(".color2").css("color","orange")  
  })
  $(".right ul li a").eq(2).click(function(){
    $(".color3").css("color","orange")  
  })
  $(".right ul li a").eq(3).click(function(){
    $(".color4").css("color","orange")  
  })



  $(".nav-list-right ul li a").eq(0).click(function(){
    $(".nav-list-right ul li a").eq(0).css("color","orange")  
  })

  $(".nav-list-right ul li a").eq(1).click(function(){
    $(".nav-list-right ul li a").eq(1).css("color","orange")  
  })
  $(".nav-list-right ul li a").eq(2).click(function(){
    $(".nav-list-right ul li a").eq(2).css("color","orange")  
  })
  $(".nav-list-right ul li a").eq(3).click(function(){
    $(".nav-list-right ul li a").eq(3).css("color","orange") 
  })
  $(".nav-list-right ul li a").eq(4).click(function(){
    $(".nav-list-right ul li a").eq(4).css("color","orange")  
  })



  $(".nav-list ul li a").eq(0).click(function(){
    $(".nav-list ul li a").eq(0).css("color","sorange")  
  })
  $(".nav-list ul li a").eq(1).click(function(){
    $(".nav-list ul li a").eq(1).css("color","orange")  
  })
  $(".nav-list ul li a").eq(2).click(function(){
    $(".nav-list ul li a").eq(2).css("color","orange")  
  })
  $(".nav-list ul li a").eq(3).click(function(){
    $(".nav-list ul li a").eq(3).css("color","orange")  
  })
  $(".nav-list ul li a").eq(4).click(function(){
    $(".nav-list ul li a").eq(4).css("color","orange")  
  })



  $(".hostword a").eq(0).click(function(){
    $(".hostword a").eq(0).css("color","orange")  
  })
  $(".hostword a").eq(1).click(function(){
    $(".hostword a").eq(1).css("color","orange")  
  })
  $(".hostword a").eq(2).click(function(){
    $(".hostword a").eq(2).css("color","orange")  
  })
  $(".hostword a").eq(3).click(function(){
    $(".hostword a").eq(3).css("color","orange")  
  })


  $(".computer-middle ul li a").eq(0).click(function(){
    $(".computer-middle ul li a").eq(0).css("color","orange")  
  })
  $(".computer-middle ul li a").eq(1).click(function(){
    $(".computer-middle ul li a").eq(1).css("color","orange")  
  })
  $(".computer-middle ul li a").eq(2).click(function(){
    $(".computer-middle ul li a").eq(2).css("color","orange")  
  })
  $(".computer-middle ul li a").eq(3).click(function(){
    $(".computer-middle ul li a").eq(3).css("color","orange")  
  })
  $(".computer-middle ul li a").eq(4).click(function(){
    $(".computer-middle ul li a").eq(4).css("color","orange")  
  })
  $(".computer-middle ul li a").eq(5).click(function(){
    $(".computer-middle ul li a").eq(5).css("color","orange")  
  })
  $(".computer-middle ul li a").eq(6).click(function(){
    $(".computer-middle ul li a").eq(6).css("color","orange")  
  })
  $(".computer-middle ul li a").eq(7).click(function(){
    $(".computer-middle ul li a").eq(7).css("color","orange")  
  })
  $(".computer-middle ul li a").eq(8).click(function(){
    $(".computer-middle ul li a").eq(8).css("color","orange")  
  })



})

