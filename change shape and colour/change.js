// //shape
// var s = document.getElementById('shape');

// //button 
// var col=document.getElementById('c-colour');

// col.addEventListener('click', function(){

// 	s.classList.toggle('shape-colour1,shape-colour2,shape-colour3')


// });

var curr= "square"

var shape=["square", "rectangle","circle", "triangle-right"];

var color=["red", "orange","green","maroon","pink","violet"];

var dark= document.getElementById('c-colour');

var changeShape= document.getElementById('c-shape');


//Generating Random colours 
dark.addEventListener('click',function(){

	var randColor= color[Math.floor(Math.random()*color.length)];
	document.getElementById("block").style.backgroundColor = randColor;
	
})

changeShape.addEventListener('click',function(){

	var randShape= shape[Math.floor(Math.random()*shape.length)];
	document.getElementById(curr).setAttribute("id",randShape);
	curr=randShape

})
