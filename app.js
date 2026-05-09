const statusEl = document.getElementById("status");

function setStatus(message) {
  statusEl.textContent = message;
}

document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    const variant = link.getAttribute("data-track");
    setStatus(`Opening ${variant} feed...`);
  });
});
