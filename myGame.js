document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";
document.body.style.fontSize = "3vw";
document.body.style.fontFamily = "'Arial', sans-serif";


var divButtons = document.createElement("div");
divButtons.style.width = "100%";
divButtons.style.height = "20vh";
divButtons.style.border = "1px solid black";
divButtons.style.position = "relative";
divButtons.style.top = "0";
divButtons.style.display = "flex";
divButtons.style.boxSizing = "border-box";
document.body.appendChild(divButtons);

var button1 = document.createElement("button");
button1.style.fontSize = "3vw"; 
button1.style.width = "20%";
button1.style.padding = "10px 20px"; 
button1.textContent = "Screen 1";
button1.onclick = function() {
  switchScreen("screen1");
};

var button2 = document.createElement("button");
button2.style.fontSize = "3vw"
button2.style.width = "20%";
button2.style.padding = "10px 20px"; 
button2.textContent = "Screen 2";
button2.onclick = function() {
  switchScreen("screen2");
};

divButtons.appendChild(button1);
divButtons.appendChild(button2);


var divScreens = document.createElement("div");
divScreens.style.border = "1px solid black";
divScreens.style.width = "100%";
divScreens.style.height = "calc(100vh - 20vh)";
divScreens.style.boxSizing = "border-box"; 
document.body.appendChild(divScreens);

var screens = [];

function createScreen(name) {
    var screen = {};
    screen.name = name;
    screen.element = document.createElement("div");
    screen.element.id = name;
    screen.element.style.border = "1px solid black";
    screen.element.style.boxSizing = "border-box";
    screen.element.style.width = "100%";
    screen.element.style.height = "100%";
    screen.element.style.color = "white"; // High contrast color
    screen.element.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)"; // Text shadow
    screen.element.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent background color
    if (name === "screen1") {
        screen.element.style.display = "block";

        screen.element.style.backgroundImage = "url('https://cdn.midjourney.com/bc8f5b0a-1381-4763-bb40-0e951987197f/0_0.webp')"; 
        screen.element.style.backgroundSize = "cover";
        screen.element.style.backgroundPosition = "center";

      } else {     
        screen.element.style.display = "none";
        screen.element.style.backgroundImage = "url('https://cdn.midjourney.com/be7257c2-e827-4be6-9a2d-91f212834e7c/0_2.webp')"; 
        screen.element.style.backgroundSize = "cover";
        screen.element.style.backgroundPosition = "center";        
      }

    if (name === "screen2") {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        screen.element.appendChild(canvas);  
    }
    screen.element.innerHTML = name;
    divScreens.appendChild(screen.element);
    screens.push(screen);
  }

function switchScreen(name) {
  for (var i = 0; i < screens.length; i++) {
    if (screens[i].name == name) {
      screens[i].element.style.display = "block";
    } else {
      screens[i].element.style.display = "none";
    }
  }
}

createScreen("screen1");
createScreen("screen2");


document.addEventListener("keydown", function(event) {
  if (event.keyCode == 39) {
    switchScreen("screen2");
  } else if (event.keyCode == 37) {
    switchScreen("screen1");
  }
});


function updateButtonStyles() {
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  // Determine the larger of the viewport width and height
  // var largerDimension = Math.max(viewportWidth, viewportHeight);
  var viewportDiagonal = Math.sqrt(2 * viewportWidth * viewportHeight);

  // Set the font size based on the virwport diagonal size
  var fontSize = viewportDiagonal * 0.02; // Adjust the multiplier as needed

  button1.style.fontSize = fontSize + "px";
  button2.style.fontSize = fontSize + "px";
  document.body.style.fontSize = 1.5 * fontSize + "px";
}

// Call the function to set the initial styles
updateButtonStyles();

// Listen for changes in the screen size and orientation
window.addEventListener("resize", updateButtonStyles);
