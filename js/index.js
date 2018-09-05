
/**
 * Created by 三木 on 2018/9/5.
 */
    let box=document.querySelector(".box");
    box.onmousedown=function(event){
        event=event||window.event;
        x0=event.clientX;
        y0=event.clientY;

        x2=this.offsetLeft;
        y2=this.offsetTop;
        box.onmousemove=function (event2) {
            event=event2||window.event;
            x1=event.clientX;
            y1=event.clientY;
            // console.log(x1, y1);

            x=x1-x0+x2;
            y=y1-y0+y2;
            box.style=`top:${y}px;left:${x}px`;
            box.onmouseup=function (event3) {
                event=event3||window.event;
                box.onmouseup="";
                box.onmousemove="";
            }
        };
    }
