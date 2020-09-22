var mainUrl = "https://localhost:44338/students";

function runGet() {
	
	fetch(mainUrl).then(response => response.json())
	.then(responseJson => {
		simpleSuccess(responseJson);
	});
}

function runGetOne() {
	
	fetch(mainUrl + "/" + document.getElementById("userIndex").value).then(response => response.json())
	.then(responseJson => {
		simpleSuccess(responseJson);
	});
}

function runPost() {
	
	fetch(mainUrl,
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json" // mime type, eg. image/jpg, image/png document/ppt 
		},
		body: JSON.stringify({
			FirstName: document.getElementById("firstName").value,
			LastName: document.getElementById("lastName").value
		})
	}
	).then(response => response.json())
	.then(responseJson => {
		simpleSuccess(responseJson);
	});
}

function runDelete() {
	fetch(mainUrl + "/" + document.getElementById("userIndex").value,
	{
		method: "DELETE"
	}).then(response => {
		simpleSuccess("Delete worked!");
	});
}

function runPut() {
	
	fetch(mainUrl + "/" + document.getElementById("userIndex").value,
	{
		method: "PUT",
		headers: {
			"Content-Type": "application/json" // mime type, eg. image/jpg, image/png document/ppt 
		},
		body: JSON.stringify({
			FirstName: document.getElementById("firstName").value,
			LastName: document.getElementById("lastName").value
		})
	}
	).then(response => response.json())
	.then(responseJson => {
		simpleSuccess(responseJson);
	});
}

function simpleSuccess(data) {
	document.getElementById("results").innerHTML = JSON.stringify(data);
}

window.onload = function() {
	document.getElementById("getButton").onclick = runGet;
	document.getElementById("getOneButton").onclick = runGetOne;
	document.getElementById("postButton").onclick = runPost;
	document.getElementById("deleteButton").onclick = runDelete;
	document.getElementById("putButton").onclick = runPut;
}
