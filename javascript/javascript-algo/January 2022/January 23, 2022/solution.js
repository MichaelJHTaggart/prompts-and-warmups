var countSheep = function (num){
 let counter = 1
 let sheep = ""
 
 if(Math.sign(Number.isInteger(num)) === 1){
    while(counter <= num){
      sheep = sheep.concat(`${counter}`, " sheep...")
      counter++
    }
  } else{
    return sheep
 }
   return sheep
 }
 
 //First Solution
 /*
 var countSheep = function (num){
 let sheep = ""
 if(num > 0){
   for(let i = 1; i <= num; i++){
     sheep = sheep.concat(`${i}`, " ", "sheep...")
   }
 } else {
   return ""
 } 
 return sheep
 }
 */