function growWorm(){
    let tailPiece = document.createElement('div');
    tailPiece.className = "tailPiece";
    tailPiece.id = tailPieceCount;
    tailPiece.style.gridArea = headsGridAreas[headsGridAreas.length - tailPiece.id].place;
    tailPiece.transform = "rotate(" + headsGridAreas[headsGridAreas.length - tailPiece.id].direction +"deg)";
    tailPieceCount++;
    document.getElementById("gameZone").appendChild(tailPiece);    
}

function trackHead(){
   let saveLocationAndDirection = {};
   saveLocationAndDirection.place = document.getElementById("wormHead").style.gridArea;
   saveLocationAndDirection.direction = currentRotation;
   headsGridAreas.push(saveLocationAndDirection);
    if(headsGridAreas.length > 431){  
        headsGridAreas.shift();
    }
}

function rotateAndMoveTailPieces(){
        let tailPieces = document.getElementsByClassName("tailPiece");
            for(i=0; i<tailPieces.length; i++){
                document.getElementById(tailPieces[i].id).style.transform = "rotate(" + headsGridAreas[headsGridAreas.length - tailPieces[i].id].direction +"deg)";
                document.getElementById(tailPieces[i].id).style.gridArea = headsGridAreas[headsGridAreas.length - tailPieces[i].id].place;
            }
}

function checkWormsLocation(locationToCheck){
    //Checking only occupied indexes in headGridAreas array
    let startingIndexInCheck = (headsGridAreas.length + 1 - tailPieceCount)
    for (i=startingIndexInCheck; i<headsGridAreas.length; i++){
        if(locationToCheck === headsGridAreas[i].place){
            return false;
        }
    }
    return true;
}