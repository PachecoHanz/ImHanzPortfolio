
  //bullets is the folder
  //bullet is the mesh

  // my array
  let bullets= [] //store the bullet code in an array
  let enemies= [] // store the enemy code in an array
  let score= 0 // scoring system/ everytime we hit an enemy we get 1 extra score
  let bg;
  let y= 0;

  //Images
  let img;
  let pizza;
  let pineapple;
  let laser;
  let b;
  let b2;
  let gif; 

  // storage to load my images
  function preload() {
    pizza= loadImage("assets/pizza.png");
    salami= loadImage("assets/salami.png");
    pineapple= loadImage("assets/pineapple.png");
    laser= loadImage("assets/laser.png");
    b = loadImage("assets/kim.jpg");
    b2 =loadImage("assets/kot.jpg");
    gif = loadImage("assets/rage.gif");
    gif2= loadImage("assets/sorryrage.gif")

} 
  // my canvas
function setup() {
  createCanvas(720, 400);
  

    //createCanvas(400,400);
    //img= loadImage('assets/background.jpg');

    // spawn enemy
    for (let i = 0; i < 5; i++){ // loop the spawn of the enemies by 10 times //make anemy 10 times
      let enemy = { 
        x: random(0, width),
        y: random(-800, 0)
  }
    enemies.push(enemy)
 }
}
     // show the code
  function draw() {
  rectMode(CENTER)
   background(51); // creates the canvas
    //circle(mouseX, height -50 ,25) // draws my player
    image(pizza,mouseX, height -50,50,50); //make the pizza as the player
    for ( let bullet of bullets ){ // for every bullets that are in the bullet list = do something
      image(laser,bullet.x, bullet.y, 60,60,5); // allows me to edit the bullets 
      bullet.y -= 20 // has the same value but changed a little bit // change the bullet speed
  } 
    for ( let enemy of enemies){ // for every enemy that are in the enemies list = do something
      enemy.y += 3 // has the same value but changed a little bit 
      image(pineapple,enemy.x, enemy.y, -50,50,50); // shape of the enemy 
    
        //You Lose code!/ text appears on the screen 
      rectMode(CENTER)
      if (enemy.y > height){
        text ("This game is broken!IDK how to fix it!", width/2, height/2)
        //noLoop() /activate only if you want the game to fully stop 
        
        //Images code
        image(b, 50, 50, 100,100);
        image(b2, 150, 150, 100,100);
        // when you have the images placed/loaded correctly, uncomment the line below, to show the pineapple
        //image(b2, 200, 200, 100,100); 

        // gif code
        image(gif, 200, 5);
        image(gif2, 600, 5);

        // crazy lines code

        stroke(226, 204, 0);
        line(0, y, width, y);
      
        y++;
        if (y > height) {
          y = 0;
        }
    }
  }
  // collision code 
  for (let enemy of enemies){
    for ( let bullet of bullets){
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y )< 10){
        enemies.splice(enemies.indexOf(enemy), 1) // get rid of enemy when shot 
        bullets.splice(bullets.indexOf(bullet), 1) // get rid of the bullet on collision
        
        // make infinite amounts of enemy
        let newenemy = { 
          x: random(0, width),
          y: random(-800, 0)
    }
      enemies.push(newenemy)
      score += 1 // add score
      
      }
    }
  }
  // score number code appear
  text(score,15,25)

}
  function mousePressed(){  // spawn player on click
    // this code makes the bullet
    console.log('Im clicked')
    let bullet = { 
      x: mouseX,  
      y: height - 50
  }
    bullets.push(bullet) // makes the bullet functional



}










