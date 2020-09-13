
//AutoScroll
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// for(var i=0; i<navMenuAnchorTags.length; i++){

// 	navMenuAnchorTags[i].addEventListener('click', function(event){
// 		// Preventing the default behaviour of anchor tag
// 		event.preventDefault();	

// 		//Adding the scrolling behaviour
// 		//fetching the content from the text, can be fetched from href also
// 		var targetSectionID = this.textContent.trim().toLowerCase();
// 		var targetSection = document.getElementById('targetSectionID');
// 		// console.log(targetSectionID);
// 		var targetSectionCoordinates = targetSection.getBoundingClientRect();
// 		var interval = setInterval(function(){
// 			if(targetSectionCoordinates.top <=0){
// 				clearInterval(interval);
// 				return;
// 			}
// 			window.scrollBy(0, 20);
// 		}, 20);

// 	});

// }








//Skill Bar Animation
var progressBars= document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills');
//Handling the scroll event
window.addEventListener('scroll', checkScroll);
var animationDone= false;


//width of the ars should be zero

function initialiseBars(){
	for(var bar of progressBars){
		bar.style.width = 0 + '%'
	}

}


initialiseBars();

function fillBars(){

	for(let bar of progressBars){
		let targetWidth = bar.getAttribute('data-bar-width');
		let currentWidth = 0;
		let interval = setInterval(function(){
			if(currentWidth > targetWidth){
				clearInterval(interval);
				return;
			}
			currentWidth++;
			bar.style.width = currentWidth + '%';
		}, 5);
	}

}


function checkScroll(){

	//You have to check whether skill section is visible.

	var coordinates = skillsContainer.getBoundingClientRect();
	//We want the animation to fire only once.
	if(!animationDone && coordinates.top <= window.innerHeight){
		animationDone = true;
		console.log('Skills Section Visible')
		fillBars();

	}else if(coordinates.top > window.innerHeight){

		animationDone=false;
		initialiseBars();

	}

}