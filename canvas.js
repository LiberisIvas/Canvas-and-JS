var canvas = document.querySelector('canvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

// // size xy en position xy
// c.fillStyle= 'rgba(255, 0, 0, 0.5)';
// c.fillRect (100, 100, 100, 100);
// c.fillStyle= 'rgba(0, 255, 0, 0.5)';
// c.fillRect (400, 100, 100, 100);
// c.fillStyle= 'rgba(0, 0, 255, 0.5)';
// c.fillRect (300, 200, 100, 100);
//
// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();
//
// // Arc
// for(var i =0; i<3; i++) {
//   var x = Math.random()* window.innerWidth;
//   var y = Math.random()* window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI *2, false);
//   c.strokeStyle="blue";
//   c.stroke();
// }


// var x = Math.random()*innerWidth;
// var dx =(Math.random()- .5) *8; //velocity
// var radius = 30;
// var y = Math.random()*innerHeight;
// var dy = (Math.random() -0.5) *8;

var mouse = {
  x:undefined,
  y:undefined
}
var maxRadius =40;
var minRadius =2;
var colorArray = [
  '#13EAEA',
  '#D0F500',
  '#B541D1',
  '#FFB400',
  'white'
]

window.addEventListener('mousemove', function(e) {
  mouse.x = e.x;
  mouse.y = e.y;
})

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})


function Circle (x,y, dx,dy, radius, minRadius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

  this.draw = function() {
    c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
      c.fillStyle= this.color;
      c.fill();
  }

  this.update = function() {
    //bouncing effect
      if (this.x + this.radius > innerWidth || this.x - this.radius <0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius <0) {
        this.dy = -this.dy*0.85;
        
      } else {
        // this.dy += .5; //gravity
      
      }

      this.y+=this.dy;
      this.x+=this.dx;


        //circle growing
      if (mouse.x - this.x < 50 && mouse.x - this.x > -60
       && mouse.y - this.y < 50 && mouse.y - this.y > -60) {
         if (this.radius < maxRadius) {
             this.radius +=2;
        }
      } else if (this.radius > this.minRadius){
        this.radius -=1;
      }
      this.draw();
  }
}

var circleArray = [];

function changeB(numbers) {
  circleArray = [];
  //creating balls
  for (var i = 0; i < numbers; i++) {

    var radius = Math.random()*3+1;
    var x = Math.random()*(innerWidth - radius *2)+radius;
    var y = Math.random()*(innerHeight - radius *2)+radius;
    var dx = (Math.random()- .5)*10; //velocity
    var dy = (Math.random()- .5)*2;
    circleArray.push(new Circle(x,y,dx,dy,radius))
  }
}

  function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
}
}
// Circle.update();
// c.beginPath();
// c.arc(x, y, radius, 0, Math.PI *2, false);
// c.strokeStyle="blue";
// c.stroke();
animate();
