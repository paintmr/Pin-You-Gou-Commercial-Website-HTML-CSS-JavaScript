var search = document.getElementById('search');
search.onfocus = function () {
  if (this.value === '请输入关键字') {
    this.value = '';
  }
}
search.onblur = function () {
  if (this.value === '') {
    this.value = '请输入关键字';
  }
}