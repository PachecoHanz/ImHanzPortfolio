// example 5.2

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
  // 11 x 11
let gridarr1 = [ //Golden Gate Bride
  [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, ],
  [8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 8, 8, 8, 8, 8, 8, ],
  [8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 8, 8, 8, 8, 8, 8, ],
  [8, 8, 0, 0, 8, 8, 8, 6, 6, 6, 8, 8, 8, 0, 0, 8, ],
  [8, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, ],
  [0, 7, 0, 0, 7, 0, 7, 7, 7, 7, 7, 0, 7, 0, 0, 7, ],
  [7, 7, 0, 0, 7, 7, 0, 7, 7, 7, 0, 7, 7, 0, 0, 7, ],
  [5, 5, 1, 1, 5, 5, 5, 0, 5, 0, 5, 5, 5, 1, 1, 5, ],
  [5, 5, 2, 2, 5, 5, 5, 5, 0, 5, 5, 5, 5, 2, 2, 5, ],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ],
  [9, 3, 3, 3, 3, 9, 9, 9, 9, 9, 9, 9, 3, 3, 3, 3, ],
  [9, 9, 3, 3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 3, 3, 9, ],
  [9, 9, 4, 4, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 4, 9, ],
  [9, 9, 4, 4, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 4, 9, ],
  
];
let gridarr2 = [ //Bonsai
  [3, 3, 3, 1, 1, 1, 1, 1, 6, 3, 3, 3, 3, 3, 3, 3, ],
  [6, 3, 3, 3, 3, 2, 2, 2, 6, 6, 6, 4, 4, 4, 4, 4, ],
  [6, 6, 6, 6, 4, 4, 4, 5, 5, 5, 6, 4, 4, 5, 4, 6, ],
  [6, 6, 6, 6, 6, 4, 4, 4, 0, 5, 5, 6, 0, 0, 6, 6, ],
  [6, 3, 3, 3, 6, 6, 6, 6, 6, 0, 5, 0, 0, 0, 6, 6, ],
  [3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, ],
  [3, 2, 2, 0, 5, 5, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, ],
  [2, 2, 2, 0, 2, 5, 5, 6, 0, 5, 0, 0, 6, 6, 3, 3, ],
  [4, 2, 2, 4, 4, 0, 0, 0, 5, 5, 0, 5, 5, 3, 3, 3, ],
  [4, 4, 4, 4, 6, 6, 5, 0, 0, 0, 5, 5, 0, 0, 4, 1, ],
  [6, 4, 4, 6, 6, 5, 5, 0, 0, 0, 0, 6, 6, 4, 4, 4, ],
  [6, 6, 6, 6, 5, 5, 0, 5, 0, 6, 6, 6, 6, 6, 4, 4, ],
  [6, 6, 6, 5, 5, 0, 5, 5, 0, 5, 6, 6, 6, 6, 6, 6, ],
  [6, 6, 6, 5, 0, 5, 5, 0, 0, 5, 5, 6, 6, 6, 6, 6, ],
  [6, 6, 5, 5, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5, 6, 6, ],
  [5, 5, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, ],
  
];
let gridarr3 = [ //Tower Lawn
[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 5, 5, 0, 0, ],
[0, 5, 5, 5, 0, 0, 0, 1, 7, 1, 0, 0, 0, 0, 0, 0, ],
[0, 5, 5, 5, 0, 0, 1, 7, 6, 7, 1, 0, 0, 0, 5, 5, ],
[0, 0, 0, 0, 0, 1, 7, 6, 4, 6, 7, 1, 0, 0, 5, 5, ],
[5, 5, 0, 0, 1, 7, 6, 4, 2, 4, 6, 7, 1, 0, 0, 0, ],
[5, 5, 0, 1, 7, 6, 4, 2, 2, 2, 4, 6, 7, 1, 0, 0, ],
[0, 0, 1, 7, 7, 6, 4, 2, 2, 2, 4, 6, 7, 7, 1, 0, ],
[0, 0, 0, 0, 1, 6, 1, 1, 1, 1, 1, 6, 1, 0, 0, 0, ],
[0, 0, 0, 0, 1, 6, 6, 1, 1, 1, 6, 6, 1, 0, 0, 0, ],
[0, 0, 0, 0, 1, 6, 6, 6, 1, 6, 6, 6, 1, 0, 0, 0, ],
[0, 0, 0, 0, 1, 6, 6, 6, 6, 6, 6, 6, 1, 0, 0, 0, ],
[3, 0, 0, 0, 1, 6, 6, 6, 6, 6, 6, 6, 1, 0, 0, 3, ],
[3, 3, 0, 0, 1, 6, 6, 6, 6, 6, 6, 6, 1, 0, 3, 3, ],
[8, 8, 3, 0, 1, 6, 6, 6, 6, 6, 6, 6, 1, 3, 3, 8, ],
[8, 8, 8, 3, 1, 6, 6, 6, 6, 6, 6, 6, 3, 3, 8, 8, ],
[8, 8, 8, 8, 3, 6, 6, 6, 6, 6, 6, 3, 3, 8, 8, 8, ],
  
];
let gridarr4 = [ //Tower Lawn
[3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, ],
[3, 3, 3, 3, 2, 2, 3, 2, 2, 2, 3, 2, 2, 3, 3, 3, ],
[3, 3, 3, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 3, 3, 3, ],
[3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, ],
[3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, ],
[3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, ],
[3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, ],
[3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, ],
[3, 3, 3, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 3, 3, 3, ],
[3, 3, 3, 3, 2, 2, 3, 2, 2, 2, 3, 2, 2, 3, 3, 3, ],
[3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, ],
[3, 3, 3, 3, 0, 0, 0, 3, 2, 3, 3, 3, 3, 3, 3, 3, ],
[3, 3, 3, 3, 0, 0, 0, 0, 4, 3, 3, 3, 3, 3, 3, 3, ],
[3, 3, 3, 3, 0, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3, 3, ],
[3, 3, 3, 3, 3, 0, 0, 4, 4, 3, 0, 0, 3, 3, 3, 3, ],
[3, 3, 3, 3, 3, 3, 3, 3, 4, 0, 4, 0, 3, 3, 3, 3, ],
  
];

    // 16 x 16
