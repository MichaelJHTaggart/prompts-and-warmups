// var twoSum = function(nums, target) {
//     let answer = []
//  for(let i = 0; i < nums.length; i++){
//      for(let j = 1; j < nums.length; j++){
//          if(nums[i] + nums[j] === target){
//              if(answer.find(element => element == i)){
//                null
//              }else{
//                answer.push(i)
//              }
//              if(answer.find(element => element == j)){
//                 null 
//             }else{
//                 answer.push(j)
//             }
//          }
//      }
//  }
// return answer
// };

var twoSum = function(nums, target) {
 let result = [];
 for (let i = 0; i < nums.length; i++) {
     for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
             result.push(i);
             result.push(j);
             return result;
         }
     }
 }
}