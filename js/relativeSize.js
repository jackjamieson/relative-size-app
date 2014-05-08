

/*
Jack Jamieson 2014
Relative Size App / Banana for Scale
Use a known item(banana) to tell how big or small another object is.
*/

//TODO: fix height too big
//sometimes the width is too much.  not recursing correctly?

var num = 0;
var factor = 10;
var distanceBetweenObjects = 4;

var bHeight = 4;
var bWidth = 7;

var canvasHeight = 700;
var canvasWidth = 900;

var area = document.getElementById("canvasWindow");
var draw = area.getContext("2d");

var checkedWidth = false;
//jQuery text box & button push events
$('#go').click(function() {
    
    drawObject(canvasHeight);
    
});

//Actual functions
function init(newHeight)
{

    var bananaForScale = new Image();
    
    bananaForScale.onload = function(){
        draw.drawImage(bananaForScale,0,newHeight-bHeight*factor,bWidth*factor,bHeight*factor);

    };
    
    bananaForScale.src = "img/ban.png";

}

function drawObject(newHeight)
{
    console.log(num);
    var image = $('#image').val();
    var height = $('#height').val();
    var width = $('#width').val();
    
    var userImage = new Image();
    userImage.onload = function(){
      draw.drawImage(userImage,bWidth*factor+distanceBetweenObjects,newHeight-height*factor,width*factor,height*factor);
      
        if(width*factor >= canvasWidth)
        {
            console.log("too big");
    
            area.width = area.width;
            draw.scale(.5, .5);
            init(canvasHeight*2);
            canvasWidth = canvasWidth * 2;
            
            drawObject(canvasHeight*2);
            
        }
        else if(height*factor >= canvasHeight)
        {
            console.log("too long");
    
            area.width = area.width;
            draw.scale(.5, .5);
            init(canvasHeight*2);

            
            drawObject(canvasHeight*2);
            canvasHeight = canvasHeight * 2;
        }
       
    };
    userImage.src = image;
    


    

    num++;
    
    

}


init(canvasHeight);

