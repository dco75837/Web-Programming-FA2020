//
// You should add comments for WHY, not WHAT you are doing.
//

/*
	REST
	REpresentational State Transfer

	1. Convention over Configuration
	2. Stateless
	
	CRUD - Create, Read, Update, Delete
	
	HTTP Verbs == HTTP Methods
	
	GET - Read data from the server
	POST - Create data on the server
		Returns to you the data you just created (plus maybe a little more)
	OPTIONS - Ask server what cross origins it supports
		CORS - Cross-Origin Resource Sharing
	DELETE - Deletes data from the server
	PUT - Updates (replaces) (and sometimes creates) data at a specific location
	PATCH - Updates (but does not replace) data at a specific location (we won't use this until a later assignment)
	
	How we talk to a server:
	1. URL
		WHERE do we want to go
		e.g. the student id number
	2. Body == Payload
		What do we want to create/update?
		e.g. The first name of a student
	3. Headers
		Metadata of the request
		e.g. the current time of the request

	How the server talks to us:
	1. Response Body / Payload
	2. Status Code
		200 - OK
		204 - NoContent, the server did not send a response body
		404 - Not Found
	3. Headers

*/

var mainUrl = "https://simpleserverbethel.azurewebsites.net/values";

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
			Value: document.getElementById("userValue").value
		})
	}
	).then(response => response.json())
	.then(responseJson => {
		simpleSuccess(responseJson);
	});
}

// https://simpleserverbethel.azurewebsites.net/values/3
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
			Value: document.getElementById("userValue").value
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
