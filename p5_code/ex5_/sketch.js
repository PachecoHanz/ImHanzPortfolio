let myDogs = [];
let counter = 0;
let dragging = false;
let draggedDog = null;
let offsetX, offsetY;

function setup() {
  createCanvas(400, 400);
  textSize(18);

  let col = color(random(255), random(255), random(255));

  for (let i = 0; i < 20; i++) {
    myDogs.push(new Dog(col, width/2, height/2, "Dog " + i));
  }
}

function draw() {
  background(255);

  for (let dog of myDogs) {
    dog.drift();

    if (counter % 20 == 0) {
      dog.changeColor(color(random(255), random(255), random(255)));
    }

    if (dragging && dog === draggedDog) {
      dog.xpos = mouseX + offsetX;
      dog.ypos = mouseY + offsetY;
    }
  }

  counter++;
}

function mousePressed() {
  for (let dog of myDogs) {
    let d = dist(mouseX, mouseY, dog.xpos, dog.ypos);
    if (d < 15) {
      dragging = true;
      draggedDog = dog;
      offsetX = dog.xpos - mouseX;
      offsetY = dog.ypos - mouseY;
    }
  }
}

function mouseReleased() {
  dragging = false;
  draggedDog = null;
}

class Dog {
  c;
  xpos;
  ypos;
  orifice;

  constructor(tempC, tempXpos, tempYpos, oa) {
    this.c = tempC; // color
    this.xpos = tempXpos; //x position
    this.ypos = tempYpos; // y position
    this.orifice = " Code: " + oa; // a string with the name CODE in it
  }

  drift() {
    noStroke();

    this.c = color(random(255), random(255), random(255));

    // locate the position of the dog
    fill(this.c);
    rect(this.xpos, this.ypos, random(10, 25) + 10, random(10, 15));
    rect(this.xpos, this.ypos + 6, random(4, 8) + 10, random(2, 4));
    text(this.orifice, this.xpos + 5, this.ypos - 15);
   // increase the x-y position
    this.xpos += random(-4, 4);
    this.ypos += random(-2, 2);
  }

  changeColor(newColor) {
    this.c = newColor;
  }
}
