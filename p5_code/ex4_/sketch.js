// in this example all the transform tools  are placed
// inside the functions, so that the parameters that are passed
// change the transform, rot and scale 

let counter = 0;
let deathStarRotation = -45; // Initial rotation of the Death Star
let deathStarScale = 0.75; // Initial scale of the Death Star
let stars = []; // Array to store star positions
let rocks = []; // Array to store rock positions and velocities





function setup() {
    createCanvas(500,500);
    background(20);
    fill(255);
    angleMode(DEGREES);

     // Generate random star positions all over the background // for loop 
     for (let i = 0; i < 500; i++) { // change the flicker speed
        stars.push({x: random(width), y: random(height)});
 
}

    // Generate random rock positions and velocities on the background //for loop
    for (let i = 0; i < 5; i++) { // add the amaunt of rocks
        rocks.push({
            x: random(width),
            y: random(height),
            vx: random(0, 1), // Random horizontal velocity //speed
            vy: random(0, 1) // Random vertical velocity //speed
    });

  }
}
 
//allows images to show on screen
function draw() {
    background(0);
 
    // Draw flickering stars
   fill(255);
   noStroke();
   for (let star of stars) {
       if (random() > 0.95) { // Randomly draw stars 
           ellipse(star.x, star.y, random(1, 3), random(1, 3)); //change the size of the mouse
       }
   }
  
   // Draw warning message (flickering)
  if (random() > 0.95) {
    fill(random(255), random(255), random(255)); // Random color
    textSize(25); 
    text("Warning: This may cause seizures", 50, height - 20);

    }

   // Draw rocks on the background
   fill(150);
   for (let rock of rocks) {
       let flickerColor = color(random(255), random(255), random(255)); // Generate a random color
       fill(flickerColor);
       ellipse(rock.x, rock.y, 20, 20); // D5raw rocks
       rock.x += rock.vx; // Update rock position
       rock.y += rock.vy;
           
       // Check for collisions with canvas boundaries
       if (rock.x > width || rock.x < 0) {
           rock.vx *= -1; // Reverse horizontal velocity on collision //make it bounce on the border
       }
       if (rock.y > height || rock.y < 0) {
           rock.vy *= -1; // Reverse vertical velocity on collision //make it bounce on the border
    }
}

        // Draw space bugs and death stars
        deathstar(100, 300, deathStarRotation, deathStarScale);
        deathstar(350, 120, counter, .5);
        spaceBug(color(0, 0, random(500)), width / 2 + 50, height / 2, -10, 0.6); // Small space bug
        spaceBug(color(200, 30, random(500)), 100, 90, 15, 1); // Big space bug
        counter += 5; // Increase or decrease the spin
        // Draw the astronaut passing by

    }
    
      

function spaceBug(k, lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(rot);
    scale(sc);

    // Rocket body
    fill(k);
    beginShape();
    vertex(-20, -40);
    vertex(20, -40);
    vertex(30, 20);
    vertex(-30, 20);
    endShape(CLOSE);

    // Rocket fins
    fill(100);
    beginShape();
    vertex(-30, 20);
    vertex(0, 40);
    vertex(30, 20);
    endShape(CLOSE);

    // Rocket head
      fill(150);
      beginShape();
      vertex(-10, -40);
      vertex(10, -40);
      vertex(0, -60);
      endShape(CLOSE);

    // Rocket flames with jitter effect
    let flameX1 = random(-10, 10); // Jitter effect for flame position
    let flameX2 = random(-10, 10); // Jitter effect for flame position
    let flameY = random(20, 40); // Jitter effect for flame size
    fill(255, 165, 0);
    beginShape();
    vertex(-10, 20);
    vertex(10, 20);
    vertex(flameX1, 20 + flameY);
    vertex(flameX2, 20 + flameY);
    endShape(CLOSE);

    pop();
}

// add interactive to the deathstar
function deathstar(lx,ly,rot,sc) {
    push();
    translate(lx,ly);
    rotate(rot);
    scale(sc);
    fill(80);
    ellipse(0,0,200,200);  // anchor
    fill(150);
    let angle = atan2(mouseY - ly, mouseX - lx); // Calculate angle
    let x = cos(angle) * 50; // Calculate x position 
    let y = sin(angle) * 50; // Calculate y position
    ellipse(55 + x, 10 + y, 50, 60); // The small circle follows cursor code
    fill(255,0,0);
    ellipse(0,-100,5,5);
    pop();
    
}
// this adds another function to the code
function mousePressed() {
    // Change rotation and scale of the Death Star when mouse is pressed
    deathStarRotation = random(180,180); // Change rotation to a random value
    deathStarScale = random(0.5, 1.5); // Change scale to a random value

}
