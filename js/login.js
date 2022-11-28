$(function () {
    var name_placeholder = $('#nameLogin').prop('placeholder');
    var pwd_placeholder = $('#pwdLogin').prop('placeholder');
    $('#nameLogin').focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).prop('placeholder', name_placeholder);
    })
    $('#pwdLogin').focus(function () {
        $(this).removeAttr('placeholder');
    }).blur(function () {
        $(this).prop('placeholder', pwd_placeholder);
    })
})

function login() {
    // 1.获取用户输入的用户名和密码
    var loginName = document.getElementById('nameLogin').value;
    var pwd = document.getElementById('pwdLogin').value;
    // 2.获取localStorage里对应的账号和密码
    var userpwd = localStorage.getItem(loginName);
    // 3.判断用户输入的密码和localStorage里的账号密码是否一致
    if (loginName == '' || pwd == '') {
        alert('请输入账号密码！');
        return false;
    }
    if (pwd == userpwd) {
        // 4.判断当前账号是否登陆过
        var session = sessionStorage.getItem(loginName);
        if (session) {
            // 已登录
            alert(loginName + ' 已登录');
        } else {
            // 未登录，将账号保存至登录状态
            sessionStorage.setItem(loginName, pwd);
            alert('登录成功！');
        }
    } else {
        alert('你输入的账号或密码有误！');
        $('.media form').prop('action', '');
        return false;
    }
}