let textarr = [
  ["Golden", "Golden", "Golden", "Golden", "Golden","Golden", "Golden", "Golden", "Golden", "Golden","Golden", "Golden", "Golden", "Golden", "Golden","Golden",],
  ["Golden", "Golden", "Golden", "Golden", "Golden","Golden", "Golden", "Golden", "Golden", "Golden","Golden", "Golden", "Golden", "Golden", "Golden","Golden",],
  ["Golden", "Golden", "Golden", "Hour", "Golden","Golden", "Golden", "Golden", "Golden", "Hour","Golden", "Golden", "Golden", "Golden", "Golden","Hour",],
  ["Golden", "Golden", "Golden", "Hour", "Golden","Golden", "Golden", "Golden", "Golden", "Hour","Golden", "Golden", "Golden", "Golden", "Golden","Hour",],
  ["Golden", "Golden", "Hour", "Golden", "Hour","Golden", "Golden", "Golden", "Hour", "Golden","Hour", "Golden", "Golden", "Golden", "Hour","Golden",],
  ["Golden", "Golden", "Hour", "Golden", "Hour","Golden", "Golden", "Golden", "Hour", "Golden","Hour", "Golden", "Golden", "Golden", "Hour","Golden",],
  ["Golden", "Hour", "Golden", "Golden", "Golden","Hour", "Golden", "Hour", "Golden", "Golden","Golden", "Hour", "Golden", "Hour", "Golden","Golden",],
  ["Golden", "Hour", "Golden", "Golden", "Golden","Hour", "Golden", "Hour", "Golden", "Golden","Golden", "Hour", "Golden", "Hour", "Golden","Golden",],
  ["Hour", "Golden", "Golden", "Golden", "Golden","Golden", "Hour", "Golden", "Golden", "Golden","Golden", "Golden", "Hour", "Golden", "Golden","Golden",],
  ["Hour", "Golden", "Golden", "Golden", "Golden","Golden", "Hour", "Golden", "Golden", "Golden","Golden", "Golden", "Hour", "Golden", "Golden","Golden",],
  ["Hour", "Hour", "Hour", "Hour", "Hour","Hour", "Hour", "Hour", "Hour", "Hour","Hour", "Hour", "Hour", "Hour", "Hour","Hour",],
  ["Hour", "Hour", "Hour", "Hour", "Hour","Hour", "Hour", "Hour", "Hour", "Hour","Hour", "Hour", "Hour", "Hour", "Hour","Hour",],
  ["Golden", "Hour", "Golden", "Golden", "Hour","Hour", "Hour", "Golden", "Hour", "Hour","Hour", "Golden", "Hour", "Hour", "Hour","Golden",],
  ["Golden", "Hour", "Golden", "Golden", "Hour","Hour", "Hour", "Golden", "Hour", "Hour","Hour", "Golden", "Hour", "Hour", "Hour","Golden",],
  ["Golden", "Hour", "Golden", "Golden", "Golden","Hour", "Golden", "Golden", "Golden", "Hour","Golden", "Golden", "Golden", "Hour", "Golden","Golden",],
  ["Golden", "Hour", "Golden", "Golden", "Golden","Hour", "Golden", "Golden", "Golden", "Hour","Golden", "Golden", "Golden", "Hour", "Golden","Golden",],
 
  ];  

  let textarr1 = [
    ["Golden", "Golden", "Golden", "Golden", "Golden","Golden", "Golden", "Golden", "Golden", "Golden","Golden", "Golden", "Golden", "Golden", "Golden","Golden",],
    ["Golden", "Golden", "Golden", "Golden", "Golden","Golden", "Golden", "Golden", "Golden", "Golden","Golden", "Golden", "Golden", "Golden", "Golden","Golden",],
    ["Golden", "Golden", "Golden", "Hour", "Golden","Golden", "Golden", "Golden", "Golden", "Hour","Golden", "Golden", "Golden", "Golden", "Golden","Hour",],
    ["Golden", "Golden", "Golden", "Hour", "Golden","Golden", "Golden", "Golden", "Golden", "Hour","Golden", "Golden", "Golden", "Golden", "Golden","Hour",],
    ["Golden", "Golden", "Hour", "Golden", "Hour","Golden", "Golden", "Golden", "Hour", "Golden","Hour", "Golden", "Golden", "Golden", "Hour","Golden",],
    ["Golden", "Golden", "Hour", "Golden", "Hour","Golden", "Golden", "Golden", "Hour", "Golden","Hour", "Golden", "Golden", "Golden", "Hour","Golden",],
    ["Golden", "Hour", "Golden", "Golden", "Golden","Hour", "Golden", "Hour", "Golden", "Golden","Golden", "Hour", "Golden", "Hour", "Golden","Golden",],
    ["Golden", "Hour", "Golden", "Golden", "Golden","Hour", "Golden", "Hour", "Golden", "Golden","Golden", "Hour", "Golden", "Hour", "Golden","Golden",],
    ["Hour", "Golden", "Golden", "Golden", "Golden","Golden", "Hour", "Golden", "Golden", "Golden","Golden", "Golden", "Hour", "Golden", "Golden","Golden",],
    ["Hour", "Golden", "Golden", "Golden", "Golden","Golden", "Hour", "Golden", "Golden", "Golden","Golden", "Golden", "Hour", "Golden", "Golden","Golden",],
    ["Hour", "Hour", "Hour", "Hour", "Hour","Hour", "Hour", "Hour", "Hour", "Hour","Hour", "Hour", "Hour", "Hour", "Hour","Hour",],
    ["Hour", "Hour", "Hour", "Hour", "Hour","Hour", "Hour", "Hour", "Hour", "Hour","Hour", "Hour", "Hour", "Hour", "Hour","Hour",],
    ["Golden", "Hour", "Golden", "Golden", "Hour","Hour", "Hour", "Golden", "Hour", "Hour","Hour", "Golden", "Hour", "Hour", "Hour","Golden",],
    ["Golden", "Hour", "Golden", "Golden", "Hour","Hour", "Hour", "Golden", "Hour", "Hour","Hour", "Golden", "Hour", "Hour", "Hour","Golden",],
    ["Golden", "Hour", "Golden", "Golden", "Golden","Hour", "Golden", "Golden", "Golden", "Hour","Golden", "Golden", "Golden", "Hour", "Golden","Golden",],
    ["Golden", "Hour", "Golden", "Golden", "Golden","Hour", "Golden", "Golden", "Golden", "Hour","Golden", "Golden", "Golden", "Hour", "Golden","Golden",],
   
    ];  

