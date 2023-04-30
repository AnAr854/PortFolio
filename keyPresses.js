document.body.addEventListener("keydown", function (event){
    event.preventDefault();
    clearInterval(moveOn);
    
    if(event.key === "ArrowUp"){
        if(currentRotation === 270){
            moveOn = setInterval(movingUp, levelInterval); 
        }else if(currentRotation === 90){
            moveOn = setInterval(movingDown, levelInterval);
        }else{
            currentRotation = 270;
            document.getElementById("wormHead").style.transform = "rotate(" + currentRotation + "deg)";
            moveOn = setInterval(movingUp, levelInterval);
        }
    }   
    else if(event.key === "ArrowDown"){
        if(currentRotation === 90){
            moveOn = setInterval(movingDown, levelInterval); 
        }else if (currentRotation === 270){
            moveOn = setInterval(movingUp, levelInterval);
        }else{
            currentRotation = 90;
            document.getElementById("wormHead").style.transform = "rotate(" + currentRotation +"deg)";
            moveOn = setInterval(movingDown, levelInterval);
        }
    }   
    else if(event.key === "ArrowLeft"){
        if(currentRotation === 180){
            moveOn = setInterval(movingLeft, levelInterval); 
        }else if(currentRotation === 0){
            moveOn = setInterval(movingRight, levelInterval);
        }else{
            currentRotation = 180;
            document.getElementById("wormHead").style.transform = "rotate(" + currentRotation +"deg)";
            moveOn = setInterval(movingLeft, levelInterval);
        } 
    }
    else if(event.key === "ArrowRight"){
        if(currentRotation === 0){
            moveOn = setInterval(movingRight, levelInterval); 
        }
        else if(currentRotation === 180){
            moveOn = setInterval(movingLeft, levelInterval);
        }else{
            currentRotation = 0;
            document.getElementById("wormHead").style.transform = "rotate(" + currentRotation + "deg)";
            moveOn = setInterval(movingRight, levelInterval);
        }
    }
});

