//Make a function that goes through an array of values (it), and evaluates true or false: 
// iterates through the array determining if the value from (list) array is greater than or equal to the values in the (it) array && less than the index of the (it) array.

// Solution 
function isAgeDiverse(list) {
 const ageList = list.map(e => e.age)
 if(
   ageList.some(e =>(e>=0&&e<20)) &&
   ageList.some(e =>(e>=20&&e<30)) &&
   ageList.some(e =>(e>=30&&e<40)) &&
   ageList.some(e =>(e>=40&&e<50)) &&
   ageList.some(e =>(e>=50&&e<60)) &&
   ageList.some(e =>(e>=60&&e<70)) &&
   ageList.some(e =>(e>=70&&e<80)) &&
   ageList.some(e =>(e>=80&&e<90)) &&
   ageList.some(e =>(e>=90&&e<100)) &&
   ageList.some(e =>(e>=100&&e<200))
 ){
   return true
 } else {
   return false
 }
}

 
//Make a function that goes through an array of values (it), and evaluates true or false: 
// iterates through the array determining if the value from (list) array is greater than or equal to the values in the (it) array && less than the index of the (it) array.

// function isAgeDiverse(list) {
//  return list.some(developer => [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200].some((num, index, array) => developer.age >= num && developer.age < array[index] < 9 ? array[index + 1] : array[index] ));
// }

// Solution:
function isAgeDiverse(list) {
 return list.some(developer => developer.age >= 100) 
 ? [10,20,30,40,50,60,70,80,90].every(number => list.some(developer => developer.age - number >= 0 && developer.age - number <= 9))
 : false;
}
