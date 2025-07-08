var start = new Date().getTime();
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function move() {
    const shape = document.getElementById("shape");

    // Random position (within viewport limits)
    const left = Math.random() * 300;
    const top = Math.random() * 300;

    // Random size between 100px and 500px
    const size = Math.random() * 400 + 100;

    // Apply styles
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = size + "px";
    shape.style.height = size + "px";
    shape.style.display = "block";
    shape.style.backgroundColor = getRandomColor();
    shape.style.borderRadius = "0"; // ✅ always square

    // Record start time
    start = new Date().getTime();
}

move();
document.getElementById("shape").onclick = function() {
  var end = new Date().getTime();
  this.display = "none";
  var timeTaken = (end - start) / 1000; // Convert to seconds
  alert("You clicked the shape in " + timeTaken + " seconds!");
  move(); // Move the shape again after clicking
}
