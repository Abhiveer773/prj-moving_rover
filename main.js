canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasaimgarray = ["mars.jpg", "mars 1.jpg", "mars 2.jpg", "mars 3.jpg"];

randomimg = Math.floor(Math.random() * 3);

roverwidth = 100;
roverheight = 60;

roverX = 10;
roverY = 10;

backgroundimage = nasaimgarray[randomimg];
roverimg = "rover.png";

function add()
{
backgroundimagetag = new Image();
backgroundimagetag.onload = uploadbackground;
backgroundimagetag.src = backgroundimage;

roverimagetag = new Image();
roverimagetag.onload = uploadrover;
roverimagetag.src = roverimg;
}

function uploadbackground()
{
    ctx.drawImage(backgroundimagetag, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(roverimagetag, roverX, roverY, roverwidth, roverheight);
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == "37")
    {
      left();
      console.log("left");
    }

    if(keypressed == "38")
    {
      up();
      console.log("up");
    }

    if(keypressed == "39")
    {
      right();
      console.log("right");
    }

    if(keypressed == "40")
    {
      down();
      console.log("down");
    }
}

function left()
{
    if(roverX >= 0)
    {
        roverX = roverX-10;
        console.log("when left arrow is pressed, X = " + roverX + ", Y =" + roverY);
        uploadbackground();
        uploadrover();
    }
}

function right()
{
    if(roverX <= 700)
    {
        roverX = roverX +  10;
        console.log("when right arrow is pressed, X = " + roverX + ", Y =" + roverY);
        uploadbackground();
        uploadrover();
    } 
}
function up()
{
    if(roverY >= 0)
    {
        roverY = roverY - 10;
        console.log("when up arrow is pressed, X = " + roverX + ", Y =" + roverY);
        uploadbackground();
        uploadrover();
    }
}
function down()
{
    if(roverY <= 500)
    {
        roverY = roverY + 10;
        console.log("when down arrow is pressed, X = " + roverX + ", Y =" + roverY);
        uploadbackground();
        uploadrover();
    }
}