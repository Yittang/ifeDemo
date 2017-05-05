var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

(function () {

  /*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
  */

  var arr = ["一","二","三","四","五","六"];
  /*让这个二维数组从大到小排列*/
  aqiData.sort (function(m,n) {
    return n[1]-m[1];
  });

  for (var i = 0; i < aqiData.length; i++) {
    if (aqiData[i][1] > 60) {
      var list = document.getElementById("aqi-list");
      var newNode = document.createElement("li");  /*创建一个li标签*/
      list.appendChild(newNode); /*在ul里插入新创建的li标签*/   
      newNode.innerHTML = "第" + arr[i] +"名:" + aqiData[i]; /*文本赋值*/
    }
  }
})();