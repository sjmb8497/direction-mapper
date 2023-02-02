import findCoordinates from "../src/findCoordinates";
import axios from 'axios';

test('Successfully connects to directions api', async () => {
    const url = 'https://which-technical-exercise.herokuapp.com/api/sophiabolah@gmail.com/directions'

    const response = await axios.get(url);

    expect(response.statusText).toBe('OK');
});

test('Successfully finds kittens coordinates', async () => {
    const coordinates = await findCoordinates();

    const url = `https://which-technical-exercise.herokuapp.com/api/sophiabolah@gmail.com/location/${coordinates[0]}/${coordinates[1]}`

    const response = await axios.get(url);

    console.log('Kitten location:', coordinates);
    expect(response.statusText).toBe('OK');
});