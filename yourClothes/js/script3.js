//dirtyWater
let water = [];
let r;
let g;
let b;






function setup(){
let myCanvas = createCanvas(250, 250);
  myCanvas.parent('#dirtyWater');

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
}


class Streak {
  constructor (x, y) {
    this.x = random(0, width);
    this.y = random(0, -height);
    this.spd = random(1, 3);
  }
  display(){
    noStroke();
    r = random(140);
    g = random(120);
    b = random(200);
    fill(r, g, b, 20);
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
