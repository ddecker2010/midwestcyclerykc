// JavaScript Document

function onLoad(){
	window.onscroll = function(){
		var speed = 10.0;
		document.body.style.backgroundPosition = (-window.pageXOffset*0.08) + "px " + (-window.pageYOffset*0.08) + "px ";	
	}
}