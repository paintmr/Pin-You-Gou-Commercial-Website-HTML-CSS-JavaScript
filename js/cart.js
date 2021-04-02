// 购物车主体部分的复选框
var ckAllUp = document.getElementById('ck-all-up');
var ckAllDown = document.getElementById('ck-all-down');
// 拿到所有的商家和商品信息
var allShopWraps = document.getElementsByClassName('shop-goods-wrap');
// 数组里每个元素代表每个商铺的总复选框。
var allShopIpt = [];
// 每个键值对代表每个商铺（数字代码）及其对应的单个商品的复选框。
var allShopPrdIpt = {};
// 每个键值对代表每个商铺（数字代码）及其对应的单个商品。
var allShopPrd = {};
for (let i = 0; i < allShopWraps.length; i++) {
  allShopIpt[i] = allShopWraps[i].getElementsByClassName('shop-input')[0];
  allShopPrdIpt[i] = allShopWraps[i].getElementsByClassName('product-input');
  allShopPrd[i] = allShopWraps[i].getElementsByClassName('item-wrap');
}
// 遍历拿到每个商店的总复选框，点击每个商店总复选框时的动作
for (let i = 0; i < allShopIpt.length; i++) {
  allShopIpt[i].onclick = function () {
    // 根据商店序号去对象中遍历出所有的商品复选框
    for (let j = 0; j < allShopPrdIpt[i].length; j++) {
      // 根据是否全选中，决定该商品所有商品是否全选中
      allShopPrdIpt[i][j].checked = this.checked;
      if (this.checked) {
        allShopPrd[i][j].className = 'item-wrap item-selected';
      } else {
        allShopPrd[i][j].className = 'item-wrap';
      }
    }
    // 计算所有商店的所有商品是否全选了
    var flagShop = true;
    for (let m = 0; m < allShopIpt.length; m++) {
      if (!allShopIpt[m].checked) {
        flagShop = false;
        break;
      }
    }
    ckAllUp.checked = flagShop;
    ckAllDown.checked = flagShop;
  }
}
// 拿到所有商品的复选框
for (const key in allShopPrdIpt) {
  for (let i = 0; i < allShopPrdIpt[key].length; i++) {
    allShopPrdIpt[key][i].onclick = function () {
      // 确定是否给当前商品加高亮底色
      if (this.checked) {
        allShopPrd[key][i].className = 'item-wrap item-selected';
      } else {
        allShopPrd[key][i].className = 'item-wrap';
      }
      // 计算当前商店的商品复选框是否全选了
      var flag = true;
      for (let j = 0; j < allShopPrdIpt[key].length; j++) {
        if (!allShopPrdIpt[key][j].checked) {
          flag = false;
          break;
        }
      }
      allShopIpt[key].checked = flag;
      // 计算所有商店的所有商品是否全选了
      var flagShop = true;
      for (let m = 0; m < allShopIpt.length; m++) {
        if (!allShopIpt[m].checked) {
          flagShop = false;
          break;
        }
      }
      ckAllUp.checked = flagShop;
      ckAllDown.checked = flagShop;
    }
  }
}
// 点击上面的总的复选框时是否全选
ckAllUp.onclick = function () {
  // 拿到所有的商品复选框
  for (const key in allShopPrdIpt) {
    for (let i = 0; i < allShopPrdIpt[key].length; i++) {
      allShopPrdIpt[key][i].checked = this.checked;
    }
  }
  // 拿到所有商店的复选框
  for (let i = 0; i < allShopIpt.length; i++) {
    allShopIpt[i].checked = this.checked;
  }
  // 下面的总复选框
  ckAllDown.checked = this.checked;
  // 改变所有商品背景色
  for (const key in allShopPrd) {
    for (let i = 0; i < allShopPrd[key].length; i++) {
      if (this.checked) {
        allShopPrd[key][i].className = 'item-wrap item-selected';
      } else {
        allShopPrd[key][i].className = 'item-wrap';
      }
    }
  }
}
// 点击下面的总的复选框时是否全选
ckAllDown.onclick = function () {
  // 拿到所有的商品复选框
  for (const key in allShopPrdIpt) {
    for (let i = 0; i < allShopPrdIpt[key].length; i++) {
      allShopPrdIpt[key][i].checked = this.checked;
    }
  }
  // 拿到所有商店的复选框
  for (let i = 0; i < allShopIpt.length; i++) {
    allShopIpt[i].checked = this.checked;
  }
  // 下面的总复选框
  ckAllUp.checked = this.checked;
  // 改变所有商品背景色
  for (const key in allShopPrd) {
    for (let i = 0; i < allShopPrd[key].length; i++) {
      if (this.checked) {
        allShopPrd[key][i].className = 'item-wrap item-selected';
      } else {
        allShopPrd[key][i].className = 'item-wrap';
      }
    }
  }
}
// 猜你喜欢和特惠换购的切换
var moreProductsTabs = document.getElementById('more-products-tabs').getElementsByTagName('li');
var moreProductsTabItems = document.getElementsByClassName('more-products-tab-item');
for (let i = 0; i < moreProductsTabs.length; i++) {
  moreProductsTabs[i].onclick = function () {
    for (let i = 0; i < moreProductsTabs.length; i++) {
      moreProductsTabs[i].className = '';
    }
    this.className = 'more-products-tab-active';
    for (let i = 0; i < moreProductsTabItems.length; i++) {
      moreProductsTabItems[i].className = 'more-products-tab-item'
    }
    moreProductsTabItems[i].className = 'more-products-tab-item more-products-tab-item-selected'
  }
}
