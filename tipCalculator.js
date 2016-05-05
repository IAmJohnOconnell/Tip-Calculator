//Script .js

//Custom Functions

function calculateTip() {
	
	//Store the data of the inputs
	var billAmount = document.getElementById("billAmount").value,
		serviceQuality = document.getElementById("serviceQuality").value,
		numPeople = document.getElementById("totalPeople").value;
	
	//Quick validation (when folks do silly things)
	if (billAmount === "" || serviceQuality === 0) {
		window.alert("Please enter some valuse to get this baby up and running!");
		return; //This will prevent the function from continuting
	}
	
	//Check to see if input is empty or >= to 1
	if (numPeople === "" || numPeople <= 1) {
		numPeople = 1; //If user enters nothing this ensures value is at least one
		
		document.getElementById("each").style.display = "none";
		
	} else {
		
		document.getElementById("each").style.display = "block";
	}
	
	//Do the math
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2)
	
	//Display the top
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}

//Hide tip amount on load

document.getElementById("totalTip").style.display = "none";

document.getElementById("each").style.display = "none";

//Clicking the button calls our custom function

document.getElementById("calculate").onclick = function () { calculateTip(); };