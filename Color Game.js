var colors=generateRandomColor(6);
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var m=0;
var squares=document.querySelectorAll(".squares");
var h1=document.querySelector("h1");
var messageDisplay=document.querySelector("#messageDisplay");
var reset=document.querySelector("#reset");
var colorDisplay=document.querySelector("#colorDisplay");
var pickedColor=pickColor();
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	m=1;
	colors=generateRandomColor(3);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<3;i++)
	{
		squares[i].style.background=colors[i];
	}
	for(i=3;i<squares.length;i++)
	{
		squares[i].style.background="#232323";
	}
	messageDisplay.textContent="";
	h1.style.background="rgb(105,105,255)";
});

hard.addEventListener("click",function(){
	m=0;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors=generateRandomColor(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	messageDisplay.textContent="";
	h1.style.background="rgb(105,105,255)";
});

reset.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors=generateRandomColor(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	messageDisplay.textContent="";
	h1.style.background="rgb(105,105,255)";
	m=0;
});
colorDisplay.textContent=pickedColor;
for(i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="CORRECT";
			reset.textContent="Play Again?";
			colorChange(m);
			h1.style.background=pickedColor;
		}
		else
		{
			this.style.background="#232323";
			messageDisplay.textContent="TRY AGAIN";
		}

	});

}

 function colorChange(n)
 {
 	if(n==0)
 	{
 	for(var j=0;j<squares.length;j++)
			{
				squares[j].style.background=pickedColor;
			}
	}
	else
	{
		for(var k=0;k<3;k++)
			{
				squares[k].style.background=pickedColor;
			}
	}
}
 function pickColor()
 {
 	var random=Math.floor(Math.random()*colors.length);
 	return colors[random];
 }
 function generateRandomColor(num)
 {
 	var arr=[num];
 	for(i=0;i<num;i++)
 	{
 		arr[i]=randomColor()
 	}
 	return arr;
 }
 function randomColor()
 {
 	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	return "rgb("+r+", "+g+", "+b+")";
 }