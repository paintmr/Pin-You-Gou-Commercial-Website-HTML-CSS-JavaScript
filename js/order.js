var addresses = document.getElementById('addresses').getElementsByTagName('li');
var names = document.getElementsByClassName('name');
var moreAddresses = document.getElementById('more-addresses');
var oneAddress = document.getElementById('one-address');
// 点击展示更多地址
moreAddresses.onclick = function () {
  for (let i = 0; i < addresses.length; i++) {
    // 把未选中的隐藏地址展示出来
    if (addresses[i].className !== 'address address-selected') {
      addresses[i].className = 'address show-address';
    }
  }
  // 隐藏“展示更多”的按钮
  this.className = "more-addresses";
  // 显示“只展示1个”的按钮
  oneAddress.className = 'more-addresses more-addresses-btn'
}
// 点击只展示被选中的1个地址
oneAddress.onclick = function () {
  for (let i = 0; i < addresses.length; i++) {
    // 隐藏未选中的地址
    if (addresses[i].className !== 'address address-selected') {
      addresses[i].className = 'address';
    }
  }
  //隐藏“只展示1个”的按钮
  this.className = "more-addresses";
  // 显示“展示更多”的按钮
  moreAddresses.className = 'more-addresses more-addresses-btn'
}
// 改变被选中的地址
for (let i = 0; i < addresses.length; i++) {
  addresses[i].onclick = function () {
    // 先把所有地址设置为未选中
    for (let i = 0; i < addresses.length; i++) {
      addresses[i].className = 'address show-address';
    }
    // 把被点击的地址设置为选中
    this.className = 'address address-selected';
  }
}

// 选择付款方式
var payment = document.getElementById('payment').getElementsByTagName('li');
for (let i = 0; i < payment.length - 1; i++) {
  payment[i].onclick = function () {
    for (let i = 0; i < payment.length; i++) {
      payment[i].className = '';
    }
    this.className = 'payment-selected';
  }
}

