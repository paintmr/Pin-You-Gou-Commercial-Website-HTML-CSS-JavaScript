// 点击tab显示相应的登录方式。
var loginTabs = document.getElementById('login-tabs').getElementsByTagName('div');
var loginTabItems = document.getElementById('login-tab-items').getElementsByClassName('login-tab-item');
for (let i = 0; i < loginTabs.length; i++) {
  // 点击tab
  loginTabs[i].onclick = function () {
    // 去掉其它tab的选中颜色
    for (let i = 0; i < loginTabs.length; i++) {
      loginTabs[i].className = '';
    }
    // 让该tab选中
    this.className = 'login-tabs-active';
    // 去掉其它tabItem的选中
    for (let i = 0; i < loginTabItems.length; i++) {
      loginTabItems[i].className = 'login-tab-item';
    }
    // 让该tabItem选中
    loginTabItems[i].className = 'login-tab-item login-tab-item-active';
  }
}
// 把鼠标放在二维码上，显示手机图片
var qrCodes = document.getElementById('qr-code').getElementsByTagName('img');
qrCodes[0].onmouseenter = function () {
  qrCodes[1].style.display = 'inline-block';
}
qrCodes[0].onmouseleave = function () {
  qrCodes[1].style.display = 'none';
}