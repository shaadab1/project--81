canvas = document.getElementById("myCnvas");
color1 = "Blue"
color2 = "Black"
color3 = "Red"
color4 = "Yellow"
color5 = "Green"
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Grey";
ctx.lineWidth = "4";
ctx.rect(150 ,  143 , 430 , 200);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = "5";
ctx.arc(250 ,  210 , 40 , 0 , 2*Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = "5";
ctx.arc(350 ,  210 , 40 , 0 , 2*Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = "5";
ctx.arc(450 ,  210 , 40 , 0 , 2*Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = "5";
ctx.arc(300 ,  250 , 40 , 0 , 2*Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = "5";
ctx.arc(400 ,  250 , 40 , 0 , 2*Math.PI);
ctx.strokeStyle();