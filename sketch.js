//Jared Figdor


let img;  //creating my variables
let img9;
let cnv;
let x = 100;
let y = 100;
let t = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0; 
let x4 = 0;
let y4 = 0;
let y5 = 0;
let x5 = 0;
let y6 = 0;
let x6 = 0;
let y7 = 0;
let x7 = 0;
let y8 = 0;
let x8 = 0;
let y9 = 0;
let x9 = 0;
let xb = 0;
let yb = 0;
let ra = 25;
let q = 0;
let qb = 0;
let qc = 0;
let xc = 0;
let yc = 0;
let xd = 0;
let yd = 0;
let xg = 1;
let yg = 10;
let qd = 0;
let qe = 0;
let xe = 0;
let ye = 0;
let xf = 0;
let qf = 0;
let yf = 0;
let a = 20;
let xspeed = 1;
let yspeed = 15;
let balls = [];
let col2;
let ball;
function preload(){   //loading images
  img = loadImage('take1.jpg');
  img2 = loadImage('take2.jpg');
    img3 = loadImage('take3.jpg');
  img4 = loadImage('take4.jpg');
   img5 = loadImage('take5.jpg');
  img6 = loadImage('take6.jpg');
  img7 = loadImage('take7.jpg');
    img8 = loadImage('take8.jpg');
  img9 = loadImage('take9.jpg');
    img10 = loadImage('take10.jpg');
}

