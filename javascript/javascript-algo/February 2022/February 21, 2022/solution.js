function orderFood(list) {
 return list.reduce((acc, value)=>{
    acc[value.meal] = (acc[value.meal] || 0) + 1
   return acc
  },{})
}