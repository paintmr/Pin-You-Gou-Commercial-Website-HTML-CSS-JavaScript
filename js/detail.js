// 切换先关分类和推荐品牌
var moreProductsCategoriesTabs = document.getElementById('more-products-categories-tabs').getElementsByTagName('li');
var moreProductsCategoriesTabItems = document.getElementById('more-products-categories-tab-items').getElementsByClassName('more-products-categories-tab-item');
for (let i = 0; i < moreProductsCategoriesTabs.length; i++) {
  moreProductsCategoriesTabs[i].onclick = function () {
    for (let i = 0; i < moreProductsCategoriesTabs.length; i++) {
      moreProductsCategoriesTabs[i].className = '';
    }
    this.className = 'more-products-categories-tabs-active';
    for (let i = 0; i < moreProductsCategoriesTabItems.length; i++) {
      moreProductsCategoriesTabItems[i].className = 'more-products-categories-tab-item';
    }
    moreProductsCategoriesTabItems[i].className = 'more-products-categories-tab-item more-products-categories-tab-item-selected';
  }
}
// 点击商品介绍里的显示更多参数，隐藏更多参数
var moreParaBtn = document.getElementById('more-para-btn');
var morePara = document.getElementById('more-para');
var lessParaBtn = document.getElementById('less-para-btn');
moreParaBtn.onclick = function () {
  morePara.style.display = 'block';
  lessParaBtn.style.display = 'block';
  this.style.display = 'none';
}
lessParaBtn.onclick = function () {
  morePara.style.display = 'none';
  this.style.display = 'none';
  moreParaBtn.style.display = 'block';
}


// 切换商品介绍，规格与包装，售后保障，商品评价，手机社区
var productDetailTabs = document.getElementById('product-detail-tabs').getElementsByTagName('li');
var productDetailTabItems = document.getElementById('product-detail-tab-items').getElementsByClassName('product-detail-tab-content');
for (let i = 0; i < productDetailTabs.length; i++) {
  productDetailTabs[i].onclick = function () {
    for (let i = 0; i < productDetailTabs.length; i++) {
      productDetailTabs[i].className = '';
    }
    this.className = 'product-detail-tabs-selected';
    for (let i = 0; i < productDetailTabItems.length; i++) {
      productDetailTabItems[i].className = 'product-detail-tab-content';
    }
    productDetailTabItems[i].className = 'product-detail-tab-content product-detail-tab-content-selected';
  }

}