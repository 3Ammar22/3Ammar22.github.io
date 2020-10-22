
let x = 220;
let hastighed = 3
let radius = 50

function setup() {
  createCanvas(600, 400);
}

  
  
  function draw() {
    background(220);
    circle (x,150,2*radius);
    
    // if (x > width - radius/2){
    //   hastighed = -5;
    //   }
    //  if (x < 0 + radius/2){
    //   hastighed = 5;
    //   }
            //ELLER   
      
        x = x + hastighed;  
        
         if (x > width - radius || x < 0 + radius) {
           hastighed = -hastighed ; }
          
          
        }
        


   
   

