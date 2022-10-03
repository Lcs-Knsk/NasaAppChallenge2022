const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext('2d');

// Steps for new levels
// 1. Add a level and give it an image, add level to levels
// 2. In events make a new star map for it


// Possible states are Main, Map, Menu
var State = "Menu";

var Level = 1;
var Experience = 0;
var NeededExperiece = 1;

// Earth telescope
var LevelOne = new Image();
LevelOne.src = "MoonFromRegularTelescope.jpg";

// Regular
var LevelSix = new Image();
LevelSix.src = "LunarEclipse.jpg"

// Hubble 
var LevelFour = new Image();
LevelFour.src = "CollidingGalaxies.jpg";

// Hubble
var LevelFive = new Image();
LevelFive.src = "HubbleNebula.jpg";

// Hubble
var LevelSeven = new Image();
LevelSeven.src = "MeteriorBelt.jpg";

// James Webb
var LevelTwo = new Image();
LevelTwo.src = "JupiterFromWebb.jpg";

// James Webb
var LevelThree = new Image();
LevelThree.src = "Neptune.png";

// James Webb
var LevelEight = new Image();
LevelEight.src = "GalaxySpiralThing.jpg";

// James Webb
var LevelNine = new Image();
LevelNine.src = "CartwheelGalaxy.png";

var Levels = [0, LevelOne, LevelSix, LevelFour, LevelFive, LevelSeven, LevelTwo, LevelThree, LevelEight, LevelNine];


// Buttons for main screen
// Possible Clicks: telescope, map, up, down, right, left
var lookingGlassButton = new Button(10, 10, 100, 100, "observatory.png", "telescope");
var map = new Button(120, 10, 100, 100, "radar-sweep.png", "map");

var upgrade = new Button(890, 10, 100, 100, "upgrade.png", "upgrade");
var upgradeReady = new Button(890, 10, 100, 100, "UpgradeReady.png", "upgrade")

var longW = 75;
var shortW = 50;
var upArrow = new Button(500-(longW/2), 0, longW, shortW, "Up.svg", "up");
var downArrow = new Button(500-(longW/2), 550, longW, shortW, "Down.svg", "down");
var rightArrow = new Button(750, 300-(longW/2), shortW, longW, "Arrow.svg", "right");
var leftArrow = new Button(200, 300-(longW/2), shortW, longW, "Left.svg", "left");

var MainButtons = [lookingGlassButton, map, upgrade, upArrow, downArrow, rightArrow, leftArrow];

var lookingGlass = function(){
    ctx.beginPath();
    ctx.arc(500, 300, 350, 0, 2*Math.PI);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 200;
    ctx.stroke();
}

var experienceDisplay = function(){
    ctx.font = "30px Lucida Console";
    if(Experience >= NeededExperiece){
        ctx.fillStyle = "green";
    }
    else{
        ctx.fillStyle = "black";
    }
    ctx.fillText("Found: " + Experience + "/" + NeededExperiece, 10, 580);

}

var zoomDisplay = function(){
    if(Experience >= NeededExperiece){
        ctx.fillStyle = "green";
    }
    else{
        ctx.fillStyle = "black";
    }
    ctx.font = "30px Lucida Console";
    ctx.fillText("Level: " + Level, 220, 580);
}

var coordsDisplay = function(){
    if(Experience >= NeededExperiece){
        ctx.fillStyle = "green";
    }
    else{
        ctx.fillStyle = "black";
    }
    ctx.font = "30px Lucida Console";
    ctx.fillText("Cooridinates: (" + (StarMap.col+1) + "," + (StarMap.row+1) + ")", 650, 580);
}

var textMapDisplay = function(){
    ctx.fillStyle = "black";
    ctx.font = "20px Lucida Console";
    ctx.fillText("Map", 150, 130);
}

var textTelescopeDisplay = function(){
    ctx.fillStyle = "black";
    ctx.font = "20px Lucida Console";
    ctx.fillText("Telescope", 8, 130);
}

var textUpgradeDisplay = function(){
    ctx.fillStyle = "black";
    ctx.font = "20px Lucida Console";
    ctx.fillText("Upgrade", 900, 130);
}


