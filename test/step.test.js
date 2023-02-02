import step from '../src/step';

test('Successfully steps north', async () => {
    const newCoordinates = step([0,0], 'N');
    expect(JSON.stringify(newCoordinates)).toBe(JSON.stringify([0,1]));
});

test('Successfully steps east', async () => {
    const newCoordinates = step([0,0], 'E');
    expect(JSON.stringify(newCoordinates)).toBe(JSON.stringify([1,0]));
});

test('Successfully steps south', async () => {
    const newCoordinates = step([0,0], 'S');
    expect(JSON.stringify(newCoordinates)).toBe(JSON.stringify([0,-1]));
});

test('Successfully steps west', async () => {
    const newCoordinates = step([0,0], 'W');
    expect(JSON.stringify(newCoordinates)).toBe(JSON.stringify([-1,0]));
});