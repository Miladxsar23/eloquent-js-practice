const ctx = document.querySelector("canvas").getContext("2d");
const results = [
  {
    name: "Satisfied",
    count: 1043,
    color: "lightblue",
  },
  {
    name: "Neutral",
    count: 563,
    color: "lightgreen",
  },
  {
    name: "Unsatisfied",
    count: 510,
    color: "pink",
  },
  {
    name: "No comment",
    count: 175,
    color: "silver",
  },
];

function drawPieAndicator(context, x, y, radius, datas) {
  const all = datas.reduce((sum, { count }) => sum + count, 0);
  let currentAngle = -0.5 * Math.PI;
  const dist = 5;
  for (let data of datas) {
    context.beginPath();
    context.fillStyle = data.color;
    let sliceAngle = (data.count * 2 * Math.PI) / all;
    let halfAngle = currentAngle + sliceAngle / 2;
    context.arc(x, y, radius, currentAngle, currentAngle + sliceAngle);
    if (Math.cos(halfAngle) > 0) {
      context.textAlign = "left";
    } else {
      context.textAlign = "right";
    }
    context.fillText(
      data.name,
      x + Math.cos(halfAngle) * (radius + 10),
      y + Math.sin(halfAngle) * (radius + 10)
    );
    currentAngle += sliceAngle;
    context.lineTo(x, y);
    context.fill();
  }
}

drawPieAndicator(ctx, 90, 90, 50, results);
