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
	OPTIONS - Ask server what cross origins it supports; we never send this directly; the web browser does this automatically
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
		Content-Type: The type of data going to the server, i.e. application/json, text/plain
		Content-Length: an int indicating the size of the body/payload
		Accept: Similar to Content-Type, we can ask the server for the data type we want; fyi, servers can ignore this
		User-Agent: Browser name
		Authorization: Send your credentials to the server, such as a password or JSON Web Token
		Location: Used with 300 level status codes, to send you somewhere else

	How the server talks to us:
	1. Response Body / Payload
	2. Status Code
		see below section
	3. Headers
		Content-Type: The type of data coming back from the server, i.e. application/json, image/png, image/jpg
		Content-Length: an int indicating the size of the body/payload
		Date: The time of the response
	
	
	Status Codes
	
	2XX - 200 is less specific than 202, generally more specific is better.
	
	100 - Http continuation, big requests, we won't use these
	
	
	200 - OK
		201 - Created, used when new data was created on the server, such as POST or PUT
		202 - Accepted, work is not done yet, long running jobs going to happen in the background
		204 - NoContent, the body/payload is empty, i.e. Content-Length is 0. Usually used in DELETE requests
	
	300 - Redirect
		301 - Moved Permanently, the page is never going to be here again
		307 - Moved Temporarily, the client should keep coming back again after the cache expires
	
	400 - BadRequest, "It's YOUR fault (The client)"
		401 - Unauthorized, your credentials were not accepted; username/password mismatch
		403 - Forbidden, your credentials WERE accepted, but you can't do that action
		404 - NotFound
	
	500 - InternalServerError, "It's the SERVER's fault"
		503 - Service Unavailable - the server's too busy, but try your request again "soon", Retry-After
	
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