var XValue = 760;
var topYValue = 190;
var textInfoDisplay = function(){
    // Style of the text
    ctx.fillStyle = "green";
    ctx.font = "15px Lucida Console";

    if(Level == 1){
        // This is an image of the night sky seen from a regular eye on earth. 
        // Try and find the moon.
        ctx.fillText("This is the night sky", XValue, topYValue);
        ctx.fillText("seen from a regular", XValue, topYValue+15);
        ctx.fillText("eye on earth.", XValue, topYValue+30);
        ctx.fillText("Try and find the moon!", XValue, topYValue+45);
    }
    else if(Level == 2){
        ctx.fillText("A blood moon in the", XValue, topYValue);
        ctx.fillText("night sky, visible from", XValue, topYValue+15);
        ctx.fillText("an eye on earth.", XValue, topYValue+30);
        ctx.fillText("Try and find the center of it!", XValue, topYValue+45);
 
    }
    else if(Level == 3){
        // From the hubble space telescope, two over lapping spiral galaxies
        // were seen colliding. These galaxies lie more than a billion light-years 
        // From earth. 
        ctx.fillText("From the hubble telescope,", XValue, topYValue);
        ctx.fillText("two colliding spiral", XValue, topYValue+15);
        ctx.fillText("galaxies were seen more", XValue, topYValue+30);
        ctx.fillText("than 2 billion light-years", XValue, topYValue+45);
        ctx.fillText("from Earth.", XValue, topYValue+60);
        ctx.fillText("Try and find the galaxies!", XValue, topYValue+75);
    }
    else if(Level == 4){
        // From the hubble space telescope, the planetary nebula is seen about 2000 light years
        // from earth. 
        ctx.fillText("From the hubble telescope,", XValue, topYValue);
        ctx.fillText("the planetary nebula is", XValue, topYValue+15);
        ctx.fillText("seen about 2000 light-years", XValue, topYValue+30);
        ctx.fillText("from Earth.", XValue, topYValue+45);
        ctx.fillText("Try and find the center!", XValue, topYValue+60);
    }
    else if(Level == 5){
        ctx.fillText("From the hubble telescope,", XValue, topYValue);
        ctx.fillText("Hubble revealed an", XValue, topYValue+15);
        ctx.fillText("asteriod with tails", XValue, topYValue+30);
        ctx.fillText("radiating from it. Try", XValue, topYValue+45);
        ctx.fillText("and find the start of the", XValue, topYValue+60);
        ctx.fillText("trail.", XValue, topYValue+75);
 
    }
    else if(Level == 6){
        // From the James Webb Space telescope, Jupiter was with its faint rings and it's big red spot. 
        ctx.fillText("From the James Webb Space", XValue, topYValue);
        ctx.fillText("Telescope Jupiter was seen", XValue, topYValue+15);
        ctx.fillText("with its faint rings and", XValue, topYValue+30);
        ctx.fillText("big red spot.", XValue, topYValue+45);
        ctx.fillText("Try and find Jupiters Spot!", XValue, topYValue+60);
    }
    else if(Level == 7){
        // From the James Webb Space Telescope, we saw the clearest view of Neptune's ring in more than 30 years.
        ctx.fillText("From the JWST", XValue, topYValue);
        ctx.fillText("we saw the clearest view", XValue, topYValue+15);
        ctx.fillText("of Neptune's ring in", XValue, topYValue+30);
        ctx.fillText("over 30 years.", XValue, topYValue+45);
        ctx.fillText("Try and find Neptune!", XValue, topYValue+60);
    }
    else if(Level == 8){
        ctx.fillText("From the JWST", XValue, topYValue);
        ctx.fillText("The Spiral Galaxy", XValue, topYValue+15);
        ctx.fillText("NGC 3351. ", XValue, topYValue+30);
        ctx.fillText("Try and find the center!", XValue, topYValue+45);
    }
    else if(Level == 9){
        ctx.fillText("From the JWST", XValue, topYValue);
        ctx.fillText("The Carthweel Galaxy", XValue, topYValue+15);
        ctx.fillText("500 millions light-years", XValue, topYValue+30);
        ctx.fillText("From Earth.", XValue, topYValue+45);
        ctx.fillText("Try and find the center!", XValue, topYValue+60);
    }
}

