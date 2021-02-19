const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var stand


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   //stand = new Ground(600, 500, 10, 70);
    block = new Box(600,20,10,50);


}

function draw(){
    background(0);
    Engine.update(engine);
    stand.display();

    block.display();




}