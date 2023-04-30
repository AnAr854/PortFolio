function setStartingPositions(){
    document.getElementById("wormHead").style.gridArea = "11 / 11 / 21 / 21";
    newPlaceForFood();
    updateLevelAndPoints();
    trackHead();
}

function updateLevelAndPoints(){
    document.getElementById("level").innerHTML = "Level " + level;
    document.getElementById("points").innerHTML = "Points " + points;
}

function gameOver(){
    clearInterval(moveOn);
    document.getElementById("gameOver").innerHTML = "GAME OVER!!";
}