

function preload() {
 room=loadImage("room.jpg")
 girl=loadImage("girl.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    player=createSprite(displayWidth/2,displayHeight-50)
   player.addImage(girl)
   player.scale=0.6
}

function draw(){
    
        background(room);
    if(keyDown("left")){
    player.x=player.x-5
    }

if(keyDown("right")){
    player.x=player.x+5
}
if(keyDown("up")&&player.y>=435){
    player.y=player.y-2
}
if(keyDown("down")&&player.y<=655){
    player.y=player.y+2
}

//console.log(player.y)

         drawSprites()
}

