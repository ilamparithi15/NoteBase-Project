var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");
var container = document.querySelector(".container");
var addnote = document.getElementById("add-note");
var notetitleinput = document.getElementById("note-title-input");
var notenameinput = document.getElementById("note-name-input");
var notedescriptioninput = document.getElementById("note-description-input");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

addnote.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "note-container");
    div.innerHTML = `
        <h2>${notetitleinput.value}</h2>
        <h5>${notenameinput.value}</h5>
        <p>${notedescriptioninput.value}</p>
        <button onclick="deletenote(event)">Delete</button>
    `;
    container.append(div);

    // Clear the input fields
    notetitleinput.value = "";
    notenameinput.value = "";
    notedescriptioninput.value = "";

    // Hide the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletenote(event) {
    event.target.parentElement.remove();
}
