var ball=document.getElementById('circle');
//This value will be added and substracted from the movement of the ball
let moveBy=10;

window.addEventListener('load', function(){

	ball.style.position='absolute';
	ball.style.left=0;
	ball.style.top=0;

});



// Function will collect the event.
document.addEventListener('keydown', function(event){

	console.log('Key Down', event.keyCode);

	//When A is pressed
	if(event.keyCode===65)
	{
		circle.style.left= parseInt(circle.style.left)-moveBy + 'px';

	}

	//When D is pressed

	else if(event.keyCode===68)
	{
		circle.style.left= parseInt(circle.style.left)+moveBy + 'px';

	}

 	//When W is pressed
	else if(event.keyCode===87)
	{
		circle.style.top= parseInt(circle.style.top) - moveBy + 'px';
		
	}

	//When S is pressed
	else if(event.keyCode===83)
	{
		circle.style.top= parseInt(circle.style.top) + moveBy + 'px';
	
	}

});