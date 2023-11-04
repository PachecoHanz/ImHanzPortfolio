
let currentkey = '1';
let bgc ;
let gkcount;

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}


function draw() {
    // triggering the clear_print function
    
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}

   rect(0,0,20,20); // 4 arg


  //  function rect(lx,ly,w,h) {

   


  //   // magial rectangle

  //  }




      // wrapper function ( no parameters or arguments )
function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed
  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // pencil 2b 
 // let k = color(0);
 hppencilLine( color(random(198,198,198),100),mouseX, mouseY, pmouseX, pmouseY);
 //drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // sign pen
  hpsignpenline(color(0), mouseX, mouseY, pmouseX, pmouseY )
  //drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // vintage marker line
  hpmarkerline( color(255, 200, 103, 40),  mouseX, mouseY, pmouseX, pmouseY)
  //drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat teal line
  hpfixedline(color((255, 0, 0), 100, 100, 200, 200), mouseX, mouseY, pmouseX, pmouseY);
  hpfixedline(color((0, 0, 255), 300, 300, 400, 400), mouseX, mouseY, pmouseX, pmouseY);
  //hpfixedline(color(0),mouseX, mouseY, pmouseX, pmouseY)
  //drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    hpidkthisline(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 10 ) {

        gkcount = 3;
    } else {
        gkcount+= .5;
    }
 break;
 case '7':
    console.log("7");  // erase with bg color
    notmineBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 1 ) {

        gkcount = 10;
    } else {
        gkcount+= .20;
    }
 break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}
function hppencilLine( k,  lx, ly,  px, py) {
  
  strokeWeight(2);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}
function hpsignpenline( k, lx, ly,  px, py) {
  
  strokeWeight(2);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}
function hpmarkerline( k,  lx, ly,  px, py) {
  
  strokeWeight(20);
  stroke(k,255, 200, 103, 40);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}
function hpfixedline( k,  lx, ly,  px, py) {
  
  strokeWeight(20);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}
function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function hpidkthisline(kcount, lx, ly,  px, py) {

  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  stroke(0,kcount*3,0);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}

function notmineBrush(kcount, lx, ly, px, py) {
  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  fill(kcount*2,random(255, 120, 0, 255),75);
  noStroke();
  //image(b,lx,ly, 30,30);
  ellipse(lx, ly,20,30,kcount);
}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100
// mouseX > 100
// mouseX > 110
// pmouseX> 100
// mouseX > 120
// pmouseX> 110
// mouseX > 130
