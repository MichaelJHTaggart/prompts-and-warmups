//This passes tests and submitted; However very clunky. Took me about 35 minutes.

function remove (string) {  
    
 let array = string.split("")
 
 array.map((letter, index) =>{
   if(array.lastIndexOf("!") === array.length - 1){
    array.pop()
  }
 })
   array = array.join("")
   return array;
 }