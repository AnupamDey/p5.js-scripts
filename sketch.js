//                                MARSHMELLOW,    THE    INTERACTIVE    DESIGNING    ENTHUSIAST 



function setup() {
    createCanvas(960,480);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    let hr= hour();
    let mn= minute();
    let sc= second();
    translate(320,240);
    rotate(270);
 
 /*   noFill();
    strokeWeight(10);
    stroke(255);
    ellipse(320,240,400,400);*/
    
    strokeWeight(10);
    stroke(255,12,0);
    noFill();
    let sh1=map(sc,0,60,0,360);
//    arc(0,0,400,400,0,sh1);
    
    push();
    rotate(sh1);
    stroke(143,67,221);
    line(0,0,170,0);
    pop();
    
    stroke(150,155,255);
    strokeWeight(10);
    let sh2=map(mn,0,60,0,360);
//    arc(0,0,380,380,0,sh2);
    
    
    push();
    rotate(sh2);
    stroke(255);
    line(0,0,150,0);
    pop();
    
    
    stroke(155,255,120);
    strokeWeight(10);
    let sh3=map(hr % 12,0,12,0,360);
//    arc(0,0,360,360,0,sh3);
    
    push();
    rotate(sh3);
    stroke(34,223,178);
    line(0,0,100,0);
    pop();
    
    arc(0,0,420,420,0,360);
    
    stroke(1);
    point(0,0);
    
    
    
   
}
