//clean water
let water = [];
let g;
let b;

let gif_createImg;

function preload() {
  gif_createImg = createImg("../assets/sparkles.gif");
}

function setup(){
let myCanvas = createCanvas(250, 250);
  myCanvas.parent('#cleanWater');

  angleMode(DEGREES);

  for (let i = 0; i < 800; i++) {
    water[i] = new Streak();
  }
}

function draw() {
  background(52, 113, 199);

  for (let i = 0; i < 800; i++) {
    water[i].display();
    water[i].update();
  }
  gif_createImg.position(545, 500);
}

class Streak {
  constructor (x, y) {
    this.x = random(0, width);
    this.y = random(0, -height);
    this.spd = random(1, 3);
  }
  display(){
    noStroke();
    g = random()
    b = random(240);
    fill(0, g, b, 20);
    rect(this.x, this.y, 8, 100);
  }
  update(){
    this.speed = random(1, 3);
    this.y = this.y + this.spd;

    if (this.y > height) {
      this.y = random(0, -height);
    }
  }
}
