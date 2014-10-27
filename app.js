var clicker = document.getElementById('clicker');
var counter = document.getElementById('counter');
var count = parseInt(counter.textContent);

clicker.onclick = function(){
	count = count+1;
	counter.textContent = count;
}