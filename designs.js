
// submit button procedure to get the size
document.getElementById('sizePicker').onsubmit = function() {
  inputSubmission();
};

// size input function
function inputSubmission() {
  event.preventDefault();  // check again as vs studio code says event is depreciated,but still in MDN
  let gridHeight = document.getElementById("inputHeight").value;
  let gridWidth = document.getElementById("inputWidth").value;
  makeGrid(gridHeight, gridWidth);
}

// once the size is submitted, call makeGrid() and generate the grid Table
function makeGrid(gridHeight, gridWidth) {
  let table = document.getElementById("pixelCanvas");
  let gridTable = '';

  for (let row = 1; row <= gridHeight; row +=1){
    gridTable += "<tr class='row" + row + "'>";
    for (let col = 1; col <= gridWidth; col +=1){
      gridTable += "<td class='cell' id='row" + row + "col" + col + "'></td>";
    }
    gridTable += "</tr>";
  }

  // add generated grid Table into the html <table> element
  table.innerHTML = gridTable;

  // once the grid Table is displaying wait for click event
  clickEvent();
}

// Select color input
let colorPicker = document.getElementById("colorPicker");
let pickedColor = colorPicker.value;

// once a color is selected, pick color value and return:
colorPicker.addEventListener("input", function() {
  pickedColor = colorPicker.value;
  }, false);

// listen to clicked events on color and cells
function clickEvent() {
  let clickedCell = document.getElementsByClassName('cell');
  for (let i = 0; i < clickedCell.length; i +=1) {
    clickedCell[i].addEventListener("click",  function(event) {
      let clickedCell = event.target;
      clickedCell.style.backgroundColor = pickedColor;
    });
  }
}
