var can;
var ctx;
var w,h;
var girlPic = new Image();
var starPic = new Image();

var canvasWidth = window.innerWidth;
var  canvasHeight = window.innerHeight;

var num = 60;
var stars = [];

var lastTime;
var deltaTime;

var switchy = false;

function init(){
    //console.log("a");
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");
    w = can.width;
    h = can.height;

    //w = canvasWidth;
    //h = canvasHeight;
    //console.log(w);
    document.addEventListener("mousemove",mousemove,false);
    girlPic.src = "img/girl.jpg";
    starPic.src = "img/star.png";

    for(var i = 0;i<num;i++){
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime = Date.now();
    gameloop();
}

document.body.onload = init();

function gameloop(){

    window.requestAnimFrame(gameloop);

    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    //console.log(deltaTime);

    drawBackground();
    drawGirl();
    drawStarts();

}

function drawBackground(){
    ctx.fillStyle = "#393550";
    ctx.fillRect(0,0,w,h);
}

function drawGirl(){
  ctx.drawImage(girlPic,100,150,600,400);
}

function mousemove(e){

}
