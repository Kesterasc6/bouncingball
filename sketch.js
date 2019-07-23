let x = 30;
let y = 30; 
let directions= [true,false];
let xdirection = directions[0]
function setup(){
    createCanvas(600,600);
    background(0,255,255);
}
    function drawcircle(){
        if( xdirection == true && x<570){
           x+=10;
           y+=10 
        }
        else if(xdirection==false && x>10){
            x-=10;
            y+=10
            if (y==570 || y==10){
                
            }
        }
        if ( x==570 || x == 10 ){
            xdirection=!xdirection
        }
        circle(x,y,20);
    };
function draw(){ 
    rect(1,2,580,580);
    drawcircle()
}
