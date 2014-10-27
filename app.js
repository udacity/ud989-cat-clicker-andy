var clicker = document.getElementById('clicker');
var counter = document.getElementById('counter');
//var count = parseInt(counter.textContent);
var count = counter.textContent;
clicker.onclick = function(){
	count++;
	counter.textContent = count;
}