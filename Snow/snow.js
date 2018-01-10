window.onload = function() {

  var canvas = document.getElementById("snow");
  var ctx = canvas.getContext("2d");

  var w = window.innerWidth;
  var hh = window.innerHeight;
  canvas.width =w;
  canvas.height =hh;

  var mf = 100;
  var flakes = [];

  for(i=0; i<mf; i++) {
    flakes.push({
      x: Math.random()+w,
      y: Math.random()+hh,
      r: Math.random()*5+2,
      d: Math.random()+1
    })
  }


  function drawFlakes() {
    ctx.clearRect(0, 0, w, hh);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for(i=0; i<mf;i++) {
      var f= flakes[i];
      ctx.moveTo (f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveFlakes();
   }
   var angle =0;

   function moveFlakes () {
     angle+=0.01;
     for(i=0; i<mf; i++) {
       var f = flakes[i];

       f.y+= Math.pow(f.d, 2) +1;
       f.x+= Math.sin(angle)*2;

       if (f.y>hh) {
         flakes[i]={x:Math.random()*w, y:0, r:f.r, d:f.d}
       }
     }
   }

   setInterval(drawFlakes, 25);

}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
  }

// '#'+(Math.random()*0xFFFFFF<<0).toString(16) how to make random color?
