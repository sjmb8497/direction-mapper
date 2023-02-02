import turn from '../src/turn';

test('Successfully turns left', async () => {
    const newDirection = turn('left', 'N');
    expect(newDirection).toBe('W');
});

test('Successfully turns right', async () => {
    const newDirection = turn('right', 'N');
    expect(newDirection).toBe('E');
});