function setup(){
createCanvas(1000 , 700);
     background(0);
 img.resize(1000, 700);
  img2.resize(1000, 700);
   img3.resize(1000, 700);
  img4.resize(1000, 700);
   img5.resize(1000, 700);
   img6.resize(1000, 700);
  img7.resize(1000, 700);
  img8.resize(1000, 700);
  img9.resize(1000, 700);
   img10.resize(1000, 700);
 ball = new Ball(mouseX, mouseY, random(-4, 4), random(-4, 4));
}
function draw(){

  
t ++;   //time function


  
   
  
    
    if(t<150){ //if time is less than 150
   
    	for (var x = 0; x < width; x += width / 5) { //double for loop to help make the grid of boxes
		for (var y = 0; y < height; y += height / 5) {
			q+= 0.1;   
          let c = img.get(x,y); //getting the color values for respective x and y coordinaste pixels
    fill(color(c)); //filling our shape with the color of the pixels
    noStroke();
         
			rect(x, y, 2+q, 2+q); //using variable q to make rectangles expand in size
		
		
          	  if(q > 40){
            q = 0;
          }
	}
    }
    }
      
    
  
    
  
      if(t<300 && t > 150){ //same thing as above but controlling the next smaller set of squares
         
    	for (var xb = 0; xb < width; xb += width / 10) {
		for (var yb = 0; yb < height; yb += height / 10) { //adjusting the divisor here gives us more squares
			qb+= 0.01;   
          let cb = img.get(xb,yb);
    fill(color(cb));
 rect(xb, yb, 2+qb, 2+qb);
		
		
          	  if(qb > 40){
            qb = 0;
          }
	}
    }
      }
 
      
        if(t<450 && t > 300){  //squares getting more compact
         
    	for (var xc = 0; xc < width; xc += width / 15) {
		for (var yc = 0; yc < height; yc += height / 15) {
			qc+= 0.003;   
          let cc = img.get(xc,yc);
    fill(color(cc));
   
			rect(xc, yc, 2+qc, 2+qc);
			  if(qc > 40){
            qc = 0;
          }
		}
	}
    }
  
          if(t<600 && t > 450){ //squares getting more compact
         
    	for (var xd = 0; xd < width; xd += width / 25) {
		for (var yd = 0; yd < height; yd += height / 25) {
			qd+= 0.001;   
          let cd = img.get(xd,yd);
    fill(color(cd));
   
			rect(xd, yd, 2+qd, 2+qd);
			  if(qd > 40){
            qd = 0;
          }
		}
	}
    }
  
            if(t<750 && t > 600){ //squares getting more compact
         
    	for (var xe = 0; xe < width; xe += width / 40) {
		for (var ye = 0; ye < height; ye += height / 40) {
			qe+= 0.0001;   
          let ce = img.get(xe,ye);
    fill(color(ce));
   
			rect(xe, ye, 2+qe, 2+qe);
			  if(qe > 40){
            qe = 0;
          }
		}
	}
    }
  
              if(t<800 && t > 750){ //squares getting more compact
         
    	for (var xf = 0; xf < width; xf += width / 80) {
		for (var yf = 0; yf < height; yf += height / 80) {
			qf+= 0.0001;   
          let cf = img.get(xf,yf);
    fill(color(cf));
   
			rect(xf, yf, 2+qf, 2+qf);
          
          if(qf > 40){
            qf = 0;
          }
			
		}
	}
    }
      


  
  
  if(t>800 && t < 1000){ //drawing the horizon lize (next layer of image)
  for(i = 0; i < 20; i++){

    
     if(x2 > img2.width){ //pixels cant be placed off screen
       x2 = 0;
     }
    y2 = random(400,430); //only drawing the pixels between y = 400 and y = 430
    let c2 = img2.get(x2,y2); //getting the color values for the respective pixels
    fill(color(c2));
    noStroke();
    
    
     x2 = x2 + 0.3;  //incresing x by 0.3 every time the loop runs to move the bar across screen
    rect(x2, y2, 40, 20); 
    }
    
  }
  
  if(t>1000 && t < 1600){  //drawing the water
    for(i = 0; i < 50; i++){  

    
     if(x3 > img3.width){ //allows x to reset and the ellipses to make another 'pass'
       x3 = 0;
     }
    y3 = random(400,1000); //only drawing on the bottom of screen
    let c3 = img3.get(x3,y3);
    fill(color(c3));
    noStroke();
    
    
      x3 = x3 + 0.1;
    ellipse(x3, y3, 10, 5);
    }
    
  }
  
  if(t>1600 && t < 2000){ //drawing clouds
      for(i = 0; i < 50; i++){

    y4 = y4 + 1;
     if(y4 > 400){
       y4 = 0;
     }
    x4 = random(0,1000); //gives us a random x value anywhere on the canvas to place an ellipse
    let c4 = img4.get(x4,y4);
    fill(color(c4));
    noStroke();
    
    
    ellipse(x4, y4, 10, 5);
    }
    
  }
   if(t>2000 && t < 2200){ 
      for(i = 0; i < 100; i++){

    x5 = x5 + 1;
     if(x5 > img5.width){
       x5 = 0;
     }
    y5 = random(0,400);
    let c5 = img5.get(x5,y5);
    fill(color(c5));
    noStroke();
    
   
    rect(x5, y5, 10, 5);
    }
    
  }
  if(t>2200 && t < 2400){
        for(i = 0; i < 100; i++){

    x6 = x6 + 1;
     if(x6 > img6.width){
       x6 = 0;
     }
    y6 = random(0,400);
    let c6 = img6.get(x6,y6);
    fill(color(c6));
    noStroke();
    
    
    rect(x6, y6, 10, 5);
    }
    
  }
  
  
    if(t>2400 && t < 2600){
        for(i = 0; i < 100; i++){

    x7 = x7 + 1;
     if(x7 > img7.width){
       x7 = 0;
     }
    y7 = random(0,400);
    let c7 = img7.get(x7,y7);
    fill(color(c7));
    noStroke();
    
    rect(x7, y7, 10, 5);
    }
    
  }
     if(t>2600 && t < 2800){
          for(i = 0; i < 100; i++){

    x8 = x8 + 1;
     if(x8 > img8.width){
       x8 = 0;
     }
    y8 = random(0,400);
    let c8 = img8.get(x8,y8);
    fill(color(c8));
    noStroke();
    
 
    rect(x8, y8, 10, 5);
    }
    
  }
  
   if(t>2800 && t < 3100){
            for(i = 0; i < 100; i++){

    x9 = x9 + 1;
     if(x9 > img9.width){
       x9 = 0;
     }
    y9 = random(400,800);
    let c9 = img9.get(x9,y9);
    fill(color(c9));
    noStroke();
    
   
    rect(x9, y9, 10, 5);
    }
    
  }
  
  if(t>3100 && t < 3300){ //function to show complete image
    a += 0.1 //making alpha increase by 0.1 starting at t = 3100
    tint(255,a); //tint function to give the image a fade in
    image(img9,0,0); //placing image
    
  }
  
    if(t>3300 && t < 3700){ //eraser function
        for(i = 0; i < 10; i++){

   fill(255); //fill squares with white
     rect(xg, yg, ra, ra);
  xg += xspeed; //speed function to make square move around screen
  yg += yspeed;
  if (xg > width - ra || xg < 0) { 
    xspeed = -xspeed;
  }
  if (yg > height - ra || yg < 0) {
    yspeed = -yspeed;
  }
    
    
    }
    
  }
  
 if(t>3700){  

  for (let ball of balls) {  //code help from Antman on p5 https://editor.p5js.org/Antman/sketches/xOnr3vZq
    ball.display();
    ball.update();


      }
  
}
  

}
    

function mousePressed() {  //if mouse is pressed, create a new ball with a random velocity in either direction
  balls.push(new Ball(mouseX, mouseY, random(-4, 4), random(-4, 4)));
}

class Ball {   //ball class
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed
    this.ySpeed = ySpeed;
   
 
    

  }

  display() {
    noStroke();
    let col2 = img10.get(this.x,this.y); //getting color values for x and y positions of our ellipses using the pixel info from our final image
    fill(color(col2),20,10);
    ellipse(this.x, this.y, 5,5);
  }

  update() {
    
    this.bounce(); 
    this.x += this.xSpeed; //giving the ball velocity
    this.y += this.ySpeed;
  }

  bounce() {
    
    
    
    if (this.x  < 0 || this.x  > width) { //if the ball goes past width or height, invert the velocity to make it bounce
      this.xSpeed *= -1;
    }
    
    if (this.y  < 0 || this.y  > height) {
      this.ySpeed *= -1;
    }
  }

}
  



