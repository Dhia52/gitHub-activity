let button = document.getELementById("button");
let body = document.querySelector("body");

//Turns text color to green on whole document
button.addEventListener(function(){ 
	body.style.color = "green";
	//Button disappears
	button.style.display = "none";
});
