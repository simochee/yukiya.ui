$result = document.getElementById("result");
$value = document.getElementById("value");

var socket = io();
var timer = 0;

const FR_THR = 40;
const BK_THR = 60;
const Y_THR = 40;

window.addEventListener('deviceorientation', function(event)
{
    if(new Date - timer > 200)
    {
        timer = new Date;
        var y = Math.round(event.beta);
        var z = Math.round(event.gamma);
        var abs_y = Math.abs(y);
        var abs_z = Math.abs(z);
                
        if(abs_z <= FR_THR)
        {
            if(z < 0)
            {
                socket.emit("straight", FR_THR, FR_THR - abs_z);
                $result.innerHTML = "straight : " + (FR_THR - abs_z);
            }
            else
            {
                socket.emit("stop");
                $result.innerHTML = "stop";
            }
        }
        else if(abs_y >= Y_THR && abs_y <= 90)
        {
            if(y > 0)
            {
                socket.emit("right", 90 - Y_THR, abs_y);
                $result.innerHTML = "right : " + abs_y;
            }
            else
            {
                socket.emit("left", 90 - Y_THR, abs_y);
                $result.innerHTML = "left : " + abs_y;
            }
        }
        else if(abs_z <= BK_THR)
        {
            if(z > 0)
            {
                socket.emit("back", BK_THR, BK_THR - abs_z);
                $result.innerHTML = "back : " + (BK_THR - abs_z);
            }
            else
            {
                socket.emit("stop");
                $result.innerHTML = "stop";
            }
        }
        else
        {
            socket.emit("stop");
            $result.innerHTML = "stop";
        }

        $value.innerHTML = "Z value : " + z + "  Y value : " + y;
    }


});
