var dog,happydog,foodS, database;
var foodStock,score=0;;
var dogImg;
function preload(){

dogImg=loadImage("dogImg.png");
doghappy=loadImage("dogImg1.png");

}

function setup(){

  database = firebase.database();
  console.log(database);
 
  createCanvas(500,500);

  dog=createSprite(200,315,20,20);
  dog.addImage(dogImg);
   dog.scale=0.3;

  var foodStock = database.ref('food');
  foodStock.on("value", readstock);
}

function draw(){
  background(46,139,87);
    
  if(keyDown(UP_ARROW)){

      writeStoke(foodS);
      dog.addImage(doghappy);
      score = score + 1
       }
    writeStoke();

        drawSprites();
        noStroke();
        textSize(35) 
        fill("white")
         text("Score:2"+score, width-300, 50);
  

}
function writeStoke(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/'),({
food:x
})
}

function readstock(data){
foodS=data.val();
}
