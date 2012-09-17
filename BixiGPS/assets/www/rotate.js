// Rotating Object
// copyright Stephen Chapman, 11th March 2006
// you may copy this script provided that you retain the copyright notice
var speed = 150;
var obj = pX = pY = pos = RR = null; 
function pageWidth() {
	return window.innerWidth != null? window.innerWidth: document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body != null? document.body.clientWidth:null;
} 
function pageHeight() {
	return window.innerHeight != null? window.innerHeight: document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body != null? document.body.clientHeight:null;
} 
function posLeft() {
	return typeof window.pageXOffset != 'undefined' ? window.pageXOffset:document.documentElement && document.documentElement.scrollLeft? document.documentElement.scrollLeft:document.body.scrollLeft? document.body.scrollLeft:0;
}
function posTop() {
	return typeof window.pageYOffset != 'undefined' ? window.pageYOffset:document.documentElement && document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop?document.body.scrollTop:0;
}
function iRotate() {
	obj = document.getElementById('rotate');
	obj.style.position = 'absolute'; 
	obj.style.visibility = 'visible'; 
	sRotate(); rotate();
}
function sRotate() {
	pX = (pageWidth() - obj.offsetWidth) / 2;  pY = (pageHeight() - obj.offsetHeight) /20; RR = (pageHeight() - (pY * 2) - obj.offsetHeight) / 25; pos=1; 
} 
function rotate()  {
	if (pos > 80) pos = 1; var nX = pX + (Math.cos(pos * (Math.PI/40)) * RR); var nY = pY + (Math.sin(pos * (Math.PI/40)) * RR); obj.style.left = Math.round(nX+posLeft()) + 'px'; obj.style.top = Math.round(nY+posTop()) + 'px'; pX = nX; pY = nY; pos++; setTimeout ('rotate()',speed); return;
}
window.onload = iRotate; 
window.onresize = sRotate;