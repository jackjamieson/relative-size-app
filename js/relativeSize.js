var drawCount;
var drawings = [];

var area = document.getElementById("canvasWindow");
var draw = area.getContext("2d");

var object = {width:7, height:2.5};
drawings.push(object);
object = {width:20, height:60};
drawings.push(object);

function init()
{
    drawCount = 0;

    var bananaForScale = document.getElementById("banana");
    draw.drawImage(bananaForScale,drawCount,700-25,70,25);
    
    drawCount += 60 + 4;

    var manForScale = document.getElementById("man");
    draw.drawImage(manForScale,drawCount,700-600,200,600);
    
    drawCount += 200 + 4;
}

$('#go').click(function() {
    
    drawObject();
    
});

$('#width').keypress(function(ev){
    var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		drawObject();
	}
});

$('#height').keypress(function(ev){
    var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		drawObject();
	}
});


function drawObject()
{
    
    var height = $('#height').val();
    var width = $('#width').val();
    
    draw.fillStyle = "#000";
    
    draw.fillRect(drawCount,700-height*10,width*10,height*10);

    object = {width:width, height:height};
    drawings.push(object);
    
    drawCount += width*10 + 4;
    
    //console.log(draw.save());
    if(drawCount >= 900)
    {
        drawCount = 0;
        draw.clearRect(0, 0, area.width, area.height);
        draw.translate(area.width / 2, area.height / 2);
        draw.scale(area.width/2, area.height/2);
        
        //area.
        for(var i = 0; i < drawings.length; i++)
            draw.fillRect(drawCount,700-drawings[i].height*10,drawings[i].width*10,drawings[i].height*10);

    }
        
}

init();