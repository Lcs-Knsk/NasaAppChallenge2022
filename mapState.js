// Buttons for map screen
// Possible Clicks: challenges, map, shop, looking glass
var lookingGlassMap = new Button(10, 10, 100, 100, "observatory.png", "telescope");
var map = new Button(120, 10, 100, 100, "radar-sweep.png", "map");

var upgradeMap = new Button(890, 10, 100, 100, "upgrade.png", "upgrade");
var upgradeReadyMap = new Button(890, 10, 100, 100, "UpgradeReady.png", "upgrade")

var MapButtons = [lookingGlassMap, upgradeMap, map];

// Experience and Zoom displays are used but are not changed from main
// Definitions for these are in main.js

function GuideMap(){
    var boxSize = 100;
    var column = 5;
    var row = 5;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(500-(boxSize*column/2), 20, boxSize*column, boxSize*row);

    ctx.drawImage(Levels[Level], StarMap.offsetLeft, StarMap.offsetTop, column*StarMap.panelWidth, row*StarMap.panelWidth, 500-(boxSize*column/2), 20, boxSize*column, boxSize*row);


    var Saved = [];

    for(var i = 0; i < StarMap.arr.length; i++){
        for(var j = 0; j < StarMap.arr[i].length; j++){
            if(StarMap.arr[i][j].checked == false){
                ctx.fillStyle = "white";
                ctx.fillRect(i*100+500-(boxSize*column/2), j*100+20, 100, 100);
            }

            ctx.strokeStyle = "white";
            ctx.strokeWidth = 2;
            ctx.strokeRect(i*100+500-(boxSize*column/2), j*100+20, 100, 100);

            if(StarMap.arr[i][j].isGoal == true && StarMap.arr[i][j].checked == true){
                Saved[Saved.length] = [i, j];
            }

        }
    }

    ctx.strokeStyle = "red";
    ctx.strokeRect(StarMap.col*100+500-(boxSize*column/2), StarMap.row*100+20, 100, 100);

    for(var i = 0; i < Saved.length; i++){
        ctx.strokeStyle = "green";
        ctx.strokeRect(Saved[i][0]*100+500-(boxSize*column/2), Saved[i][1]*100+20, 100, 100);
    }

}

var textInfoMapDisplay = function(){
    ctx.fillStyle = "green";
    ctx.font = "15px Lucida Console";
    ctx.fillText("Look at all the images to", 10, 155);
    ctx.fillText("unveil the full picture.", 10, 170);
    ctx.fillText("A red box shows where the", 10, 185)
    ctx.fillText("telescope is pointing.", 10, 200);
    ctx.fillText("A green box shows your", 10, 215);
    ctx.fillText("goal.", 10, 230);
}

function DisplayMap(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 600);

    experienceDisplay();
    zoomDisplay();
    textMapDisplay();
    textTelescopeDisplay();
    textUpgradeDisplay();

    textInfoDisplay();
    textInfoMapDisplay();

    for(var i = 0; i < MapButtons.length; i++){
        MapButtons[i].display();
    }

    // Main part of map state
    GuideMap();

    // Displays ready upgrade
    if(Experience >= NeededExperiece){
        upgradeReady.display();
    }
}

