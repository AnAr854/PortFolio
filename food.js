function eatFood(){
    growWorm();
    points = points + 10;
    if(points == pointsOnLevel){
        level++;
        levelInterval = levelInterval - 100;
        pointsOnLevel = pointsOnLevel + 60;
    }
    updateLevelAndPoints();
    newPlaceForFood();
}

function newPlaceForFood(){
    let foodOnCol = Math.floor(Math.random() * 21 + 1); 
    let foodOnRow = Math.floor(Math.random() * 21 + 1);

    if(checkWormsLocation(foodOnRow + " / " + foodOnCol + " / 21 / 21")){ 
        document.getElementById("wormFood").style.gridArea = foodOnRow + "/" + foodOnCol + "/ 21 / 21";
    }
    else{
        newPlaceForFood();
    }
}