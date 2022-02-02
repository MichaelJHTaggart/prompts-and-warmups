function warnTheSheep(queue) {
 if(queue[queue.length - 1] === "wolf"){
    return "Pls go away and stop eating my sheep"
  } else {
   let value = (queue.length - 1) - queue.findIndex((value) => value === "wolf") 
   return `Oi! Sheep number ${value}! You are about to be eaten by a wolf!`
  }
}