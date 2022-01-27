function elevator(left, right, call){
  
 let rightEl = Math.abs(right - call)
 let leftEl = Math.abs(left - call)
 
 //Who takes priority on two elevators whon
 if(leftEl < rightEl){
   return "left"
 } else {
   return "right"
 }
 
// How do I evaluate the amount of integers between two given numbers.

   // Find which number is the largest number
   // Subtract that number from the other number
   
   //OR
   
   // Subtract a number from another number
   // Make sure the result is a positive number *also known as the absolute value of a number
 
}