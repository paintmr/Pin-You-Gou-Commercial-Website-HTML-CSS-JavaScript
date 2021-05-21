window.onload = function () {
  var regmobile = /^1[3|4|5|7|8]\d{9}$/; //手机号码的正则表达式
  var regqq = /^[1-9]\d{4,}$/;  //QQ号码的正则表达式
  var regnickname = /^[\u4e00-\u9fa5]{2,8}$/; //汉字的正则表达式
  var regtextmsg = /^\d{6}$/; //手机验证码的函数
  var regpsw = /^[a-zA-Z0-9_-]{6,16}$/;
  var mobile = document.querySelector('#mobile');
  var qq = document.querySelector('#qq');
  var nickname = document.querySelector('#nickname');
  var textmsg = document.querySelector('#textmsg');
  var psw = document.querySelector('#psw');
  var pswconfirm = document.querySelector('#pswconfirm');

  // 验证手机号
  regexptest(mobile, regmobile);
  // 验证qq号
  regexptest(qq, regqq);
  // 验证汉字昵称
  regexptest(nickname, regnickname);
  // 验证手机验证码
  regexptest(textmsg, regtextmsg);
  // 验证密码
  regexptest(psw, regpsw);
  // 验证正则表达式的函数
  function regexptest(ele, regexp) {
    ele.onblur = function () {
      if (regexp.test(this.value)) {
        this.nextElementSibling.className = 'success';
        this.nextElementSibling.innerHTML = '<i class="success-icon"></i>格式正确'
      } else {
        this.nextElementSibling.className = 'error';
        this.nextElementSibling.innerHTML = '<i class="error-icon"></i>格式错误'
      }
    }
  }
  // 验证两次密码是否一致
  pswconfirm.onblur = function () {
    if (this.value === psw.value) {
      this.nextElementSibling.className = 'success';
      this.nextElementSibling.innerHTML = '<i class="success-icon"></i>两次密码一致'
    } else {
      this.nextElementSibling.className = 'error';
      this.nextElementSibling.innerHTML = '<i class="error-icon"></i>两次密码不一致'
    }
  }
}