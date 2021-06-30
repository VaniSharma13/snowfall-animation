const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var boy,bg,bgImage
var snow
function preload(){
  bgImage=loadImage("snow3.jpg");
  
}
function setup() {
  createCanvas(1400,600);
 engine= Engine.create();
 world=engine.world;

    
    snow1=new Snow(100,5,50,50)
    snow2=new Snow2(200,10,50,50)
    snow3=new Snow(300,45,50,50)
    snow4=new Snow2(250,20,50,50)
    snow5=new Snow(370,65,50,50)
    snow6=new Snow2(400,30,50,50)
    snow7=new Snow(420,49,50,50)
    snow8=new Snow2(450,56,50,50)
    snow9=new Snow(500,26,50,50)
    snow10=new Snow2(570,98,50,50)
    snow11=new Snow(600,55,50,50)
    snow12=new Snow2(620,70,50,50)
    snow13=new Snow(675,69,50,50)
    snow14=new Snow2(700,72,50,50)
    snow15=new Snow(750,80,50,50)
    snow16=new Snow2(795,85,50,50)
    snow17=new Snow(835,90,50,50)
    snow18=new Snow2(875,5,50,50)
    snow19=new Snow(900,25,50,50)
    snow20=new Snow2(1300,10,50,50)
    snow21=new Snow(1350,30,50,50)
    snow22=new Snow(1200,80,50,50)
    snow23=new Snow2(1000,20,50,50)
    snow24=new Snow(1500,40,50,50)
    snow25=new Snow2(1250,60,50,50)
    snow26=new Snow(975,50,50,50)
    snow27=new Snow2(1280,95,50,50)

 
}

function draw() {
  background(bgImage);  

  Engine.update(engine);
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display(); 
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();
  snow21.display();
  snow22.display();
  snow23.display();
  snow24.display();
  snow25.display();
  snow26.display();
  snow27.display();
  

}