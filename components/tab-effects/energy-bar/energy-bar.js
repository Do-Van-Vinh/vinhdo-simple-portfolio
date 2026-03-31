const energy_progress = document.getElementById("energy_progress");
const energy_text = document.getElementById("energy_percent");

const segmentWidth = 4;
const gap = 3;

let max_segments = 0;
let energy_percent = 50;
let segments = [];
let prev_fill = 0;

function createSegments() {
  energy_progress.innerHTML = "";
  segments = [];

  const energyWidth = energy_progress.clientWidth;
  max_segments = Math.floor(energyWidth / (segmentWidth + gap));

  for (let i = 0; i < max_segments; i++) {
    const seg = document.createElement("div");
    seg.classList.add("segment");
    energy_progress.appendChild(seg);
    segments.push(seg);
  }

  prev_fill = 0;
  updateEnergy();
}

function updateEnergy() {
  const fill_count = Math.round((max_segments * energy_percent) / 100);

  if (fill_count > prev_fill) {
    for (let i = prev_fill; i < fill_count; i++) {
      segments[i]?.classList.add("fill");
    }
  } else {
    for (let i = fill_count; i < prev_fill; i++) {
      segments[i]?.classList.remove("fill");
    }
  }

  prev_fill = fill_count;
  energy_text.textContent = energy_percent + "%";
}

function changeEnergy() {
  energy_percent += Math.floor(Math.random() * 21) - 10;
  energy_percent = Math.max(0, Math.min(100, energy_percent));
  updateEnergy();
}

let energyVisible = true;

const energyObserver = new IntersectionObserver((entries) => {
  energyVisible = entries[0].isIntersecting;
});

energyObserver.observe(energy_progress);

setInterval(() => {
  if (energyVisible) changeEnergy();
}, 1200);

createSegments();
window.addEventListener("resize", createSegments);
