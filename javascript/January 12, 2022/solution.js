//I spent 3.9 hours on this solution
//I wanted to do a while loop but I couldn't figure out how to do it.
//This solution is a bit more complicated but it passes with only 3-12 tests failing. I'm not sure why. The logic seems to be correct to me.

function movie(card, ticket, perc) {
 let ticketNum = 1
 let sysA = ticket
 let sysB = card + ticket * perc
   
  if(Math.ceil(sysB) < sysA){
        return ticketNum
   } else {
    for(;Math.ceil(sysB) > sysA;){
      ticketNum += 1
      sysA += ticket
      sysB += ticket * perc**ticketNum
    }
    return ticketNum 
   }
 };