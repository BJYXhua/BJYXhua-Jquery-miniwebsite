$(function () {
    // 用户名
    var user_placeholder = $('#user').prop('placeholder');
    $('#user').focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).prop('placeholder', user_placeholder);
        if ($(this).val() != '') {
            $(this).siblings('.okImg').css('display', 'block');
            $(this).siblings('.errorImg').css('display', 'none');
        } else {
            $(this).siblings('.okImg').css('display', 'none');
            $(this).siblings('.errorImg').css('display', 'block');
        }
        btn();
    })

    // 验证手机号码
    var moblie_placeholder = $('#telephone').prop('placeholder');
    $('#telephone').focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).prop('placeholder', moblie_placeholder);
        if ($(this).val() != '') {
            var mobile = $(this).val();
            var regMobile = /^1[35789]\d{9}$/;
            if (regMobile.test(mobile) == false) {
                alert('请输入正确的手机号码！')
                $(this).val('');
                return false;
            }
            $(this).siblings('.okImg').css('display', 'block');
            $(this).siblings('.errorImg').css('display', 'none');
        } else {
            $(this).siblings('.okImg').css('display', 'none');
            $(this).siblings('.errorImg').css('display', 'block');
        }
        btn();
    })

    // 验证码
    var code_placeholder = $('#code').prop('placeholder');
    $('div.register-login li:eq(2) a').click(function () {
        $(this).find('img').css('display', 'block')
    });
    $('#code').focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).prop('placeholder', code_placeholder);
        if ($(this).val() != '') {
            if ($(this).val() != 'vwo7' && $(this).val() != 'VWO7') {
                alert('你输入的验证码有误！');
                $('#code').val('');
                return false;
            }
        }
        btn();
    })

    // 登录密码
    var pwd_placeholder = $('#pwd').prop('placeholder');
    var repwd_placeholder = $('#repwd').prop('placeholder');
    $('#pwd').focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).prop('placeholder', pwd_placeholder);
        if ($(this).val() != '') {
            if ($(this).val().length < 6 || $(this).val().length > 12) {
                alert('对不起，你输入的格式有误！');
                $(this).val('');
                return false;
            } else {
                $(this).siblings('.okImg').css('display', 'block');
                $(this).siblings('.errorImg').css('display', 'none');
            }
        } else {
            $(this).siblings('.okImg').css('display', 'none');
            $(this).siblings('.errorImg').css('display', 'block');
        }
        btn();
    })

    // 确认密码
    $('#repwd').focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).prop('placeholder', repwd_placeholder);
        if ($(this).val() != '') {
            if ($('#pwd').val() == '') {
                alert("对不起，你输入的格式有误！")
                $(this).val('');
                return false;
            }
            if ($('#pwd').val() != $('#repwd').val()) {
                alert('两次密码输入不一致！');
                $('#repwd').val('');
                return false;
            }
            $(this).siblings('.okImg').css('display', 'block');
            $(this).siblings('.errorImg').css('display', 'none');
        } else {
            $(this).siblings('.okImg').css('display', 'none');
            $(this).siblings('.errorImg').css('display', 'block');
        }
        btn();
    })

    // 协议
    $('input[type="checkbox"]').change(function () {
        btn();
    })

    function btn() {
        if ($('input[type="checkbox"]').is(":checked") && $('#user').val() != '' && $('#telephone').val() != '' && $('#code').val() != '' && $('#pwd').val() != '' && $('#repwd').val() != '') {
            $("input[type='button']").removeAttr("disabled");
        } else {
            $("input[type='button']").prop('disabled', true);
        }
    }

    // 将用户名和密码写入 localStorage
    $("#upload").click(function () {
        var userName = $('#user').val();
        var pwd = $('#pwd').val();
        window.localStorage.setItem('userName',userName);
        window.localStorage.setItem('pwd',pwd);
        window.localStorage.setItem(userName, pwd);
        alert('注册成功，即将跳转到登录页面');
        $(location).prop('href', 'login.html');
    })

})

