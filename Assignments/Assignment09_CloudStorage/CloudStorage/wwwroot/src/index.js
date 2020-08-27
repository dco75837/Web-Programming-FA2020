const { BlockBlobClient } = require("@azure/storage-blob");

var mainUrl = "api/images";

export function upload() {
    var name = document.getElementById("name").value;

    if (!name || name.length < 3) {
        showError("Enter at least three characters for the title.");
        return;
    }

    var file = document.getElementById('fileInput').files[0];
    if (!file) {
        showError("Choose a file.");
        return;
    }

    // TODO: make a POST request to your controller here, calling startUploadSuccess on a successful response from your server
}
window.upload = upload;

export function showError(error) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = error;
    setTimeout(function () {
        document.getElementById("error").style.display = "none";
    }, 3000);
}

export async function startUploadSuccess(data) {
    var file = document.getElementById('fileInput').files[0];

    const blockBlobClient = new BlockBlobClient(data.uploadUrl);

    await blockBlobClient.uploadBrowserData(file);

    uploadComplete(data.id);
}

export function uploadComplete(id) {
    // TODO: make a POST request to your server to tell the upload is complete.
    // then call refreshImages if the uploadComplete request is successful.
}

export function refreshImages() {
    $.ajax(mainUrl, {
        method: "GET",
        success: refreshImagesResult
    });
}
window.refreshImages = refreshImages;

export function refreshImagesResult(data) {
    var imagesDiv = document.getElementById("images");
    imagesDiv.innerHTML = '';

    // data is an array of ImageEntity
    data.forEach(addImage);
}

export function purge() {
    $.ajax(mainUrl, {
        method: "Delete",
        success: purgeResult
    });
}
window.purge = purge;

export function purgeResult() {
    document.getElementById("images").innerHTML = "";
}

export function addImage(image) {
    var imagesDiv = document.getElementById("images");

    // TODO: create an img element, set its "src" to the image url, and its "title" and "alt" attributes to the image name.
    // then append that img to imagesDiv
}

window.onload = refreshImages;