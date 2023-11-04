// example 1.1.2
function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  rectMode(CENTER);
}

function draw(){

  let r = random(100);
  let m = mouseX;
  console.log(m + " " + r);
  if (m < width/2)  {
    background(m);
    ellipse(m, height/2, r * 5, r * 2);
  } else {
    background(width -m );
    rect(m, height/5, r * 5, r * 5);
  
  }

  // recMode(center)
  //initialier: boolean test; change 
  // boolean test should always start as TRUE.
  for (let i = 0; i < 0; i += 400) {
    // i += meansadd 10 to i 
    for (let j = 0; j < 0; j += 6) {
      rand = random(255);
      fill(rand);
      ellipse( i+50, j+5, 5, 5 );
      console.log("this has a greyscale value of" + rand);
    }
  }
}

// function setup() {
//   createCanvas(500, 500);
//   background(50, 50, 100);
//   //noStroke();
//}


// example 1.1.4
function draw() {
  for (let i = 0; i < 500; i += 20) {
    for (let j = 0; j < 500; j += 20) {
      rand = random(255);
      fill(rand);
      rect( i+5, j+5, 10, 10 );
      console.log("this has a greyscale value of" + rand);
    }
  }
}

function draw() {
  let y1 = mouseY;
  if (mouseX < 350)  {
   
    for (let i = 0; i < mouseX; i += 20) {
      r1 = random(255);
      fill(r1);
      rect( i+5, y1, 10, 10 );
      console.log("r1 = " + r1);
     }

  }
  if (mouseX > 200)  {

    let mx = mouseX;
    for (let i = 0; i < mouseX; i += 20) {
      r2 = random(200,255);
      fill(r2,30);
      rect( mx, i+5, 10, 10 );
      console.log("r2 = " + r2);
     }

    if (mouseY < 250) {

      fill(350,50,90,90);
      triangle(mouseX,y1,mouseX-50,y1+30,mouseX+50,y1+50);

    }  else {
      
      for (let i = 0; i < mouseX; i += 20) {
        r3 = random(100);
        fill(200,100,0,r3);
        rect( i+5, y1, 10, 10 );
        console.log("r3 = " + r3);
       }

      fill(255,120,500,50);
      ellipse(mouseX+100,y1,30,30);

    }


  }

}