$(function(){
// 密码长度

$('input[type=password]:eq(1)').on('blur', function () {
    var oldpwd=$('.oldPwd').val();
    var pwdReg = /^[a-zA-Z0-9]{6,10}$/;
    var pwd = $(this).val();
    console.log($(this).val());
    if (!pwdReg.test(pwd)) {
        $('.alert').show();
        $('.alert').html('<img src="static/images/error.png" width="20px" alt="">密码长度在6-10之间!');
    }else if(oldpwd==pwd) {
        $('.alert').show();
        $('.alert').html('<img src="static/images/error.png" width="20px" alt="">新密码不能和旧密码相同！');
    }else {
        $('.alert').hide();
    }
})
// 判断密码是否一致
$('.renewPwd').on('blur',function(){
    var newPwd= $('.newPwd').val();
    var renewPwd=$('.renewPwd').val();
    if(newPwd != renewPwd){
        $('.alert').show();
        $('.alert').html('两次密码输入不一致！');
        // 按钮不可用
        $('button[type=button]').attr('disabled','false');
        // 清空输入内容
        $('.newPwd').val('');
        $('.renewPwd').val('');
    }else{
        $('button[type=button]').removeAttr('disabled');
    }
})

// 点击提交时提示
$('button[type=button]:eq(0)').on('click',function(){
    var oldpwd=$('.oldPwd').val();
    var newPwd= $('.newPwd').val();
    var renewPwd=$('.renewPwd').val();
    if(oldpwd =='' || newPwd =='' ||renewPwd ==''){
        $(this).attr('data-toggle','modal');
        $(this).attr('data-target','#staticBackdrop');
    }else{
        $(this).removeAttr('data-toggle');
        $(this).removeAttr('data-target');
    }
})

})