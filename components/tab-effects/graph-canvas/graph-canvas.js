const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const step = 3;
let maxPoints;
let graphData = [];
let offset = 0;

function initGraph() {
  maxPoints = Math.floor(canvas.width / step);
  graphData = new Array(maxPoints)
    .fill(0)
    .map(() => Math.random() * canvas.height);
  offset = 0;
}

initGraph();

let graphVisible = true;

const graphObserver = new IntersectionObserver((entries) => {
  graphVisible = entries[0].isIntersecting;
});

graphObserver.observe(canvas);

let lastTime = 0;
const fps = 30;
const interval = 1000 / fps;

function drawGraph(time) {
  requestAnimationFrame(drawGraph);

  if (!graphVisible) return;

  if (time - lastTime < interval) return;
  lastTime = time;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#00ffff";
  ctx.beginPath();

  for (let i = 0; i < maxPoints; i++) {
    const index = (i + offset) % maxPoints;
    const x = i * step;
    const y = canvas.height - graphData[index];

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

  graphData[offset] = Math.random() * canvas.height;
  offset = (offset + 1) % maxPoints;
}

drawGraph();

window.addEventListener("resize", () => {
  resizeCanvas();
  initGraph();
});
