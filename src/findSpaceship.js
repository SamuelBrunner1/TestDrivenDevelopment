function findSpaceship(map) {
    const mapLines = map.split('\n');
    for (let lineIndex = 0; lineIndex < mapLines.length; lineIndex++) {
        const indexOfX = mapLines[lineIndex].indexOf('X');
        if (indexOfX >= 0) {
            return [lineIndex, indexOfX];
        }
    }
    return "Spaceship lost forever.";
}
