var drawCount;

var factor = 20;
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
    drawCount = 0;

    var bananaForScale = document.getElementById("banana");

    
    draw.drawImage(bananaForScale,drawCount,newHeight-bHeight*factor,bWidth*factor,bHeight*factor);
   // draw.fillText("  Banana is 7\' x 4\'.", 0, newHeight-bHeight*factor);
   // drawCount += bWidth*factor + distanceBetweenObjects;


    //var manForScale = document.getElementById("man");
    //draw.drawImage(manForScale,drawCount,700-600,200,600);
    
    //drawCount += 200 + 4;
}

function drawObject(newHeight)
{
    var image = $('#image').val();
    var height = $('#height').val();
    var width = $('#width').val();
    
   // draw.fillStyle = "#000";
    
    //draw.fillRect(drawCount,700-height*factor,width*factor,height*factor);
    
    
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
           // canvasHeight = canvasHeight * 2;
            drawObject(canvasHeight*2);
            
        }
        if(height*factor >= canvasHeight)
        {
            console.log("too long");
    
            area.width = area.width;
            draw.scale(.5, .5);
            init(canvasHeight*2);
           // canvasHeight = canvasHeight * 2;
            
            drawObject(canvasHeight*2);
            canvasHeight = canvasHeight * 2;
        }
       
    };
    userImage.src = image;
    
    ///drawCount += width*factor + distanceBetweenObjects;

    


    
    

}


init(canvasHeight);

