var tabList = document.getElementById('tablist').getElementsByTagName('li');
var tabItems = document.getElementsByClassName('tab-item');
// 点击切换被选中的tabName
for (let i = 0; i < tabList.length - 1; i++) {
  tabList[i].onclick = function () {
    for (let i = 0; i < tabList.length - 1; i++) {
      tabList[i].className = '';
    }
    this.className = 'style-red'
    // 点击切换被选中的tabContent
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].className = 'tab-item';
    }
    tabItems[i].className = 'tab-item tab-item-selected';
  }
}