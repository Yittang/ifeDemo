//构造id选择器函数
var $ = function(id) {
	return document.getElementById(id);
}

var text = $("text");
var queue = $("queue");

//判断输入框中是否有内容
function init() {
	if (!text.value) {
		alert("输入不能为空");
		return false;
	}
}

//判断队列是否为空
function own() {
	if (!queue.innerHTML) {
		alert("队列已经为空了，移除失败！");
		return false;
	}
}

//左入点击函数
$("leftIn").onclick = function() {
	var b = document.createElement("b");
	init();
	if(text.value) {		
		b.innerHTML = text.value;
		queue.insertBefore(b, queue.firstChild);
	}
}

//右入点击函数
$("rightIn").onclick = function() {
	var b = document.createElement("b");
	init();
	if(text.value) {		
		b.innerHTML = text.value;
		queue.appendChild(b);
	}	
}

//左出点击函数
$("leftOut").onclick = function() {
	own();
	if(queue.hasChildNodes()) {	
		alert(queue.firstChild.innerHTML);	
		queue.removeChild(queue.childNodes[0]);
	}
}

//右出点击函数
$("rightOut").onclick = function() {
	own();
	if(queue.hasChildNodes()) {
		alert(queue.lastChild.innerHTML);	
		queue.removeChild(queue.lastChild);
	}
}


//点击某个数字的时候移除它
queue.onclick= function() {
	var x = del();
	queue.removeChild(x);
}

var del = function(event) {
	event = event || window.event;//为什么要加上window.event
	return event.target;
}