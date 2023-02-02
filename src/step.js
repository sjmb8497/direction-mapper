function step (coordinates, orientation) {
    switch(orientation) {
        case "N":
            coordinates[1] += 1
            break;
        case "E":
            coordinates[0] += 1
            break;
        case "S":
            coordinates[1] -= 1
            break;
        case "W":
            coordinates[0] -= 1
            break;
    }
    return coordinates;
}

export default step;