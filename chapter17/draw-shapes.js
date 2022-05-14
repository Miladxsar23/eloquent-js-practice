const ctx = document.querySelector("canvas").getContext("2d");

//trapezid
function drawTrapezoid(context) {
  context.strokeStyle = "#000";
  context.beginPath();
  context.moveTo(0, 60);
  context.lineTo(30, 30);
  context.lineTo(60, 30);
  context.lineTo(90, 60);
  context.closePath();
  context.stroke();
}
//drawRedDiamond
function drawRedDiamond(context) {
  context.save();
  context.fillStyle = "red";
  context.rotate((-45 * Math.PI) / 180);
  context.fillRect(0, 0, 30, 30);
  context.restore();
}
//zigzag line
function drawZigzagLine(context) {
  let targetPointX = 90,
    targetPointY = 5;
  context.beginPath();
  context.moveTo(0, 0);
  for (let i = 1; i <= 12; i++) {
    context.lineTo(targetPointX, targetPointY);
    targetPointX = targetPointX < 90 ? 90 : 0;
    targetPointY += 5;
  }
  context.stroke();
}
