function calculateInsurance() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var horse_power = document.getElementById("horse").value;
	var country = document.getElementById("country").value;

	if (age=="") {
		alert("Please fill in your age!");
		return false;
	}
	else if (age < 18) {
		alert("You are not entitled to our insurance.")
		return false;
	}

	if (horse_power=="") {
		alert("Please fill in your car's horsepower!");
		return false;
	}

	if (country=="Austria") {
		var insurance = Math.round(Number(horse_power)*100/Number(age)+50);
	}
	else if (country=="Greece") {
		var insurance = Math.round(Number(horse_power)*120/Number(age)+100);
	}
	else if (country=="Hungary") {
		var insurance = Math.round(Number(horse_power)*150/(Number(age)+3)+50);
	}
	document.getElementById("quote").innerHTML= name + ", your insurance costs " + insurance +"€.";


	if (name=="") {
		document.getElementById("quote").innerHTML= name + "Your insurance costs " + insurance +"€.";
	}
}
document.getElementById("button").addEventListener("click", calculateInsurance, false);
