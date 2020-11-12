function setup() {
  createCanvas(600, 400);
  }

function draw() {


  
  background(220);
  let p0x = 220
  let p0y = mouseX
  let p1x = 120
  let p1y = 120
  let p2x = 320
  let p2y = 120
  let diameter = 10
  
  
  
  circle(p0x,p0y,diameter);
  circle(p1x,p1y,diameter);
  circle(p2x,p2y,diameter);
  
  line(p0x,p0y,p1x,p1y);
  line(p0x,p0y,p2x,p2y);
  
  
  let n = map(mouseY,0,height,2,30,true)
  n = round(n)
  
  for(let i = 0;i <= n;i++){
    const x1 = map(i,0,n,p0x,p1x,true)
    const y1 = map(i,0,n,p0y,p1y,true)
    
    const x2 = map(i,0,n,p2x,p0x,true)
    const y2 = map(i,0,n,p2y,p0y,true)
    line(x1,y1,x2,y2)
    
    
    circle(x1,y1,10)
    circle(x2,y2,10)
    
  }
  
  
  
  
 
  
}  

