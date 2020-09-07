var hypnoticalBall,database;
var position;

function setup(){
database = firebase.database();
    createCanvas(500,500);
    hypnoticalBall = createSprite(250,250,10,10);
    hypnoticalBall.shapeColor = "red";
    var hypnoticBallposition= database.ref('ball/position');
    hypnoticBallposition.on("value",readposition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
     x:position.x+x,
     y:position.y+y
    })
}

function readposition(data){

    position = data.val();
    hypnoticalBall.x =position.x;
    hypnoticalBall.y = position.y;
}