function dwarfRollCall(dwarves) {
  var orderedList = []
  for (var i = 0; i < dwarves.length; i++){
  orderedList.push(`${i}. ${dwarves}` )
  }
  return orderedList.join("")
  }

function summonCaptainPlanet(planeteerCalls){
  var newList = [];
  for (var i = 0; i < planeteerCalls.length; i++){
    newList.push(`${planeteerCalls[i]}`.toUpperCase() + "!");
  }
  return newList;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
  	if (words[i].length > 4) {
  		return true;
  	} else {
  		return false;
  	}
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
      return foods[i]
    } else if (foods[i] === "gouda") {
      return foods[i]
    } else if (foods[i] === "camembert") {
      return foods[i]
    }
    else {
      return "no cheese!"
    }
  }
}
