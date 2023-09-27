
function distanceFromHqInBlocks(pickUpLocation){
    let distance

    if(pickUpLocation >= 42){
        distance = pickUpLocation - 42
    }
    else if(pickUpLocation < 42){
        distance = 42 -pickUpLocation
    }
    return distance
}

function distanceFromHqInFeet(pickUpLocation){
    let distance = distanceFromHqInBlocks(pickUpLocation)* 264
    return distance
}

function distanceTravelledInFeet(start, end){
    let distance
    if(end < start){
        distance = start - end
    }
    else if(end > start){
        distance = end - start
    }
    return distance * 264

}

function calculatesFarePrice(start, end){
   let fare 
   let distance = distanceTravelledInFeet(start, end)
   
   if( distance <= 400){
    return fare = 0
   }
   else if (distance > 400 && distance <= 2000){
    return fare = (distance - 400)*0.02
   }
   else if (distance > 2000 && distance <= 2500){
    return fare = 25
   }
    if(distance > 2500){
    return 'cannot travel that far'
   }

    return fare
}