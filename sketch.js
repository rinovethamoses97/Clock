var date;
function setup(){
    createCanvas(600,600);
    background(0);
}
function draw(){
    background(0);
    translate(width/2,height/2);
    date=new Date();
    angleMode(DEGREES);
    stroke(255,0,0);
    strokeWeight(10);
    noFill();
    let s=map(date.getSeconds(),0,59,0,360)
    // use rotate(-90) or add 270 to start and stop of the arc
    arc(0,0,400,400,270,270+s);
    rotate(s)
    line(0,0,0,-150);
    rotate(-s)
    let m=map(date.getMinutes(),0,59,0,360)
    stroke(0,255,0);
    strokeWeight(10);
    noFill();
    arc(0,0,370,370,270,270+m);
    rotate(m)
    line(0,0,0,-100);
    rotate(-m)
    let h=map(date.getHours(),0,23,0,360)
    stroke(0,0,255);
    strokeWeight(10);
    noFill();
    arc(0,0,340,340,270,270+h);
    rotate(h)
    line(0,0,0,-60);
    rotate(-h)
    stroke(255);
    strokeWeight(15);
    point(0,0);
}
