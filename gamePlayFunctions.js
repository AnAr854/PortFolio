function setStartingPositions(){
    document.getElementById("wormHead").style.gridArea = headsGridAreas[0].place;
    newPlaceForFood();
    updateLevelAndPoints();
    trackHead();
}

function updateLevelAndPoints(){
    document.getElementById("level").innerHTML = "Level " + level;
    document.getElementById("points").innerHTML = "Points " + points;
}

function startNewGame(event){
   location.reload();
}

function gameOver(){
    clearInterval(moveOn);
    let removes = document.querySelectorAll(".tailPiece, .turnTailPiece, #wormFood");
        removes.forEach(element => {
            element.remove();
        });
    document.getElementById("gameOver").innerHTML = "GAME OVER!!";
    drawBigWorm();
    let newGameButton = document.createElement('button');
    newGameButton.innerText = "Start new game";
    newGameButton.id = "newGameButton";
    newGameButton.addEventListener("click", function (event){
        startNewGame();
    });
    document.getElementById("gameZone").appendChild(newGameButton);
}