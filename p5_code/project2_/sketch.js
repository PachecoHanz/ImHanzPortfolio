let snowflakes = [];
let act = 1;
let act3Complete = false;
let act3CompleteFrame;
let act3Duration = 1000; // Define the duration of Act 3 (in frames)

function setup() {
  createCanvas(1920, 1080);
  frameRate(30); // Set frame rate to 30 FPS
  fill(240);
  noStroke();
}

function draw() {
  background(0);
  let t = frameCount / 100;

  if (act === 1 && frameCount > 800) {
    act = 2;
    snowflakes = [];
    act3Complete = false;
  } else if (act === 2 && frameCount > 1800) {
    act = 3;
    snowflakes = [];
    act3Complete = false;
  } else if (act === 3 && frameCount > 2800 + act3Duration) { // Adjust the condition for Act 3 ending
    act3Complete = true;
    act3CompleteFrame = frameCount;
  }

  if (act3Complete && frameCount - act3CompleteFrame > 3000) {
    act = 1;
    snowflakes = [];
  }

  if (act === 1) {
    for (let i = 0; i < random(5); i++) {
      snowflakes.push(new snowflake());
    }
  } else if (act === 2) {
    for (let i = 0; i < random(5); i++) {
      snowflakes.push(new snowflakeLine());
    }
  } else if (act === 3) {
    for (let i = 0; i < random(5); i++) {
      snowflakes.push(new snowflakeZoom());
    }
    
    // Flashing light effect in Act 3
    let flashIntensity = sin(frameCount * 0.1) * 50;
    fill(255, flashIntensity);
    rect(0, 0, width, height);
  }

  for (let flake of snowflakes) {
    flake.update(t);
    flake.display();
  }
}

// Act 1 (Tornado-like effect)
function snowflake() {
  this.angle = random(TWO_PI);
  this.distance = random(200, 1100);
  this.size = random(3, 7);
  this.rotationSpeed = random(-0.005, 0.005);

  this.update = function(time) {
    let w = 0.1;
    this.angle += w;
    this.posX = width / 2 + this.distance * cos(this.angle);
    this.posY = height / 2 + this.distance * sin(this.angle);
    this.distance -= 0.5;

    this.rotationSpeed += random(-0.005, 0.005);

    if (this.distance < 0) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    if (random(1) > 0.9) {
      return;
    }
    fill(240);
    push();
    translate(this.posX, this.posY);
    rotate(this.rotationSpeed);
    ellipse(0, 0, this.size);
    pop();
  };
}

// Act 2
function snowflakeLine() {
  this.posX = random(width);
  this.posY = random(height);
  this.size = random(3, 7);
  this.opacity = random(50, 255);

  this.update = function(time) {
    this.posX += random(-2, 2);
    this.posY += random(-2, 2);

    if (this.posY > height || this.posY < 0 || this.posX > width || this.posX < 0) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    stroke(240, this.opacity);
    strokeWeight(this.size);
    point(this.posX, this.posY);
  };
}

// Act 3
function snowflakeZoom() {
  this.posX = width / 500;
  this.posY = height / 500;
  this.size = random(50, 1000);
  this.opacity = random(150, 255);
  this.angle = random(TWO_PI);
  this.radius = random(500, 500);
  this.speed = random(-0.01, 0.01);

  this.update = function(time) {
    this.angle += this.speed;
    this.posX = width / 2 + this.radius * cos(this.angle);
    this.posY = height / 2 + this.radius * sin(this.angle);

    this.size = map(sin(this.angle), -1, 1, 2, 5);
    this.opacity = map(cos(this.angle), -1, 1, 150, 255);
  };

  this.display = function() {
    fill(240, this.opacity);
    ellipse(this.posX, this.posY, this.size);
  };
}
