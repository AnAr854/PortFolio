let currentRow = 11; 
let currentCol = 11;
let currentRotation = 0;
let turnedTo = "straightAhead";
let level = 1;
let levelInterval = 500; let points = 0;
let pointsOnLevel = 20;
let moveOn;
//Array for tracking head moves for tail to follow
let headsGridAreas = [{place: " 11 / 11 / 21 / 21", direction: 0, turningTo: "straightAhead"}];
let tailPieceCount = 1;
let lastPressedKey = "ArrowRight";


////BUGS
////Jos kääntyy tarpeeksi nopeasti voi kääntyä vastakkaiseen suuntaan!!



