var colors = generateRandomColors(numSquares);     //or //[
				//"rgb(0, 0, 255)",
			 	//"rgb(255, 0, 255)",
			 	//"rgb(0, 255, 255)",	
			 	//"rgb(200, 0, 255)",
			 	//"rgb(0, 255, 0)",
			 	//"rgb(255, 0, 0)",
			 	//]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++){
	if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
	} else{
		squares[i].style.display = "none";
	}

}
});

hardBtn.addEventListener("click", function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function(){
	// generate all new colors 
	colors = generateRandomColors(numSquares); 
	//pick new random colors from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	
	this.textContent = "New colors";
	messageDisplay.textContent = "";
	//change colors 
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#7f5a58";
});



colorDisplay.textContent = pickedColor;


for(var i = 0; i<squares.length; i++){
	//add initial color to squares

	squares[i].style.backgroundColor = colors[i];
	//add click listeners to square
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare color to pickedColor
	if(clickedColor===pickedColor){
		messageDisplay.textContent = ("correct!");
		resetButton.textContent = "PLAY AGAIN??"
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again"
	}

	});
}

	function changeColors(color) {
		// loop through all squares
		for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
}
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(num){
		//make an array
		var arr = []
		//add num random colors to array
		for(var i = 0; i < num; i++){
			//get random color and push tto arr
			arr.push(randomColor())
		}
		// return that array
		return arr;
	}
	function randomColor(){
		//pick a red color from 0-255
		var r = Math.floor(Math.random() * 256);
		//green color
		var g = Math.floor(Math.random() * 256);
		//blue color
		var b = Math.floor(Math.random() * 256);

		return "rgb("+ r + ", " + g + ", " + b + ")";

	}

	