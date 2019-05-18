function calculateTip() {
	
	//Store the data of the inputs
	var billAmount = document.getElementById("billAmount").value,
		serviceQuality = document.getElementById("serviceQuality").value,
		numPeople = document.getElementById("totalPeople").value;
	
	//Quick validation (when folks do silly things)
	if (billAmount === "0.00" && serviceQuality == 0) {
		window.alert('Hey! So, what are you even doing here?');
	}
	else if (billAmount === "0.00" && serviceQuality !== 0) {
		window.alert("Woah! Get a load a Mr. FreeEats over here!");
	} 
	else if (billAmount >= "0.00" && serviceQuality == 0) {
		window.alert('Come on, be honest. How was it?');
		return; //This will prevent the function from continuting
	}

	//Check to see if input is empty or >= to 1
	if (numPeople === "" || numPeople <= 1) {
		numPeople = 1; //If user enters nothing this ensures value is at least one
		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	}

	//Force decimal places for price input (NEEDS MOBILE TESTING)
	function setTwoNumberDecimal(event) {
		this.value = parseFloat(this.value).toFixed(2);
	}

	billAmount.onchange = setTwoNumberDecimal;
	
	//Do the math
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2)
	
	//Display the tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}

//Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls our custom function
document.getElementById("calculate").onclick = function () { calculateTip(); };