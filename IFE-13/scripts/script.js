
(function() {
  /*  
  在注释下方写下代码
  给按钮button绑定一个点击事件
  在事件处理函数中
  获取aqi-input输入的值，并显示在aqi-display中
  */

  //封装获取ID函数
	var $ = function(id) {
    return document.getElementById(id);
  }

  $("button").onclick = function() {
    var num = $("aqi-input").value;
    if (num) {
      $("aqi-display").innerHTML = num;
    }else {
      alert("请输入");
    }
  }
})();