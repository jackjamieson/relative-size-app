

$('#go').click(function() {
    
    drawObject();
    
});

$('#width').keypress(function(ev){
    var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		alert('You pressed a "enter" key in textbox');
	}
});





function drawObject()
{
    var height = $('#height').val();
    var width = $('#width').val();
    
    var area = document.getElementById("canvasWindow");
    var draw = area.getContext("2d");
    
    draw.fillStyle = "#FF0000";
    draw.fillRect(0,0,height,width);

    
}