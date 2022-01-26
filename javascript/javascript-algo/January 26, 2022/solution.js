function points(games) {
 let counter = 0
  games.map(game => {
    let ourTeam = game.split("")[0]
    let theirTeam = game.split("")[2]
    
      if(ourTeam > theirTeam) {
        counter += 3
      } else if(ourTeam < theirTeam) {
        counter += 0
      } else if(ourTeam == theirTeam) {
        counter += 1
      }
    })
    return counter
}