// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const inputHeight = document.querySelector('#inputHeight');
const inputWeight = document.querySelector('#inputWeight');
const submitButton = document.querySelector('#submitButton');

// Select parent table element
const pixelCanvas = document.querySelector('#pixelCanvas');

// Build table HTML using height and weight values
function makeGrid() {
  event.preventDefault();   // Prevent page refresh
  let tableHTML = '';
  // Use height value to set table height
  for(let i = 0; i < inputHeight.value; i++) {
    tableHTML += '<tr>';
    // Use weight value to set table width
    for(let j = 0; j < inputWeight.value; j++) {
      tableHTML += '<td></td>';
    }
    tableHTML += '</tr>';
  }
  pixelCanvas.innerHTML = tableHTML;
}

// Change table cell color using colorPicker value
function changeColor (event) {
  const cellClicked = event.target;
  // Check if event target is table cell, not table
  if(cellClicked.nodeName === 'TD') {
    const colorChoice = colorPicker.value;
    cellClicked.style.backgroundColor = colorChoice;
  }
}

// When submit button is clicked, build table HTML
submitButton.addEventListener('click', makeGrid);

// When table cell clicked, change background color
pixelCanvas.addEventListener('click', changeColor);
