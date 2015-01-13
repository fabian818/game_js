
function init(){
    var canvas=document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 500;    
    var canvasOffset=$("#canvas").offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;
    var ctx=canvas.getContext("2d");
    return ctx;
}
    function draw(a,l,x,y){
        ctx = init();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.fillStyle="skyblue";
        ctx.strokeStyle="gray";
        ctx.rect(a,l,x,y);
        ctx.fill();
        ctx.stroke();
    }

    function square(factor, x,y){
    	draw(x,y,factor*5,factor*5)
    }


    function shoot(positionx, positiony, direction){    
        second = 10;
        var f = positiony;
        var g = positionx
        for (var k = 2; k <= 100; k++) {
            setTimeout(function(){       
                $('h1').html(f);
                switch(direction){
                    case 1:
                    f = f + (0.02*k);
                    break;
                    case 2:
                    g = g - (0.02*k);
                    break;
                    case 3:
                    f = f -(0.02*k);
                    break;
                    case 4:
                    g = g + (0.02*k);
                    break;
                }
                if (g<= 0) {
                    g = 0;
                };
                if (g >= canvas.width - 50) {
                    g = canvas.width - 50;
                };

                if (f<= 0) {
                    f = 0;
                };
                if (f >= canvas.height - 50) {
                    f = canvas.height - 50;
                };
                
                square(10,g,f);
                i = g;
                j = f;
            }, second*k);
        };
    }