/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  coding here
  */

  /*
  data = [
    ["北京空气质量：", 90],
    ["北京空气质量：", 90]
    ……
  ]
  */
    var source = document.getElementById("source");
    var sourceLi = source.getElementsByTagName("li");
    var data = [];
    for (var i = 0; i < sourceLi.length; i++) { 
      data[i] = sourceLi[i].innerText.split("：");
    }
    console.log(data);
    return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
    for (var j = 0; j < data.length; j++) {
      data.sort(function(n1, n2) {
        return n2[1] - n1[1];
      })
    }
    return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    var resort = document.getElementById("resort");
    var str = "";
    for (var k = 0; k < data.length; k++) {
      str = str + "<li>第" + (k + 1) + "名" + ": " + data[k][0] + "：" + "<b>" + data[k][1] + "</b></li>";
    }
    resort.innerHTML = str;
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}


function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    var btn = document.getElementById("sort-btn");
    btn.addEventListener("click", function() {
      btnHandle();
    })
}

init();

