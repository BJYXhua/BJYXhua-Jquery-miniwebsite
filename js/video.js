$(function () {
    // 获取本地存储的用户名
    var uname = $('#nameShow');
    // console.log(localStorage.key(localStorage.length-1));
    // alert(localStorage["userName"]);

    if (localStorage["userName"] == null) {
        uname.html('请登录 ');
        uname.attr('href', 'login.html');
    } else {
        uname.html('欢迎您 ' + localStorage["userName"]);
        uname.attr('href', '#');
    }
    // 点击关注
    $('.rfocus a').click(function () {
        $(this).html('<i class="fa fa-check"></i>已关注');
        // 慢慢消失
        $(this).fadeOut('900');
    })

    // 导航条显示隐藏
    $('.menu,.menu_read').hover(function () {
        $(this).find('ul').stop(true, true).slideDown('slow');
    }, function () {
        $(this).find('ul').stop(true, true).slideUp('slow');
    })

    // 设置点击哪一章视频显示红色,其他不显示红色字体
    $('.d-main>ul>li:last a').addClass('practice');
    $('.d-main>ul>li>a').click(function () {
        $('.d-main>ul>li>a').removeClass('practice');
        $(this).addClass('practice');
    })

    // 设置点击分享点赞收藏下载按钮事件
    // 分享事件字体显示红色
    $('.share-1').on('click', function () {
        $(this).addClass('practice');

    });
    //收藏
    $('.share-3').on('click', function () {
        $(this).addClass('practice');
    });
    // 下载按钮事件
    $('.share-4').click(function () {
        alert('下载成功！请在后台查看！')
    })


    // 鼠标悬停在分享时，分享的modalBox展开
    $('.share-1').hover(function () {
        $('.modalBox').stop(true, true).slideDown();
    })

    // 点击某个按钮分享时
    $('.shareleft .btn1').click(function () {
        var name = $('.btn1 span').html();
        $('.modal-title span').html(name);
    })
    $('.shareleft .btn2').click(function () {
        var name = $('.btn2 span').html();
        $('.modal-title span').html(name);
    })
    $('.shareleft .btn3').click(function () {
        var name = $('.btn3 span').html();
        $('.modal-title span').html(name);
    })
    $('.shareleft .btn4').click(function () {
        var name = $('.btn4 span').html();
        $('.modal-title span').html(name);
    })
    //   点击分享按钮发送时
    $('.modal-footer .btnshare').click(function () {
        $(this).attr('data-dismiss', 'modal');
        alert('分享成功！');
    })
    // 模态框的显示隐藏
    $('.modalBox').hover(function () {
        $('.modalBox').show();
    }, function () {
        $('.modalBox').hide(600);
    })
    // 点赞事件
    var num = 1;
    $('.share-2').on('click', function () {
        $(this).addClass('practice');

        $(this).html(num);
        num++;
    });

    // 换一换按钮，点击 随机排序
    var sort = $('.r-video-main').children();
    $('.sort').click(function () {
        var len = sort.length;
        var temp, x;
        for (var i = 0; i < len; i++) {
            temp = sort[i];
            x = Math.floor(Math.random() * len);
            sort[i] = sort[x];
            sort[x] = temp;
        }
        $(sort).remove();
        $('.r-video-main').append($(sort));
    })

    // 评论区
    // 获得焦点时和失去焦点时
    $('.topbox ul li textarea').focus(function () {
        $(this).removeAttr('placeholder');

    }).blur(function () {
        $(this).prop('placeholder', '有趣的人就应该发表有趣的评论');
    })

    var time = setInterval(getTime());
    getTime();

    // 设置发表评论
    // 如果没有写如何内容无法发布
    if ($('.topbox textarea').val() == "") {
        $('.submitBtn').attr('disabled', true);
    }
    $('.topbox textarea').blur(function () {
        if (!$('.topbox textarea').val() == "") {
            $('.submitBtn').removeAttr('disabled');
        } else {
            $('.submitBtn').attr('disabled', true);
        }
    })
    // 随机数
    var mathDot = parseFloat(Math.random() * (10 - 1) + 1).toFixed(2);
    $('.submitBtn').on('click', function () {
        // 如果用户没有登录，提示用户登录后才能发布
        if (localStorage["userName"] == null) {
            alert('请先登录后才能发表评论！');
            location.href='login.html';           
        } else {
             // 新建li发表内容添加
             var text = $('.topbox textarea').val();
             var content_ul = $('.content-middle ul');
             time = setInterval(getTime());
             var name = localStorage["userName"];
             var newLi = `<li>
         <div class="users-2">
             <img src="img/hmbb.jpg" width="60px" height="50px" /><i class='name'> &nbsp; ${name}</i><a href="JavaScript:avoid(0)"
                 class="user-name"></a></a>
         </div><div class="crticaldiv"><i class="crtical">${text}</i><a class="dots"></a></div>
         <p class="date">2021-12-17</p>
     </li>`;
 
             // 插入评论
             content_ul.prepend(newLi);
        }

        // 评论点赞按钮设置
        var num = 1;
        $('.dots').on('click', function () {
            $(this).addClass('practice');
            $(this).html(num);
            num++;
        });
        // 获取时间
        getTime();
    })

    $('.dot,.dots').on('click', function () {
        $(this).addClass('practice');
    });

    // 点击评论区的关注
    $('.users-1 .user-name').on('click', function () {
        $(this).html(' ');

    })

    // 返回顶部,用动画方法
    $('.retop a').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    })
    // 显示关注微信的微信公众号,用动画方法
    $('.imgwx').hide();
    $('.clickWX,.imggz').hover(function () {
        $('.imgwx').stop(true, true).fadeIn('slow')

    }, function () {
        $('.imgwx').stop(true, true).fadeOut('slow')
    })

    // 关闭广告
    $('.close').click(function(){
        $(this).parent().fadeOut('slow');
    })

})

// 获取随机时间
function getTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    var dates = $('li p.date');
    dates.html(year + '-' + month + '-' + day + ' ' + h + ':' + m);



}