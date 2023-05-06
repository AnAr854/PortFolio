

function trackHead(){
   let saveLocationAndDirection = {};
   turnedTo = checkIfTurned();
   saveLocationAndDirection.place = document.getElementById("wormHead").style.gridArea;
   saveLocationAndDirection.direction = currentRotation;
   saveLocationAndDirection.turningTo = turnedTo;
   headsGridAreas.push(saveLocationAndDirection);
    if(headsGridAreas.length > 431){  
        headsGridAreas.shift();
    }
}

function rotateAndMoveTailPieces(turnedTo){
    let tailPieces = document.querySelectorAll(".tailPiece, .turnTailPiece");
    for(i=0; i<tailPieces.length; i++){
        document.getElementById(tailPieces[i].id).style.gridArea = headsGridAreas[headsGridAreas.length - tailPieces[i].id].place;

        if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "straightAhead"){
            document.getElementById(tailPieces[i].id).className = "tailPiece";
            document.getElementById(tailPieces[i].id).style.transform = "rotate(" + headsGridAreas[headsGridAreas.length - tailPieces[i].id].direction +"deg)";
            document.getElementById(tailPieces[i].id).style.gridArea = headsGridAreas[headsGridAreas.length - tailPieces[i].id].place;
        }
        else if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "upRight"){
            document.getElementById(tailPieces[i].id).className = "turnTailPiece outerCorner";
        }
        else if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "upLeft"){
            document.getElementById(tailPieces[i].id).className = "turnTailPiece innerCorner rotate0";
        }
        else if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "downLeft"){
            document.getElementById(tailPieces[i].id).className = "turnTailPiece outerCorner rotate90";
        }
        else if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "downRight"){
            document.getElementById(tailPieces[i].id).className = "turnTailPiece innerCorner rotate180";
        }
        else if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "rightDown"){
            document.getElementById(tailPieces[i].id).className = "turnTailPiece outerCorner rotate0";
        }
        else if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "rightUp"){
            document.getElementById(tailPieces[i].id).className = "turnTailPiece innerCorner rotate90";
        }
        else if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "leftDown"){
            document.getElementById(tailPieces[i].id).className = "turnTailPiece innerCorner rotate270";
        }
        else if(headsGridAreas[headsGridAreas.length - tailPieces[i].id].turningTo === "leftUp"){
            document.getElementById(tailPieces[i].id).className = "turnTailPiece outerCorner rotate180";
        }
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

function growWorm(){
    let tailPiece = document.createElement('div');
    tailPiece.className = "tailPiece";
    tailPiece.id = tailPieceCount;
    tailPiece.style.gridArea = headsGridAreas[headsGridAreas.length - tailPiece.id].place;
    tailPiece.transform = "rotate(" + headsGridAreas[headsGridAreas.length - tailPiece.id].direction +"deg)";
    tailPieceCount++;
    document.getElementById("gameZone").appendChild(tailPiece);    
}

function checkIfTurned(){
    //Return statements: first moving to- direction and second new direction
        if(headsGridAreas[headsGridAreas.length - 1].direction === 0 && currentRotation === 270){
            return "rightUp";
        }
        if(headsGridAreas[headsGridAreas.length - 1].direction === 0 && currentRotation === 90){
            return "rightDown";
        }
        if(headsGridAreas[headsGridAreas.length - 1].direction === 180 && currentRotation === 270){
            return "leftUp";
        }
        if(headsGridAreas[headsGridAreas.length - 1].direction === 180 && currentRotation === 90){
            return "leftDown";
        }if(headsGridAreas[headsGridAreas.length - 1].direction === 90 && currentRotation === 0){
            return "downRight";
        }
        if(headsGridAreas[headsGridAreas.length - 1].direction === 90 && currentRotation === 180){
            return "downLeft";
        }
        if(headsGridAreas[headsGridAreas.length - 1].direction === 270 && currentRotation === 0){
            return "upRight";
        }
        if(headsGridAreas[headsGridAreas.length - 1].direction === 270 && currentRotation === 180){
            return "upLeft";
        }else{
            return "straightAhead";
        }
}

function drawBigWorm(){
    document.getElementById("wormHead").style.gridArea = " 11 / 11 / 21 / 21";
    document.getElementById("wormHead").style.transform = "rotate(" + 90 + "deg)";

    for(i=2; i<21; i++){

        //Toprow
        let tailPiece = document.createElement('div');
        tailPiece.className = "tailPiece";
        if(i === 11){
            tailPiece.className = "turnTailPiece innerCorner rotate270"
            tailPiece.style.gridArea = "1 / 11 / 21 / 21";
        }else{
            tailPiece.style.transform = "rotate(" + 180 + "deg)";
            tailPiece.style.gridArea = "1 / " + i + " / 21 / 21";
        }
        document.getElementById("gameZone").appendChild(tailPiece);

        //Bottomrow
        tailPiece = document.createElement('div');
        tailPiece.className = "tailPiece";
        tailPiece.style.gridArea = "21 / " + i + " / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece); 

        //Right side
        tailPiece = document.createElement('div');
        tailPiece.className = "tailPiece";
        tailPiece.style.transform = "rotate(" + 270 + "deg)";
        tailPiece.style.gridArea = i + " / 21 / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece);

        //Left side
        tailPiece = document.createElement('div');
        tailPiece.className = "tailPiece";
        tailPiece.style.transform = "rotate(" + 90 + "deg)";
        tailPiece.style.gridArea = i + " / 1 / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece);
    }
    //From toprow to head
    for(i=2; i<11; i++){
        let tailPiece = document.createElement('div');
        tailPiece.className = "tailPiece";
        tailPiece.style.transform = "rotate(" + 90 + "deg)";
        tailPiece.style.gridArea = i + " / 11 / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece);
    }
    //Corners 
    let cornerPiece = document.createElement('div');
        cornerPiece.className = "turnTailPiece innerCorner rotate0";
        cornerPiece.style.gridArea = "1 / 21 / 21 / 21";
        document.getElementById("gameZone").appendChild(cornerPiece);

        cornerPiece = document.createElement('div');
        cornerPiece.className = "turnTailPiece innerCorner rotate90";
        cornerPiece.style.gridArea = "21 / 21 / 21 / 21";
        document.getElementById("gameZone").appendChild(cornerPiece);

        cornerPiece = document.createElement('div');
        cornerPiece.className = "turnTailPiece innerCorner rotate180";
        cornerPiece.style.gridArea = "21 / 1 / 21 / 21";
        document.getElementById("gameZone").appendChild(cornerPiece);

        cornerPiece = document.createElement('div');
        cornerPiece.className = "turnTailPiece innerCorner rotate270";
        cornerPiece.style.gridArea = "1 / 1 / 21 / 21";
        document.getElementById("gameZone").appendChild(cornerPiece);

}

