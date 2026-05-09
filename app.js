const statusEl = document.getElementById("status");
const copyButton = document.getElementById("copy-link");
const shareButton = document.getElementById("share-link");

function setStatus(message) {
  statusEl.textContent = message;
}

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    setStatus("Link copied.");
  } catch (error) {
    setStatus("Could not copy link in this browser.");
  }
});

shareButton?.addEventListener("click", async () => {
  const data = {
    title: "Clean Feed Launcher",
    text: "Open Instagram Following/Favorites directly.",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(data);
      setStatus("Thanks for sharing.");
    } catch (error) {
      setStatus("Share cancelled.");
    }
    return;
  }

  setStatus("Share is unavailable here. Use copy instead.");
});

document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    const variant = link.getAttribute("data-track");
    setStatus(`Opening ${variant} feed...`);
  });
});
