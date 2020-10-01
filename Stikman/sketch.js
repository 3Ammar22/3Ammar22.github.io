function setup() {
  createCanvas(400, 400);

}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
    let hovedfarve = color (176, 119, 58) 
    let kropsfarve = color (240, 181, 122) 
    let HøjerHånd = 200
    let VenstreHånd = 200
    let Fødder = 350
    let ØjneFarve = (75, 86, 242)
  fill(hovedfarve)
  circle(200, 100, 80);//hoved
  line(200, 140, 200, 250);//krop
  line(200, 170, 80, VenstreHånd);//VenstreArm
  line(200, 170, 320, HøjerHånd);//HøjerArm
  line(200, 250, 240, Fødder);//HøjerBen
  line(200, 250, 160, Fødder);//VenstreBen
  fill (kropsfarve)
  ellipse(200, 215, 30, 100);
  
  
  
  
  
  strokeWeight(6)
  
  fill (ØjneFarve)
  
  point(180, 90);
  point(200, 90);
  
  strokeWeight(1)
  line(200, 110, 210, 110);
  
  


}