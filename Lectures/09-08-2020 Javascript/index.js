
function doStuff() {
	
	var fixedDiv = document.getElementById("fixedDiv");
	
	// this sets the style tag directly, not an ideal solution
	//fixedDiv.style = "bottom: 60%";
	
	// this next one only works once
	// fixedDiv.classList.add("fixedMove");
	
	// this is the best way
	fixedDiv.classList.toggle("fixedMove");
}

// window is effectively the "web browser"

window.onload = function() {
	
	// DOM
	// Document Object Model
	
	// IMPORTANT!
	// I didn't add () here for doStuff
	document.getElementById("doStuffButton").onclick = doStuff;
}
