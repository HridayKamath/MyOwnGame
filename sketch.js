//Global Variables
var gameState;
var player;
var coronaGroup;
var maskGroup,sanitizerGroup,ppeGroup;
var vaccine;
var score;
var edges;

var mode1, mode2, mode3;


function preload()
{
	
}

function setup() {
	createCanvas(1800, 400);
  gameState = 0;
  
  selectMode();
	player = createSprite(50,height/2,10,10);
	player.shapeColor = "red";
	player.velocityX = 5;

	
	
	

	
	coronaGroup = new Group();
	maskGroup = new Group();
	sanitizerGroup = new Group();
	ppeGroup = new Group();

	vaccine = createSprite(1600,200,30,30);
	vaccine.shapeColor = "green";
score = 0;
	
    edges = createEdgeSprites();

	

	




	
  
}


function draw() {

  rectMode(CENTER);
  background("yellow");


if(gameState === 1){
  mode1();
}
  
  drawSprites();
 
}

//we will use camera position and up-down controls will be given to the players

function selectMode(){

  mode1 = createSprite(50,100,50,50);
  mode2 = createSprite(150,100,50,50);
  mode3 = createSprite(250,100,50,50);

  drawSprites();

  if(mousePressedOver(mode1)){
    gameState = 1;
  }

  else if(mousePressedOver(mode2)){
    gameState = 2;
  }

  else if(mousePressedOver(mode3)){
    gameState = 3;
  }


  //setTimeout(checkState, 1000);
  //sleep(1000);
  checkState();

}

function checkState(){
  console.log("gameStateIs"+ gameState);
  if(gameState === 0){
    selectMode()
  }else{
    console.log("moveAhead");
    console.log("gameStateIs"+ gameState);
  }
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do { currentDate = Date.now();
     } 
  while (currentDate - date < milliseconds);
}