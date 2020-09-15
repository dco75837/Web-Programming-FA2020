
//
// You should add comments for WHY, not WHAT you are doing.
//

function parse() {
	var userInput = document.getElementById("userInput").value;
	var results = document.getElementById("results");
	
	// clear out the previous parse
	results.innerHTML = "";
	
	try {
		var userJson = JSON.parse(userInput);
	} catch (error) {
		// this breaks rule 2, only in-page errors are allowed
		// alert(error);
		
		displayError(error);
		return;
	}
	
	// from here on out, we have a real JSON object in userJson.
	
	if (!Array.isArray(userJson.userArray)) {
		displayError("The userArray key should have been an array");
		return;
	}
	
	var ul = document.createElement("ul");
	results.appendChild(ul);
	
	userJson.userArray.forEach(function(arrayElement) {
		var li = document.createElement("li");
		
		if (typeof arrayElement === "string") {
			li.appendChild(document.createTextNode("STRING! " + arrayElement));
		} else if (typeof arrayElement === "number") {
			li.appendChild(document.createTextNode("NUMBER! " + arrayElement));
		} else if (typeof arrayElement === "object") {
			if (arrayElement.name) {
				li.appendChild(document.createTextNode("It was an object, and it's name is: " + arrayElement.name));
			} else {
				li.appendChild(document.createTextNode("It was an object"));
			}
		}
		ul.appendChild(li);
	});
}

function displayError(error) {
	document.getElementById("error").innerHTML = error;
}


window.onload = function() {
	document.getElementById("parseButton").onclick = parse;
}
