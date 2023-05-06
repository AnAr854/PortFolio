function movingUp(){
    currentRow--;
    trackHead();
    if(currentRow != 0){
        document.getElementById("wormHead").style.gridRow = currentRow + "/21";
        if(document.getElementById("wormFood").style.gridArea === document.getElementById("wormHead").style.gridArea){
            eatFood();
        }
        // Checking if eats own tail. Returns true if location is free
        if(checkWormsLocation(document.getElementById("wormHead").style.gridArea)){
            rotateAndMoveTailPieces(turnedTo);
        }else{
            clearInterval(moveOn);
            gameOver();
        }
    }else{
        gameOver();
    }    
}

function movingDown(){
    currentRow++;
    trackHead();
    if(currentRow != 22){
        document.getElementById("wormHead").style.gridRow = currentRow + "/21"; 
        if(document.getElementById("wormFood").style.gridArea === document.getElementById("wormHead").style.gridArea){
            eatFood();
        }
        if(checkWormsLocation(document.getElementById("wormHead").style.gridArea)){
            rotateAndMoveTailPieces();
        }else{
            clearInterval(moveOn);
            gameOver();
        }
    }else{
        gameOver();
    }    
}

function movingLeft(){
    currentCol--;
    trackHead();
    if(currentCol != 0){
        document.getElementById("wormHead").style.gridColumn = currentCol + "/21";
        if(document.getElementById("wormFood").style.gridArea === document.getElementById("wormHead").style.gridArea){
            eatFood();
        }
        if(checkWormsLocation(document.getElementById("wormHead").style.gridArea)){
            rotateAndMoveTailPieces();
        }else{
            clearInterval(moveOn);
            gameOver();
        }
    }else{
        gameOver();
    }    
}

function movingRight(){
    currentCol++;
    trackHead();
    if(currentCol != 22){
        document.getElementById("wormHead").style.gridColumn = currentCol + "/21";
        if(document.getElementById("wormFood").style.gridArea === document.getElementById("wormHead").style.gridArea){
            eatFood();
        }
        if(checkWormsLocation(document.getElementById("wormHead").style.gridArea)){
            rotateAndMoveTailPieces();
        }else{
            clearInterval(moveOn);
            gameOver();
        }
    }else{
        gameOver();
    }    
}

