

/*
Jack Jamieson 2014
Relative Size App / Banana for Scale
Use a known item(banana) to tell how big or small another object is.
*/

var factor = 20;//Scaling factor 20px = 1 inch
var distanceBetweenObjects = 4;//Distance between the banana and the object.

//Default height of the banana is 4 inches high by 7 inches wide.
var bHeight = 4;
var bWidth = 7;

//Hard codes dimensions of canvas.
var canvasHeight = 700;
var canvasWidth = 900;

//Scale the canvas by 1/2 every time the object is too big.
var newScaleW = .5;
var newScaleH = .5;

var area = document.getElementById("canvasWindow");
var draw = area.getContext("2d");


//jQuery button push events
$('#go').click(function() {
    
    
    drawObject(canvasHeight);
    
    var inputDiv = document.getElementById('input');
    var displaySetting = inputDiv.style.display;
    inputDiv.style.display = 'none';
    
    var outputDiv = document.getElementById('output');
    displaySetting = outputDiv.style.display;
    outputDiv.style.display = 'inline';
    
    var statDiv = document.getElementById('percent');
    $('#percentW').text(calcDifferenceW());
    $('#percentH').text(calcDifferenceH());

    
});

//Actual drawing functions
//Draw the banana
function init(newHeight)
{
    var bananaForScale = new Image();
    
    bananaForScale.onload = function(){
        draw.drawImage(bananaForScale,0,newHeight-bHeight*factor,bWidth*factor,bHeight*factor);

    };
    
    bananaForScale.src = "img/ban.png";

}

//Draw the object(recursive if the object is too big)
function drawObject(newHeight)
{
    var image = $('#image').val();
    var height = $('#height').val();
    var width = $('#width').val();
    
    var userImage = new Image();
    userImage.onload = function(){
      draw.drawImage(userImage,bWidth*factor+distanceBetweenObjects,newHeight-height*factor,width*factor,height*factor);
      
        if(width*factor >= canvasWidth || height*factor >= canvasHeight)
        {
            console.log("too big");
    
            area.width = area.width;
            draw.scale(newScaleW, newScaleH);
            
            canvasHeight = canvasHeight * 2;
            canvasWidth = canvasWidth * 2;
            
            newScaleW = newScaleW/2;
            newScaleH = newScaleH/2;
            
            if(width*factor < canvasWidth && height*factor < canvasHeight)
                init(canvasHeight);
            drawObject(canvasHeight);
            
        }
    };
    userImage.src = image;

}

//Calculat the width difference.
function calcDifferenceW()
{
    var width = $('#width').val();
    var result;
    
    if(width >= bWidth)
        result = (width/bWidth) * 100;
    else
    {
        result = (width/bWidth);
        result = (1 - result) * 100;
    }
    result = Math.round(result);
    
    if(width > bWidth)
        return result + "% wider ";
    else if(width < bWidth)
        return result + "% smaller ";
    else return " no larger "
}

//Calculate the height difference.
function calcDifferenceH()
{
    var height = $('#height').val();
    var result;
    
    if(height >= bHeight)
        result = (height/bHeight) * 100;
    else
    {
        result = (height/bHeight);
        result = (1 - result) * 100;
    }

    result = Math.round(result);
    
    if(height > bHeight)
        return result + "% taller ";
    else if(height < bHeight)
        return result + "% smaller ";
    else return " no larger "
}

//Draw the banana on the canvas to start.
init(canvasHeight);

