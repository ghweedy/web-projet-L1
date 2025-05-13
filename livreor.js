document.addEventListener("DOMContentLoaded", () => {
  const userAgentField = document.getElementById("userAgentInformations");
  if (userAgentField) {
    userAgentField.value = navigator.userAgent;
  }

  const summaryBtn = document.getElementById("summaryBtn");
  const summaryDiv = document.getElementById("form-summary");
  const form = document.querySelector("form");

  if (summaryBtn && form && summaryDiv) {
    summaryBtn.addEventListener("click", () => {
      const formData = new FormData(form);
      const now = new Date();
      let html = `<p><strong>Résumé demandé le ${now.toLocaleString()}</strong></p><ul>`;
      for (let [name, value] of formData.entries()) {
        if (name !== "userAgentInformations") {
          html += `<li><strong>${name}</strong> : ${value}</li>`;
        }
      }
      html += "</ul>";
      summaryDiv.innerHTML = html;
    });
  }
});
