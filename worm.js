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

function drawBigWorm(){
    document.getElementById("wormHead").style.gridArea = " 11 / 11 / 21 / 21";
    document.getElementById("wormHead").style.transform = "rotate(" + 90 + "deg)";
    for(i=2; i<21; i++){
        //Toprow
        let tailPiece = document.createElement('div');
        if(i === 11){
        tailPiece.className = "turnTailPiece";
        tailPiece.style.transform = "rotate(" + 270 + "deg)";
        tailPiece.style.margin = "0.2em 0em 0em 0.3em";
        tailPiece.style.gridArea = "1 / 11 / 21 / 21";
        }else{
        tailPiece.className = "tailPiece";
        tailPiece.style.gridArea = "1 / " + i + " / 21 / 21";
        }
        document.getElementById("gameZone").appendChild(tailPiece);
        //Bottomrow
        tailPiece = document.createElement('div');
        tailPiece.className = "tailPiece";
        tailPiece.style.transform = "rotate(" + 180 + "deg)";
        tailPiece.style.gridArea = "21 / " + i + " / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece); 
        //Right side
        tailPiece = document.createElement('div');
        tailPiece.className = "tailPiece";
        tailPiece.style.transform = "rotate(" + 90 + "deg)";
        tailPiece.style.gridArea = i + " / 21 / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece);
        //Left side
        tailPiece = document.createElement('div');
        tailPiece.className = "tailPiece";
        tailPiece.style.transform = "rotate(" + 270 + "deg)";
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
    let tailPiece = document.createElement('div');
        tailPiece.className = "turnTailPiece";
        tailPiece.style.margin = "0.19em 0.07em 0em";
        tailPiece.style.gridArea = "1 / 21 / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece);

        tailPiece = document.createElement('div');
        tailPiece.className = "turnTailPiece";
        tailPiece.style.transform = "rotate(" + 90 + "deg)";
        tailPiece.style.margin = "0.0em 0.1em 0.1em 0.1em";
        tailPiece.style.gridArea = "21 / 21 / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece);

        tailPiece = document.createElement('div');
        tailPiece.className = "turnTailPiece";
        tailPiece.style.transform = "rotate(" + 180 + "deg)";
        tailPiece.style.margin = "0em 0.1em 0.1em 0.26em";
        tailPiece.style.gridArea = "21 / 1 / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece);

        tailPiece = document.createElement('div');
        tailPiece.className = "turnTailPiece";
        tailPiece.style.transform = "rotate(" + 270 + "deg)";
        tailPiece.style.margin = "0.2em 0em 0em 0.3em";
        tailPiece.style.gridArea = "1 / 1 / 21 / 21";
        document.getElementById("gameZone").appendChild(tailPiece);

}