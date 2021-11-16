//color arrays
let colorNamesTS = [
  "#00FFFF", //cyan
  "#008080", //teal
  "#40E0D0", //turquoise
  "#7FFFD4", //aquamarine
  "#66CDAA", //mediumAquamarine
  "#E0FFFF", //lightCyan
  "#00FA9A", //mediumSpringGreen
];
let colorNamesES = [
  "#FFA07A", //lightsalmon
  "#FF4500", //orangeRed
  "#FFD700", //gold
  "#FFE4E1", //mistyRose
  "#CD5C5C", //indianRed
  "#DC143C", //crimson
  "#F0E68C", //khaki
];
let colorNamesMD = [
  "#E6E6FA", //lavender
  "#BA55D3", //mediumOrchid
  "#663399", //rebeccaPurple
  "#8B008B", //darkMagenta
  "#4B0082", //indigo
  "#483D8B", //darkSlateBlue
  "#7B68EE", //mediumSlateBlue
]
let colorNamesCB = [
  "#FFC0CB", //pink
  "#FF69B4", //hotPink
  "#FFA500", //orange
  "#FFFFE0", //lightYellow
  "#00FF00", //lime
  "#FFFF00", //yellow
  "#FF7F50", //coral
];

// use onclick attribute
let btn1 = document.getElementById('tropicalSeaBtn');
let btn2 = document.getElementById('eveningSunsetBtn');
let btn3 = document.getElementById('morningDuskBtn');
let btn4 = document.getElementById('candyBlossomBtn');

//p5 setup
function setup() {
  let cnv = createCanvas(400, 700);
  let elements = document.getElementsByClassName('container');
  elements[0].appendChild( cnv.elt );

  background(220);
};

function draw(){};

function changeColor1() {
  for (let i = 0; i < colorNamesTS.length; i++) {
    let x = 0;
    let y = i * 100;
    noStroke();
    fill(colorNamesTS[i]);
    rect(x, y, 400, 100);
    triangle(110, 440, 198, 230, 286, 440);
  }
}

function changeColor2() {
  for (let i = 0; i < colorNamesES.length; i++) {
    let x = 0;
    let y = i * 100;
    noStroke();
    fill(colorNamesES[i]);
    rect(x, y, 400, 100);
    ellipse(200, 350, 200);
  }
}

function changeColor3() {
  for (let i = 0; i < colorNamesMD.length; i++) {
    let x = 0;
    let y = i * 100;
    noStroke();
    fill(colorNamesMD[i]);
    rect(x, y, 400, 100);
    rect(100, 250, 200);
  }
}

function changeColor4() {
  for (let i = 0; i < colorNamesCB.length; i++) {
    let x = 0;
    let y = i * 100;
    noStroke();
    fill(colorNamesCB[i]);
    rect(x, y, 400, 100);
    ellipse(200, 350, 160);
    ellipse(200, 280, 90);
    ellipse(130, 350, 90);
    ellipse(200, 420, 90);
    ellipse(270, 350, 90);
  }
}
