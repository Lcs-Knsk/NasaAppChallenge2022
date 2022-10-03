canvas.addEventListener("mousemove", function(e){
    var pos = getMousePos(canvas, e);
    
    if(State == "Main"){
        for(var i = 0; i < MainButtons.length; i++){
            MainButtons[i].checkHover(pos);
        }
    }
    if(State == "Map"){
        for(var i = 0; i < MapButtons.length; i++){
            MapButtons[i].checkHover(pos);
        }
    }
});

canvas.addEventListener("mousedown", function(e){
    Step++;

    if(State == "Main"){
        var buttonClicked = "";
        for(var i = 0; i < MainButtons.length; i++){
            if(MainButtons[i].hovered){
                buttonClicked = MainButtons[i].click();
                break;
            }
        }

        console.log(buttonClicked);
        switch(buttonClicked){
            case "":
                break;
            case "up":
                StarMap.moveUp();
                break;
            case "down":
                StarMap.moveDown();
                break;
            case "right":
                StarMap.moveRight();
                break;
            case "left":
                StarMap.moveLeft();
                break;
            
            case "map":
                State = "Map";
                break;

            case "upgrade":
                if(Experience >= NeededExperiece)
                    doUpgrade();
                break;

            
            // Add cases for other 'State'
        }
    }
    else if(State == "Map"){
        var buttonClicked = "";
        for(var i = 0; i < MapButtons.length; i++){
            if(MapButtons[i].hovered){
                buttonClicked = MapButtons[i].click();
                break;
            }
        } 
        
        console.log(buttonClicked);
        switch(buttonClicked){
            case "telescope":
                State = "Main";
                break;
            case "upgrade":
                if(Experience >= NeededExperiece)
                    doUpgrade();
                break;
            
            // Add cases for other 'State'
        }
    }
});


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function doUpgrade(){
    Level++;
    Experience = 0;
    NeededExperiece = 1;


    if(Level == 2){
        StarMap = new Map(1, 2, 175, 450, -25)
    }
    else if(Level == 3){
        StarMap = new Map(4, 3, 300, 250, -25)
    }
    else if(Level == 4){
        StarMap = new Map(3, 2, 200, 0, 0);
    }
    else if(Level == 5){
        StarMap = new Map(1, 4, 300, 0, 0);
    }
    else if(Level == 6){
        StarMap = new Map(4, 2, 125, 100, -25);
    }
    else if(Level == 7){
        StarMap = new Map(3, 3, 100, 550, -40);
    }
    else if(Level == 8){
        StarMap = new Map(1, 3, 300, 600, 0);
    }
    else if(Level == 9){
        StarMap = new Map(3, 3, 200, 0, 0);
    }   
}