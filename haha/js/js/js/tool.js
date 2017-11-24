
/*
	编写一个库
*/
/*
	parent 从哪个节点开始查
	className  查询条件
*/
function elementsByClassName(parent, className){
	//1、将parent下的子节点全部找到
	var nodes = parent.getElementsByTagName("*");
	//2、循环遍历，找出符合条件的
	var result = []; //存放符合条件的节点
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].className == className){
			result.push(nodes[i]);
		}
	}
	return result;
}

function $(vArg){
	//区分
	if(vArg[0] == "#"){//id
		return document.getElementById(vArg.substring(1));
	}else if(vArg[0] == "."){ //class
		return document.getElementsByClassName(vArg.substring(1));
	}else{
		//前五个字母
		var str = vArg.substring(0, 5);
		if(str == "name="){
			return document.getElementsByName(vArg.substring(5));
		}else{
			//tagName
			return document.getElementsByTagName(vArg);
		}
	}
}

function randomColor(){
	var color = "rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ",1)";
	return color;
}

/*
	浏览器兼容性写法
*/
function getStyle(elem, style){
	return elem.currentStyle ? elem.currentStyle[style] : getComputedStyle(elem)[style];
}

function createElementWidthTxt(tagName, txt){
	var node = document.createElement(tagName);
	var oTxt = document.createTextNode(txt);
	node.appendChild(oTxt);
	return node;
}








