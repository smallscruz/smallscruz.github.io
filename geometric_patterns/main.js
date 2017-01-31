var NUM_CIRCLES = 10;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bval;

function setup() {
    createCanvas(480, 600);
    
    frameRate(20);
    
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/9
    
    rVal = 150;
    gVal = 255;
    bVal = 200;
}

function draw() {
    var isShifted = false;
    
    var y = height;
    while (y >= 10) {
        
        var x;
        
        if (isShifted) {
            x = circleRadius;
        } else {
            x = 20;
        }
      
        while (x <= width) {
            fill(color(rVal,gVal,bVal));
            stroke(color(rVal,gVal,bVal));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x +circleDiameter;
        }
        
        y = y - circleRadius;
        isShifted = !isShifted;
        
        rVal = (rVal + 100) % 256;
        gVal = (gVal + 10) % 256;
        bval = (bVal + 15) % 256;
    }
}

function keyPress() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPatterns', 'png');
    }
    return false;
}