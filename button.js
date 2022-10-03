class Button{
    constructor(x, y, width, height, img, onclick){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.backgroundColor = "black";
        this.hoverColor = "gray";

        this.hovered = false;

        this.onclick = onclick;

        if(img == "none"){
            this.img = "none";
        }
        else{
            this.img = new Image();
            this.img.src = img;
        }
    }

    // Displays the button
    display(){
        if(this.img == "none"){
            if(this.hovered){
                ctx.fillStyle = this.hoverColor;
                ctx.fillRect(this.x, this.y, this.width, this.height);    
            }
            else{
                ctx.fillStyle = this.backgroundColor;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
        else{
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    // Checks if mouse is over top button
    checkHover(pos){
        if(pos.x > this.x && pos.x < this.x+this.width && pos.y > this.y && pos.y < this.y+this.height) {
            this.hovered = true;
        }  
        else{
            this.hovered = false;
        }  
    }

    // Changes the scene of the game (ex: shop, menu)
    click(){
        return this.onclick;
    }
}