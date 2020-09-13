// var first = document.getElementsByClassName('box-2');
// c=0;
// first[0].addEventListener('click', function(){

// 	var display = document.getElementById('inner-div-2');

// 	c++;
// 	d=7
// 	display.innerText=d;

// })


var buttons=  document.getElementsByClassName('box');
var display = document.getElementById('display');
// var button2=  document.getElementsByClassName('box-2');
// var button3=  document.getElementsByClassName('box-3');
// var button4=  document.getElementsByClassName('box-4');
// var button5=  document.getElementsByClassName('box-1');

var operand1 = 0;
var operand2 = null;
var operator = null;

//We are iterating through every box(buttons)
//We are defining a for loop to iterate through it
for(var i=0; i<buttons.length; i++)
{
	buttons[i].addEventListener('click', function(){
	
	//getting the value from the data-value attribute
	var value = this.getAttribute('data-value');
	
		if( value =='+')
		{

			operator='+'
			// we are saving the first operand
			// fetching the text of display
			operand1= parseFloat(display.textContent);
			display.innerText= ""

		}

		else if( value =='-')
		{

			operator='-'
			// we are saving the first operand
			// fetching the text of display
			operand1= parseFloat(display.textContent);
			display.innerText= ""

		}
		
		else if( value =='/')
		{

			operator='/'
			// we are saving the first operand
			// fetching the text from display
			operand1= parseFloat(display.textContent);
			display.innerText= ""

		}

		else if( value =='*')
		{

			operator='*'
			// we are saving the first operand
			// fetching the text of display
			operand1= parseFloat(display.textContent);
			display.innerText= ""

		}

		else if( value =='%')
		{

			operator='%'
			// we are saving the first operand
			// fetching the text of display
			operand1= parseFloat(display.textContent);
			operand1= operand1 / 100;
			display.textContent= operand1

		}
		
		else if( value =='=')
		{
			//Appending the result for the next operatoion
			operand2= parseFloat(display.textContent);
			result=eval(operand1+operator+operand2);
			display.innerText= result
			if (result)
			{
				display.textContent=result;
				operand1= result;
				operand2= null;
				operator= null;
			}
		}

		else if( value =='cancel')
		{
			
			// operand2= parseFloat(display.textContent);
			// result=eval(operand1+operator+operand2);
			display.innerText=" "
		}


		else
		{
			display.innerText+=value;
		}


	});



}