let font1;
let images =[];

function preload()  { //Sun Flower 

       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/kiwi.png');
       images[1] = loadImage('assets/lemon1.png');
       images[2] = loadImage('assets/cloud.png');
       images[3] = loadImage('assets/orange.png');
       images[4] = loadImage('assets/grass.jpg');
       

}
let currentPage = 0;

function setup() {
     createCanvas(800, 700);
     background(0, 0, 0);
     fill(100);
     textSize(32);
     textAlign(CENTER);
     text("Group 2", width/2, 50);
     
     textSize(20); // Set the text size for the additional text
     text("Hanz, Jenna, Marcia, Kaleigh", width/2, 100); // Add another small te
     textFont(font1);
           //2darr, x,y,rot,scale, alpha
  
     //mapToMonoPixels(gridarr1, 100, 25, 0, 10, 60);
     mapToMonoPixels(gridarr2, 576, 130,  0, 0.6, 50); // Bonsai
     mapToColorPixels(gridarr1, 0, 130, 0, 0.6, 50); // golden gate bridge
     mapToColorShapes(gridarr3, 300, 142, 0,1.5, 255);// tower lawn
     //mapToColorShapes(gridarr1, 450, 300, -25, 1.5, 255);
     //mapToColorText(textarr1, 300, 50, 0, 1.5, 175);
     mapToColorText(textarr, -29, 438, 0, .9, 255); //text array golden gate bridge 
    
     //mapToBitMaps(gridarr1,images, 300, 100, -3, 1.55);

     mapToTintedBitMaps(gridarr4,images, 506, 423, 0, 1.8,190);
    
}

            // black and white 
          //2darr, x,y,rot,scale, alpha
