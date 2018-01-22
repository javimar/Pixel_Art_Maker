// Globals constants are declared with "const" and capitalized, if they were to change, use "let"

// Secure the table
const CANVAS_GRID_TABLE = $("#pixel_canvas");

// color
let COLOR_PICKER = $("#colorPicker").val();

// Secure the inputs for height and width
const INPUT_HEIGHT = $("#input_height");
const INPUT_WIDTH = $("#input_width");

// Secure the submit button
const SUBMIT_BUTTON = $('input[type="submit"]');

let mouseDrag;

// When size is submitted by the user, call makeGrid()
function makeGrid()
{
  // Set CANVAS_GRID_TABLE size as N by M grid
  let gridHeight = INPUT_HEIGHT.val();
  let gridWidth = INPUT_WIDTH.val();

  // Clear the CANVAS_GRID_TABLE first
  CANVAS_GRID_TABLE.empty();

  // rows
  for (let i = 0; i < gridHeight; i++)
  {
    const cell = $("<tr></tr>");
    CANVAS_GRID_TABLE.append(cell);

    // cols
    for (let j = 0; j < gridWidth; j++)
    {
      cell.append("<td></td>");
    }
  }

  //Select color input
  $("td").on("click", function()
  {
    const color = $("#colorPicker").val();
    $(this).css("background-color", color);
  });
} // END OF FUNCTION makeGrid()


// Create table of grids when "Make Grid" is clicked
$("#makeGrid").on("click", function(event)
{
  makeGrid();
  event.preventDefault();
});


// Clear all cells
$("#cleanAllCells").click(function()
{
  $("td").css("background-color", "");
});

// Reset individual cell
$("#resetButton").on("click", function(event)
{
  CANVAS_GRID_TABLE.empty();
});


// Remove color from cell  doubleclick
CANVAS_GRID_TABLE.on("dblclick", "td", function()
{
  $(this).css("background-color", "");
});

// Drag and color multiple cells
CANVAS_GRID_TABLE.on("mousedown", "td", function()
{
  mouseDrag = true;
});

CANVAS_GRID_TABLE.on("mousemove", "td", function()
{
  color = $("#colorPicker").val();
  if (mouseDrag)
  {
    $(this).css("background-color", color);
  }
});

CANVAS_GRID_TABLE.on("mouseup mouseleave dragstart", function()
{
  mouseDrag = false;
});
