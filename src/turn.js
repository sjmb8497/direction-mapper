function turn (direction, orientation) {
    const compassOrientations = ['N', 'E', 'S', 'W'];
    const currentDirection = compassOrientations.indexOf(orientation);
    let newOrientation;

    if (direction === 'left') {
        newOrientation = currentDirection === 0 ? compassOrientations[3] : compassOrientations[currentDirection - 1];
    } else {
        newOrientation = currentDirection === 3 ? compassOrientations[0] : compassOrientations[currentDirection + 1];
    }
    return newOrientation;
}

export default turn;