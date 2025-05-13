document.addEventListener("DOMContentLoaded", () => {
  const clock = document.createElement("div");
  clock.id = "paris-clock";
  clock.style.position = "absolute";
  clock.style.top = "10px";
  clock.style.right = "20px";
  clock.style.fontFamily = "Arial, sans-serif";
  clock.style.fontSize = "0.95em";
  clock.style.color = "#555";
  document.body.appendChild(clock);

  function updateTime() {
    const now = new Date();
    const options = {
      timeZone: "Europe/Paris",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    clock.textContent = new Intl.DateTimeFormat("fr-FR", options).format(now);
  }

  updateTime();
  setInterval(updateTime, 1000);
});