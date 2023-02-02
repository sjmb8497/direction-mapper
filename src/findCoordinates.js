import axios from 'axios';
import step from './step.js';
import turn from './turn.js';

async function findCoordinates() {
    const directionsApi = 'https://which-technical-exercise.herokuapp.com/api/sophiabolah@gmail.com/directions'
    
    const directions = await axios.get(directionsApi).then(data => data.data.directions).catch(function(error) {
        console.log(error.toJSON())
    });
    
    let coordinates = [0,0];
    let orientation = 'N';
    
    directions.map((direction) => {
        if (direction === 'forward') {
            coordinates = step(coordinates, orientation);
    
        } else {
            orientation = turn(direction, orientation);
        }
    })
    return coordinates;
}

export default findCoordinates