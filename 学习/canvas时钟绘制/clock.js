var dom=document.getElementById('clock');
var ctx=dom.getContext('2d'); //获取canvas的上下文
var width=ctx.canvas.width;
var height=ctx.canvas.height;   
var r=width/2; //半径

function drawBackground(){
  ctx.translate(r,r); //重新定义圆心位置
  ctx.beginPath();//开始一条路径
  ctx.lineWidth=10;
  ctx.arc(0,0,r-5,0,2*Math.PI,false); //画圆，x、Y轴坐标，半径，起始角度，结束角度，顺逆时针转
  ctx.stroke(); //绘制已定义的路径
  
  //添加12个数字,即画小时数
  var hourNumbers=[3,4,5,6,7,8,9,10,11,12,1,2];
  ctx.font="18px Arial";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  //js数组循环遍历
  hourNumbers.forEach(function(number,i){
    var rad=2*Math.PI/12*i;
    var x=Math.cos(rad)*(r-30);
    var y=Math.sin(rad)*(r-30);
    ctx.fillText(number,x,y);
  });
  
  //画每个点
  for(var i=0;i<60;i++){
    var rad=2*Math.PI/60*i;
    var x=Math.cos(rad)*(r-18);
    var y=Math.sin(rad)*(r-18);
    ctx.beginPath();
    if(i%5==0){
      ctx.fillStyle='#000';
      ctx.arc(x,y,2,0,2*Math.PI,false);
    }else{
      ctx.fillStyle='#ccc';
      ctx.arc(x,y,2,0,2*Math.PI,false);
    }
    ctx.fill();
  }
}

function drawHour(hour){
  ctx.save();
  ctx.beginPath();
  var rad=2*Math.PI/12*hour;
  ctx.rotate(rad);
  ctx.lineWidth=6;
  ctx.lineCap='round';
  
  ctx.moveTo(0,10);
  ctx.lineTo(0,-r/2);
  ctx.stroke();
  ctx.restore();
}

function drawMinute(minute){
  ctx.save();
  ctx.beginPath();
  var rad=2*Math.PI/60*minute;
  ctx.rotate(rad);
  ctx.lineWidth=3;
  ctx.lineCap='round';
  ctx.moveTo(0,10);
  ctx.lineTo(0,-r+30);
  ctx.stroke();
   ctx.restore();
}

function drawSecond(second){
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle='#c14543';
  var rad=2*Math.PI/60*second;
  ctx.rotate(rad);
  ctx.moveTo(-2,20);
  ctx.lineTo(2,20);
  ctx.lineTo(1,-r+18);
   ctx.lineTo(-1,-r+18);
   ctx.fill();
 
   ctx.restore();
}

function drawDot(){
  
}
drawBackground();
drawHour(4);
drawMinute(30);
drawSecond(15);
drawDot();
