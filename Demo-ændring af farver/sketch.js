function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  

  circle (mouseX,mouseY,50)
  
  if(mouseX > width/2 && mouseY > height/2||mouseX < width/2 && mouseY < height/2 ) {fill ('blue')} 
  else {fill ('green')}
  
 
  
}  

