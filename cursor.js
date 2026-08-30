let mouseX = 0;
let mouseY = 0;

const dot = document.createElement("div");
        dot.className = "dot";
        document.body.appendChild(dot);

let dotX = 0;
let dotY = 0;

let dotspeed = 0.06;

function animate_dot(){
  let dist1X = mouseX - dotX;
  let dist1Y = mouseY - dotY;
  
  dotX = dotX + (dist1X * dotspeed);
  dotY = dotY + (dist1Y * dotspeed);
  
  dot.style.left = dotX + "px";
  dot.style.top = dotY + "px";
  
  requestAnimationFrame(animate_dot)
}

animate_dot()


document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
})