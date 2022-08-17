canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var greencar_width=75;
var greencar_height=100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

var greencar_x=5;
var greencar_y=225;

function add() {
    backgroundImg=new Image()
    backgroundImg.onload=uploadBackground;
    backgroundImg.src=backgroundImage;

	greencarImgtag=new Image()
	greencarImgtag.onload=uploadGreenCar;
	greencarImgtag.src=greencarImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height)

}

function uploadGreenCar() {
    ctx.drawImage(greencarImgtag,greencar_x,greencar_y,greencar_width,greencar_height)
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(greencar_y>=0){
        greencar_y=greencar_y-10;
        uploadBackground();
        uploadGreenCar();
    }
}

function down()
{
    if(greencar_y<=300){
        greencar_y=greencar_y+10;
        uploadBackground();
        uploadGreenCar();
    }
}

function left()
{
    if(greencar_x>=0){
        greencar_x=greencar_x-10;
        uploadBackground();
        uploadGreenCar();
    }
}

function right()
{
    if(greencar_x<=700){
        greencar_x=greencar_x+10;
        uploadBackground();
        uploadGreenCar();
    }
}
