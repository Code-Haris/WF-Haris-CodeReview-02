	function calculateinsurance(){
		var a = document.getElementById("name").value;
		var b = Number(document.getElementById("age").value);
		var c = document.getElementById("Country").value;
		var d = Number(document.getElementById("horse").value);

		
		var result =0;
		if (c == "Austria") {
			result= (d*100)/(b+50);
		}
		else if(c=="Hungary"){
			result=(d*120)/(b+100);
		}
		else if (c=="Greece") {
			result=(d*150)/(b+53);
		}
		else{
			document.getElementById("result").innerHTML = "Something went Wrong";
		}
		document.getElementById("result").innerHTML = ""+ a + " your insurance costs " + result + " $";

	}
	var button = document.getElementById("btn");
	button.addEventListener("click",calculateinsurance,false);
