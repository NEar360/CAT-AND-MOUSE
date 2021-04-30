var jerry,jerryTeasing,jerryGiving,jerrySmilling;
var tom,tomSleeping,tomRunning,tomHappy,bgImg;

function preload() {
    //load the images here
	jerryTeasing = loadAnimation("mouse2.png","mouse3.png");
	jerrySmilling = loadAnimation("mouse4.png");
	jerryGiving = loadAnimation("mouse1.png");

	tomRunning = loadAnimation("cat3.png","cat2.png");
	tomSleeping = loadAnimation("cat1.png");
	tomHappy = loadAnimation("cat4.png");
	bgImg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,500);
    //create tom and jerry sprites here
    tom = createSprite(900,400,90,90);
    jerry = createSprite(100,400,30,30);
    tom.addAnimation("tomIsSleeping",tomSleeping);
  	jerry.addAnimation("mouseIsTeasing",jerryTeasing);
    tom.changeAnimation("tomIsSleeping");
	jerry.changeAnimation("mouseIsTeasing");
    jerry.scale= 0.07;
	tom.scale=0.15;
}

function draw() {
	background(bgImg);
	stroke(0);fill(225);textSize(20);text("Press left arrow then after some time right arrow",300,100)

	//keyPressed();//even when this is not called the code is running but when it is called then the problem comes
	//with the problem being that nothing related to the space bar is here in the code but the space bar events are being considered
	//and without the space bar being presses we only see an image not the animation and the collision dosnt work properly
	
	if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomHappy);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerrySmilling);
        jerry.scale=0.07;
        jerry.changeAnimation("jerryLastImage");
    } 

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW) {
  	jerry.frameDelay = 25 ;
  	jerry.scale= 0.07;
  	jerry.addAnimation("jerryIsGiving",jerryGiving);
	jerry.changeAnimation("jerryIsGiving");
  	/*tom.addAnimation("catIsRunning",tomRunning);
  	tom.changeAnimation("catIsRunning");
  	tom.velocityX=-10;
  	tom.scale=0.2;*/
  }
  if (keyCode === RIGHT_ARROW) {
  	tom.addAnimation("catIsRunning",tomRunning);
  	tom.changeAnimation("catIsRunning");
  	tom.velocityX=-10;
  	tom.scale=0.21;
  }
}