function mapToMonoPixels(arr,lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == 0 ) {
              fill(151, 77, 56); 
            } else if ( value == 1 ){
              fill(69, 194, 71); 
            } else if ( value == 2 ) {
              fill(1138, 194, 71);
            } else if ( value == 3 ) {
              fill(135, 230, 74); 
            } else if ( value == 4 ) {
              fill(130, 138, 59); 
            } else if ( value == 5 ) {
              fill(196, 100, 69); 
            } else if ( value == 6 ) {
              fill(253, 242, 71); 
            } else {
               fill(20,220,250, fade); 
      
            }
          rect(j * 30.5, i * 30.5, 30, 30);
      }
  }
  pop();

}

          // Golden Gate Bridge
         //x,y,rot,scale, alpha 
function mapToColorPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                fill(225, 43, 55); 
              } else if ( value == 1 ){
                fill(183, 43, 55); 
              } else if ( value == 2 ) {
                fill(147, 43, 55);
              } else if ( value == 3 ) {
                fill(134, 43, 55); 
              } else if ( value == 4 ) {
                fill(106, 43, 55); 
              } else if ( value == 5 ) {
                fill(225, 155, 55); 
              } else if ( value == 6 ) {
                fill(253, 253, 30); 
              } else if ( value == 7 ) {
                fill(247, 123, 55); 
              } else if ( value == 8 ) {
                fill(247, 96, 32); 
              } else if ( value == 9 ) {
                fill(53, 132, 253); 
              } else {
                 fill(20,220,250, fade); 
        
              }
            rect(j * 30.5, i * 30.5, 30, 30);
        }
    }
    pop();

}
            //Tower Lawn with shapes
function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(92, 242, 247, fade);
                  ellipse(j * 12, i * 12, 10, 10);
              } else if ( value == 1 ){
                  fill(184, 117, 92, fade);
                   rect(j * 12-6, i * 12-6, 10, 10,2);
                  } else if ( value == 2 ){
                    fill(49, 15, 10, fade);
                     rect(j * 12-6, i * 12-6, 10, 10,2);
                    } else if ( value == 3){
                      fill(125, 212, 105, fade);
                       rect(j * 12-6, i * 12-6, 10, 10,2);
                      } else if ( value == 4 ){
                        fill(166, 191, 199, fade);
                         rect(j * 12-6, i * 12-6, 10, 10,2);
                        } else if ( value == 5 ){
                          fill(245, 232, 230, fade);
                           rect(j * 12-6, i * 12-6, 10, 10,2);
                          } else if ( value == 6 ){
                            fill(166, 181, 171, fade);
                             rect(j * 12-6, i * 12-6, 10, 10,2);
                            } else if ( value == 7 ){
                              fill(138, 115, 94, fade);
                               rect(j * 12-6, i * 12-6, 10, 10,2);
                              } else if ( value == 8 ){
                                fill(138, 115, 94, fade);
                                 rect(j * 12-6, i * 12-6, 10, 10,2);
              } else {
                  fill(0,150,0, fade);
                   ellipse(j * 12, i * 12, 5, 5);
              }
        }
    }
    pop();

}

function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "Golden" ) {
                  fill(20,170,0, fade);
              } else if ( value == "Hour" ){
                  fill(200,0,30, fade);
              } else {
                  fill(255, fade);
              }
               text(value, j * 35, i * 19.3,100);
        }
    }
    pop();

}

                            //2darray,images in array ,x,y,rot,scale, alpha
 function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[1];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[2];
                      } else if ( value == 3 ) {
                        nuimg = imgarr[3];
                      } else if ( value == 4 ) {
                        nuimg = imgarr[4];
                      } else {
                        nuimg = imgarr[0];
                      }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();
        
}

    //2darray,images in array ,x,y,rot,scale, alpha
    function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                nuimg = imgarr[0];
                c = color(148, 207, 133);
                } else if ( value == 1 ){
                c = color(230, 237, 13);
                nuimg = imgarr[1];
                } else if ( value == 2 ) {
                nuimg = imgarr[2];
                c = color(2230, 227, 122);
              } else if ( value == 3 ) {
                nuimg = imgarr[3];
                c = color(240, 151, 13);
                } else {
                nuimg = imgarr[4];
                c = color(74, 145, 107);
                }
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 10, i * 10, 15, 15);
        }
    }
    pop();

    }
