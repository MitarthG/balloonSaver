var bal, balImg;
var bg, bgImg, bg1, bg1Img;
var dar, darImg;
var dGroup;
var coin,cGroup,cImg;
var gameState = "play";
var score=0;
function preload() {
 back()
  balImg = loadImage("balloon1.png");
  darImg = loadImage("dart11.png");
  
  cImg= loadImage("coin1.jpg.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites();

 /* bg = createSprite(80, 200, windowWidth, windowHeight);
  bg.addImage("day", bgImg);
  bg.scale = 4;
  // bg.velocityX=-5*/

  bal = createSprite(30, windowHeight / 2, 50, 50);
  bal.addImage("baloon", balImg);
  bal.scale = 0.2;
 // bal.velocityX = 4;
 // bal.velocityY = 3;
  bal.setCollider("circle",30,30,30)
  bal.debug=true
cGroup=new Group();
  dGroup = new Group();
}

function draw() {
  if(bgImg)
  background(bgImg);
  //console.log(dar.x)
  /* if(bg.x<0){
    bg.x=bg.width/2
  }*/
  textSize(20)
  text("score: "+score,windowWidth-95,45)
  console.log(score)
  //to move balloon with mouse
  bal.x=mouseX;
  bal.y=mouseY;
  if (gameState === "play") {
    dart();
    spawnCoin();
    
     if (bal.isTouching(cGroup)) {
      coin.destroy();
      score+=25
    }
    if (bal.isTouching(dGroup)) {
      bal.destroy();
      gameState = "end";
    }
    bal.bounceOff(edges);
  } else if (gameState === "end") {
    dGroup.setVelocityXEach(0);
    dGroup.setLifetimeEach(-1);
    score=0
    //bg.changeImage("night",bg1Img)
  }

  drawSprites();
}

function dart() {
  if (frameCount % 20 === 0) {
    dar = createSprite(windowWidth - 60, 40, 50, 50);
    var r = Math.round(random(0, windowHeight));
    dar.y = r;
    dar.addImage("dart", darImg);
    dar.scale = 0.3;
    dar.velocityX = -15;
    dGroup.add(dar);
    dar.lifetime = 50;
  }
}

function spawnCoin()
{
  if (frameCount % 20 === 0) {
    coin = createSprite(windowWidth - 60, 40, 50, 50);
    var r1 = Math.round(random(0, windowHeight));
    var r2 = Math.round(random(0, windowWidth));
    coin.y = r1;
    coin.x=r2;
    coin.addImage("coin", cImg);
    coin.scale = 0.06;
    //coin.velocityX = -15;
    cGroup.add(coin);
    coin.lifetime = 10;
  }
}

async function back()
{
  
  /*var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseType= await response.json(); console.log(responseType);
  var dt=responseType.datetime;
  console.log(dt);
  var hour=dt.slice(11,13);
  console.log(hour);*/
  
var time =19
if(time>=6 && time<=18)
  {
     bg = "day.jpg";
  }
  else
    bg = "nit.jpg";
  bgImg=loadImage(bg)
}