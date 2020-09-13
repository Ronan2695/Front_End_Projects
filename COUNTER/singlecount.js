var click= document.getElementById('press');
var current = document.querySelector('.current');
var next= document.querySelector('.next');


var i=0
click.addEventListener('click', function(){

var number= parseInt(document.getElementById('nos').value);	
	
	setInterval(function(){
		if(i<=number)
		{
			current.innerText=i;
			i++;
		}

   },1000);

});
