function setup() {
  createCanvas(400, 400);
//FOR løkke
//   let sum = 10
// for(let i = 1; i <= 1000;i++){

//   sum +=i;
// }
// alert(sum);


// GANGE TABEL FRA 2 TIL 10 
let x = 2
let y = 1
let z = 0
do{
if(y<=10) {
  z = x*y
  y ++
  console.log(z) 
}
else{
  x++
  y = 1
}
}while (x<=10)


}

