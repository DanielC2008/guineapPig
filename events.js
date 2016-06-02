var outputEl = document.getElementById("output-target");
var articleEl = document.getElementsByClassName("article-section");
var mouseOverHeader = document.getElementById("page-title");
var inputEl = document.getElementById("keypress-input");
var addColorButton = document.getElementById("add-color");
var getGuineaPig = document.getElementById("guinea-pig");
var addHulkify = document.getElementById("make-large");
var addCapture = document.getElementById("add-border");
var addRounded = document.getElementById("add-rounding");


function handleSectionClick(event) {
  outputEl.innerHTML = "You clicked the " + event.target.innerHTML + " section!";
}
 
for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}

mouseOverHeader.addEventListener("mouseover", handleMouseHeader); 
function handleMouseHeader(event) {
	outputEl.innerHTML = `You moved your mouse over the header`;
}

mouseOverHeader.addEventListener("mouseleave", handleMouseLeave);
function handleMouseLeave(event) {
	outputEl.innerHTML = `Why you leave???`;
}

inputEl.addEventListener("keydown", handleCopyInput);
function handleCopyInput(event) {
	outputEl.innerHTML = inputEl.value;
}

addColorButton.addEventListener("click", changeColor);
function changeColor(event) {
	getGuineaPig.classList.toggle("blue");
}

addHulkify.addEventListener("click", changeSize);
function changeSize(event) {
	getGuineaPig.classList.toggle("size");
}

addCapture.addEventListener("click", changeBorder);
function changeBorder(event) {
	getGuineaPig.classList.toggle("border");
}

addRounded.addEventListener("click", changeRadius);
function changeRadius(event) {
	getGuineaPig.classList.toggle("radius");
}