// Displays everything that is apart of the main state
function DisplayMain(){
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 600);

    StarMap.displayPanel();
    

    lookingGlass();
    experienceDisplay();
    zoomDisplay();
    coordsDisplay();
    textMapDisplay();
    textTelescopeDisplay();
    textUpgradeDisplay();

    if(Step >= 5){
        textInfoDisplay();
    }



    for(var i = 0; i < MainButtons.length; i++){
        MainButtons[i].display();
    }

    // Displays ready upgrade
    if(Experience >= NeededExperiece){
        upgradeReady.display();
    }

    if(Step == 0)
        StepOne();
    else if(Step==1)
        StepTwo();
    else if(Step==2)
        StepThree();
    else if(Step == 3)
        StepFour();
    else if(Step == 4)
        StepFive();
}



var StarMap = new Map(1, 0, 75, 25, 40);

function GameLoop(){
    if(Level >= 10){
        State = "End";
    }

    if(State == "Menu"){
        DisplayMenu();
        Step = 0;
    }
    else if(State == "Main"){
        ctx.globalAlpha = 1;
        DisplayMain();
    }
    else if(State == "Map"){
        DisplayMap();
    }
    else if(State == "End"){
        ctx.clearRect(0, 0, 1000, 600);
        DisplayEnd();
    }
}

window.onload = function() {
    setInterval(GameLoop, 16.666);
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////
function DisplayEnd(){
    StarMap = null;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 600);

    ctx.globalAlpha = 1;
    ctx.drawImage(TitleImg, 0, 0, 1000, 600);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////


var TitleImg = new Image();
TitleImg.src = "SpaceObservatory.webp";

var alpha = 1,   /// current alpha value
    delta = 0.002; /// delta = speed

// Default is: .000015;
var changeInDelta = .000015;

function ShowTitle(){
    alpha -= delta;
    delta += changeInDelta;
    if (alpha <= 0){
        State = "Main";
    } 

    /// clear canvas, set alpha and re-draw image
    ctx.globalAlpha = alpha;

    ctx.drawImage(TitleImg, 0, 0, 1000, 600);

    ctx.fillStyle = "black";
    ctx.strokeStyle = "white";
    ctx.font = "60px Lucida Console";

    ctx.fillText("Welcome To:", 300, 200-100);
    ctx.fillText("The Space Observatory", 100, 280-100);
    ctx.strokeText("Welcome To:", 300, 200-100);
    ctx.strokeText("The Space Observatory", 100, 280-100);
    
}

function DisplayMenu(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 600);


    // Show title
    ShowTitle();
}

var Step = 0;

var StepOne = function(){
    ctx.fillStyle = "red";
    ctx.font = "15px Lucida Console";
    ctx.fillText("The Telescope button brings you", 10, 155);
    ctx.fillText("back to the observatory page.", 10, 170);
    ctx.fillText("(Click to move to next step)", 10, 185)
}

var StepTwo = function(){
    ctx.fillStyle = "red";
    ctx.font = "15px Lucida Console";
    ctx.fillText("The map button brings you to a", 10, 155);
    ctx.fillText("page of the image being built.", 10, 170);
}

var StepThree = function(){
    ctx.fillStyle = "red";
    ctx.font = "15px Lucida Console";
    ctx.fillText("Whenever you spot the item you are looking for", 725, 155);
    ctx.fillText("are looking for, this button", 725, 170);
    ctx.fillText("will light up and you can move to the next image.", 725, 185);
    ctx.fillText("to the next image.", 725, 200);
}

var StepFour = function(){
    ctx.fillStyle = "red";
    ctx.font = "15px Lucida Console";
    ctx.fillText("Any info about what", XValue, topYValue);
    ctx.fillText("you are looking at will", XValue, topYValue+15);
    ctx.fillText("be displayed right here.", XValue, topYValue+30);
}

var StepFive = function(){
    ctx.fillStyle = "red";
    ctx.font = "15px Lucida Console";
    ctx.fillText("Now click the arrows", XValue, topYValue);
    ctx.fillText("around the looking glass", XValue, topYValue+15);
    ctx.fillText("and explore space!", XValue, topYValue+30);
}




