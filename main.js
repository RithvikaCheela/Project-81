    canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle="grey";
    ctx.lineWidth = 1;
    ctx.rect(200,180,400,200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=2;
    ctx.arc(300,250,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=2;
    ctx.arc(390,250,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=2;
    ctx.arc(480,250,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=2;
    ctx.arc(350,290,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=2;
    ctx.arc(440,290,40,0,2*Math.PI);
    ctx.stroke();