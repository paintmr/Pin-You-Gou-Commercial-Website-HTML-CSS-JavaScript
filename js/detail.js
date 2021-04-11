// 切换相关分类和推荐品牌
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

// 切换评论顶部被选中的小方块
var generalComments = document.getElementById('general-comments').getElementsByTagName('span');
for (let i = 0; i < generalComments.length; i++) {
  generalComments[i].onclick = function () {
    for (let i = 0; i < generalComments.length; i++) {
      generalComments[i].className = '';
    }
    this.className = 'general-comments-selected';
  }
}

// 商品放大镜效果
var productPic = document.getElementById('product-pic');
var mask = document.getElementById('mask');
var imgBigWrap = document.getElementById('img-big-wrap');
var imgBig = document.getElementById('img-big');
// 移入鼠标，显示mask和放大图片
productPic.addEventListener('mouseover', function () {
  mask.style.display = 'block';
  imgBigWrap.style.display = 'block';
})
// 鼠标离开，隐藏mask和放大图片
productPic.addEventListener('mouseout', function () {
  mask.style.display = 'none';
  imgBigWrap.style.display = 'none';
})
// mask跟着鼠标移动
productPic.addEventListener('mousemove', function (e) {
  // 在鼠标移入imgWrap的一瞬间，取得该瞬间鼠标相对于productPic的top和left值
  var mouseImgWrapLeft = e.pageX - productPic.offsetLeft;
  var mouseImgWrapTop = e.pageY - productPic.offsetTop;
  // 鼠标位于mask中间
  var maskX = mouseImgWrapLeft - mask.offsetWidth / 2;
  var maskY = mouseImgWrapTop - mask.offsetHeight / 2;
  // mask不能跑到productPic的外面
  var maskXMax = productPic.offsetWidth - mask.offsetWidth;
  var maskYMax = productPic.offsetHeight - mask.offsetHeight;
  maskX = maskX <= 0 ? 0 : maskX;
  maskX = maskX >= maskXMax ? maskXMax : maskX;
  maskY = maskY <= 0 ? 0 : maskY;
  maskY = maskY >= maskYMax ? maskYMax : maskY;
  // 把鼠标的值赋给mask
  mask.style.left = maskX + 'px';
  mask.style.top = maskY + 'px';
  // 鼠标移动的时候，大图在其盒子里移动。映射关系：mask在productPic里动 相当于 大图的盒子在大图上动
  // 公式maskX / maskXMax = imgBigWrapX / imgBigWrapXMax
  // 大图的盒子在X轴上的最大距离
  var imgBigWrapXMax = imgBig.offsetWidth - imgBigWrap.offsetWidth;
  // 大图的盒子在y轴上的最大距离
  var imgBigWrapYMax = imgBig.offsetHeight - imgBigWrap.offsetHeight;
  // mask移动时，大图的盒子移动的距离(事实上是大图在移动，所以赋值的时候方向要为复数)
  var imgBigWrapX = maskX * (imgBigWrapXMax / maskXMax);
  var imgBigWrapY = maskY * (imgBigWrapYMax / maskYMax);
  imgBig.style.left = -imgBigWrapX + 'px';
  imgBig.style.top = -imgBigWrapY + 'px';
  console.log(imgBig.style.left);
})