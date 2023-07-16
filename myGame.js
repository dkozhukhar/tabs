var divButtons = document.createElement("div");
divButtons.style.width = "100%";
divButtons.style.height = "50px";
divButtons.style.border = "1px solid black";
divButtons.style.position = "sticky";
divButtons.style.top = "0";
document.body.appendChild(divButtons);

var button1 = document.createElement("button");
button1.textContent = "Screen 1";
button1.onclick = function() {
  switchScreen("screen1");
};

var button2 = document.createElement("button");
button2.textContent = "Screen 2";
button2.onclick = function() {
  switchScreen("screen2");
};

divButtons.appendChild(button1);
divButtons.appendChild(button2);


var screens = [];

function createScreen(name) {
    var screen = {};
    screen.name = name;
    screen.element = document.createElement("div");
    screen.element.id = name;
    screen.element.style.border = "1px solid black";
    screen.element.style.width = "100%";
    screen.element.style.height = "100%";
    if (name === "screen1") {
        screen.element.style.display = "block";
      } else {     
        screen.element.style.display = "none";
      }

    if (name === "screen2") {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        screen.element.appendChild(canvas);  
    }
    screen.element.innerHTML = name;
    document.body.appendChild(screen.element);
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

