document.addEventListener("DOMContentLoaded", () => {
  const averageField = document.getElementById("average");
  const ranges = document.querySelectorAll('input[type="range"]');

  function update() {
    let total = 0;
    ranges.forEach((input) => {
      total += parseInt(input.value);
      const label = input.closest("tr").querySelector("label");
      const value = parseInt(input.value);
      if (label) {
        if (value === 0) {
          label.style.background = "red";
          label.style.color = "white";
        } else if (value === 100) {
          label.style.background = "green";
          label.style.color = "white";
        } else {
          label.style.background = "orange";
          label.style.color = "white";
        }
      }
    });
    const average = Math.round(total / ranges.length);
    if (averageField) averageField.value = average;
  }

  ranges.forEach((input) => {
    const span = document.createElement("span");
    span.textContent = input.value + "%";
    input.parentNode.appendChild(span);
    input.addEventListener("input", () => {
      span.textContent = input.value + "%";
      update();
    });
  });

  update();
});

