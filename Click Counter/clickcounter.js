var c=0

var counter= document.getElementById('counter-box');

var clicks= document.getElementById('box');

counter.addEventListener('click', function(){

c++;

clicks.innerHTML= "The box is clicked:" + c;

});















