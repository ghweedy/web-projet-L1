document.addEventListener("DOMContentLoaded", function () {
  const btnToggle = document.getElementById("btn-toggle");
  const normal = document.querySelector('link[title="normal"]');
  const accessible = document.querySelector('link[title="accessible"]');

  const savedStyle = localStorage.getItem("preferredStyle");

  if (savedStyle === "accessible") {
    if (normal && accessible) {
      normal.disabled = true;
      accessible.disabled = false;
    }
  } else {
    if (normal && accessible) {
      normal.disabled = false;
      accessible.disabled = true;
    }
  }

  if (btnToggle && normal && accessible) {
    btnToggle.addEventListener("click", function () {
      const isNormalActive = !normal.disabled;

      normal.disabled = isNormalActive;
      accessible.disabled = !isNormalActive;

      localStorage.setItem("preferredStyle", isNormalActive ? "accessible" : "normal");
    });
  }
});
