function bigPic(x) {
   x.style.height = "230px";
   x.style.width = "230px";
}

function normalPic(x) {
   x.style.height = "200px";
   x.style.width = "200px";
}

//normal water
function setup(){
let myCanvas = createCanvas(250, 250);
  myCanvas.parent('#p5canvas');

  angleMode(DEGREES);

  for (let i = 0; i < 800; i++) {
    water[i] = new Streak();
  }
}

let water = [];
let g;
let b;

function draw() {
  background(52, 113, 199);

  for (let i = 0; i < 800; i++) {
    water[i].display();
    water[i].update();
  }
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
