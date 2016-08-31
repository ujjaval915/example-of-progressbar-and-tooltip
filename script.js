
// input to check number only 
function isNumber(event) {
	console.log(event.key);
	var numbers = /^[0-9]+$/;
	if((event.key).match(numbers)){
		return true;
	} else {
		return false;
	}

}


//progressbar increment as per the input value
function progressbar() {
	var elem = document.getElementById("fund-Progress-Bar");
	//Set Max Limt to 999 for fund 
	var maxLimit = 999;
	//progressBar initiallize to 0
	var width = 0;

	//getting the fund value enter by user 
	var value = document.getElementById("fund").value;
	
	//tooltip showing how much fund is still left 
	if(value == maxLimit){
		document.getElementById("tooltip").innerHTML = "All necessary fund collected for this project";
	} else {
		document.getElementById("tooltip").innerHTML = "$" +(maxLimit - value) + " still needed for this project";
	}
	console.log(value);
	
	// Calcualte the Max limit percentage for width of progressBar 
	var maxLimit = (value == maxLimit) ? maxLimit : ( (value / maxLimit) * 100);

	//callig the fram function 
	var id = setInterval(frame, 10);

	//increment progressBar width dynamically 
	function frame() {

		//if user enter 0 then progress bar width 0
		if(maxLimit == 0) {
			width = 0;
			elem.style.width = width + "%";
			elem.style.display = "none";
			clearInterval(id);
		} else if(maxLimit == 999) {
			width = 100;
			elem.style.width = width + "%";
			elem.style.display = "block";
			document.getElementById("progress-Bar-label").innerHTML = width * 1 + "%";
			clearInterval(id);
		} else if(width >= maxLimit){            // if Max Limit 100 then stop function call
				clearInterval(id);
		} else {                                 //incremetn the width untill Maxlimit
			width++;
			elem.style.width = width + "%";
			elem.style.display = "block";
			document.getElementById("progress-Bar-label").innerHTML = width * 1 + "%";   //setting progresBar width
		}
	}
}


//Count letter occurence in string 
function countLetter(){

	//getting letter enter by user 
	var letter = document.getElementById("character").value;
	console.log(letter);

	//getting string 
	var str =    document.getElementById("p1").innerHTML;
	console.log(str);
	var count = 0;
	//Regular expression method
	// var pattern = new RegExp(letter,"gi");  // letter , global and case insensitive 
	// var count = str.match(pattern).length;  //compare letter globally 
	// console.log(count);



	//using compare all character in the string usign for loop
	for (var i = 0 ; i < str.length ; i++){
		//letter in word is equal to letter pass by user input increment count 
		if(str[i] == letter) {
			count ++;
		}
	}

	document.getElementsByTagName("p")[2].innerHTML = "The letter \"" +letter + "\" occurs " +  count + " within the paragrph";

}

