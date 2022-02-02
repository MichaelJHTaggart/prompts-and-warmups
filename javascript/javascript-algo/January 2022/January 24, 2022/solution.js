function twiceAsOld(dadYearsOld, sonYearsOld) {
 //We need to return the difference between this number and dadYearsOld
 // dadYearsOld (+ a number) or (- a number) = sonYearsOld * 2
 // I moved the variables around to solve for "a number"
 return Math.abs((sonYearsOld * 2) - dadYearsOld)
}


//First Solution
/*
function twiceAsOld(dadYearsOld, sonYearsOld) {
 const son = 2 * sonYearsOld
 let counter = 0
 while(dadYearsOld > son){
   dadYearsOld--
   counter++
 }
 while(dadYearsOld < son){
   dadYearsOld++
   counter++
 }
 return counter
}
*/