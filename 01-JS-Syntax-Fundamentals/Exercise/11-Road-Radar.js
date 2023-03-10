
function solve(speed, area){
    function speeding(limit, route) {
        if (speed <= limit){
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        } else {
            let status = 'reckless driving'
            if (speed - limit <= 20) {
                status = 'speeding'
            } else  if (speed - limit <= 40) {
                status = 'excessive speeding'
            }
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`)
        }
    }
    if (area === 'motorway'){
        speeding(130, 'motorway')
    } else if (area === 'interstate'){
        speeding(90, 'interstate')
    } else if (area === 'city'){
        speeding(50, 'city')
    } else if (area === 'residential'){
        speeding(20, 'residential')
    }
}


solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')