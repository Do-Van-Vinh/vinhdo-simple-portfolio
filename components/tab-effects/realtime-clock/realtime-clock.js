function updateClock() {
  const now = new Date();

  let hour = now.getHours();
  const minutes = now.getMinutes();

  const nowday = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  document.getElementById("hour").textContent = String(hour).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );

  document.getElementById("nowday").textContent = nowday;
}

setInterval(updateClock, 1000);
updateClock();
