const dynamic = document.querySelector(".dynamic_start");

const MAX_STARS = 40;
const stars = [];

function createStar() {
  if (stars.length >= MAX_STARS) return;

  const div = document.createElement("div");
  div.className = "star";

  const dynamicWidth = dynamic.clientWidth;

  div.style.left = Math.random() * dynamicWidth + "px";
  div.style.animationDuration = 2 + Math.random() * 2 + "s";

  dynamic.appendChild(div);
  stars.push(div);

  setTimeout(() => {
    div.remove();

    const index = stars.indexOf(div);
    if (index > -1) stars.splice(index, 1);
  }, 4000);
}

let isVisible = true;

const observer = new IntersectionObserver((entries) => {
  isVisible = entries[0].isIntersecting;
});

observer.observe(dynamic);

setInterval(() => {
  if (isVisible) createStar();
}, 120);
