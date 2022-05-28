let ctx = document.querySelector("canvas").getContext("2d");
//animation function
let lastTime = null;
function frame(time) {
  if (lastTime) {
    let timeStep = Math.min(lastTime - time, 100) / 1000;
    updateAnimation(timeStep);
  }
  lastTime = time;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
let x = 100,
  y = 100,
  radius = 10;
let speedX = 100,
  speedY = 100;

// update Function per frame
function updateAnimation(time) {
    ctx.clearRect(0, 0, 400, 400)
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 4
    ctx.strokeRect(25, 25, 350, 350)

    x += time * speedX
    y += time * speedY
    if(x < 25 + radius || x > 375 - radius) speedX = -speedX
    if(y < 25 + radius || y > 375 - radius) speedY = -speedY
    ctx.fillStyle = "gold"
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 7)
    ctx.fill()
}