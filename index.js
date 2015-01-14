$(document).ready(function(){
	var canvas=document.getElementById("canvas");
	canvas.width = 1000;
	canvas.height = 500;
    var ctx=canvas.getContext("2d");
    function draw(a,l,x,y,z){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        var imageObj = new Image();
        imageObj.onload = function() {
            ctx.drawImage(imageObj, a, l, 50,50);
        };
        switch(z){
            case 1:
            imageObj.src = 'img/1.png';
            break;
            case 2:
            imageObj.src = 'img/2.png';
            break;
            case 3:
            imageObj.src = 'img/3.png';
            break;
            case 4:
            imageObj.src = 'img/4.png';
            break;
        }
    }

    function draw_without_clear(a,l,x,y){
        ctx.beginPath();
        ctx.fillStyle="skyblue";
        ctx.strokeStyle="gray";
        ctx.rect(a,l,x,y);
        ctx.fill();
        ctx.stroke();
    }

    function square_without_clear(factor, x,y){
        draw_without_clear(x,y,factor*5,factor*5)
    }

    function square(factor, x,y,direction){
    	draw(x,y,factor*5,factor*5,direction)
    }

        var i = 10;
        var j = 10;
        var z = 1;
        square(10,i,j);
    function shoot(positionx, positiony, direction){ 	
        second = 10;
        var f = positiony + 25;
        var g = positionx + 25;
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
        		square(10,i,j,z);
        		square_without_clear(2,g,f);
        	}, second*k);
        };
    }
        var canvasOffset=$("#canvas").offset();
        var offsetX=canvasOffset.left;
        var offsetY=canvasOffset.top;
        var x = 1;
        var y = 1;
        /*
        for (var i = 0, i <= 1000, i++) {
        	draw(i,j);
        };
        */
    $(this).keydown(function(e){
          switch(e.keyCode){
            case 37:
            i = i - 5;
            z = 2;
            $('#messages').html('izquierda' + z);
            break;
            case 38:
            $('#messages').html('arriba');
            j = j - 5;
            z = 3;
            break;
            case 39:
            $('#messages').html('derecha');
            i = i + 5;
            z = 4;
            break;
            case 40:
            $('#messages').html('abajo');
            j = j + 5;
            z = 1;
            break;
            case 13:
            $('#messages').html('enter');
            shoot(i,j,z);
            break;
          }
          if (i<= 0) {
            i = 0;
          };
          if (i >= canvas.width - 50) {
            i = canvas.width - 50;
          };

          if (j<= 0) {
            j = 0;
          };
          if (j >= canvas.height - 50) {
            j = canvas.height - 50;
          };
            $('h1').html(z);
            square(10,i,j,z);
        });

});