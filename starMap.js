


class Map{
    constructor(col, row, panelWidth, offsetLeft, offsetTop){
        // Assign "Panels to random spots":
        // Each real picture with get random spot (0-5, 0-5) the rest of the pictures will fill in
        // Array is 6x6

        // Create an array 6x6
        // Assign random spots in the array to the goals
        // Go all the way through the array and check if it is not a goal, place an image
        
        // Goal is at 1, 3
        
        this.arr = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        for(var i = 0; i < this.arr.length; i++){
            for(var j = 0; j < this.arr[i].length; j++){
                if(this.arr[i][j] == null || this.arr[i][j] == 0 || this.arr[i][j] == ""){
                    this.arr[i][j] = new Panel(200*this.col, 200*this.row, false);
                }
            }
        }
        
        // Creates the goal
        this.arr[col][row] = new Panel(this.panelWidth*this.col+this.offsetLeft, this.panelWidth*this.row+this.offsetTop, true);        

        this.row = 2;
        this.col = 2;

        this.max = 5;

        this.arr[2][2].checked = true;

        this.panelWidth = panelWidth;
        this.offsetLeft = offsetLeft;
        this.offsetTop = offsetTop;
    }

    moveUp(){
        if(this.row-1 >= 0){
            this.row -= 1;
        }
        this.arr[this.col][this.row].visit();
        console.log(this.col + " : " + this.row);
    }
    moveDown(){
        if(this.row+1 < this.max){
            this.row += 1;
        }
        this.arr[this.col][this.row].visit();
        console.log(this.col + " : " + this.row);
    }
    moveRight(){
        if(this.col+1 < this.max){
            this.col += 1;
        }
        this.arr[this.col][this.row].visit();
        console.log(this.col + " : " + this.row);
    }
    moveLeft(){
        if(this.col-1 >= 0){
            this.col -= 1;
        }
        
        this.arr[this.col][this.row].visit();

        console.log(this.col + " : " + this.row);
    }

    // Displays the current panel
    displayPanel(){
        // Draw panel
        ctx.drawImage(Levels[Level], this.col*this.panelWidth+this.offsetLeft, this.row*this.panelWidth+this.offsetTop, this.panelWidth, this.panelWidth, 210, 10, 580, 580);
        
        if(this.arr[this.col][this.row].isGoal){
            ctx.beginPath();
            ctx.arc(500, 300, 250, 0, 2*Math.PI);
            ctx.strokeStyle = "green";
            ctx.lineWidth = 10;
            ctx.stroke();
        }
    }
}

class Panel{
    // Give the panel function, without images

    constructor(x, y, isGoal){
        this.checked = false;
        this.isGoal = isGoal;
        this.x = x;
        this.y = y;
    }

    visit(){

        if(this.isGoal && !this.checked){
            Experience++;
        }

        this.checked = true;
        

        // If this is goal, add one to experience
    }

    draw(){
        if(this.isGoal)
            ctx.fillStyle = "green";
        else
            ctx.fillStyle = "black";

        ctx.fillRect(450, 250, 100, 100);
    }
}