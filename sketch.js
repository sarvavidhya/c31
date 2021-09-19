const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onSling"

/*
VARIABLES:

variable is used to store some value.
Number, letter and a string.
var num = 10, var letter = 'S', var string = "Plot No: 20, aaa homes"

Array:
//empty
var arr = [20,89, 'sarva', "b", "plot no: 20"]

Student_details

var sarvastudent =["sarva", 13, 120807, "DAVPublicSchool", 8, 'B']

Boolean:

True or False

Undefined:

var score
console.log(score)

*/

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    var score =500
    //console.log(score)

    var boolean="chandni";
    //console.log(boolean);

    //single dimension array
    var sarvastudent =["sarva", 13, 120807, "DAVPublicSchool", 8, 'B'];
    
    sarvastudent.push("TeacherChandni")
    
    sarvastudent.pop();
    //console.log(sarvastudent);

    sarvastudent = [];
    //console.log(sarvastudent.length);

    //two dimension array: 
    var arr2 = [[56,89,98,97], [78,09],[57,79]];
    console.log(arr2[0][0]);
    console.log(arr2[2][1]);

    

    //repeat something: where you should start and where to end
    //8 tables. 8 +8 800

   // for(initialization; condition; increment/decrement){
        //statement
    //}
    //print 8 tables
    //for(var i=8; i<=800; i+=8){
      //  console.log(i)
    //}

    //print only odd number from 1 till 150
     //for(var o=1;o<=150;o=o+2){
       //  console.log(o)
     //}


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched")
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}