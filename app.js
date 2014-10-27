var clicker1 = document.getElementById('clicker1');
var clicker2 = document.getElementById('clicker2');
var counter1 = document.getElementById('counter1');
var counter2 = document.getElementById('counter1');
var count1 = counter1.textContent;
var count2 = counter2.textContent;

clicker1.onclick = function(){
	count1++;
	counter1.textContent = count1;
}
clicker2.onclick = function(){
	count2++;
	counter2.textContent = count2;
}