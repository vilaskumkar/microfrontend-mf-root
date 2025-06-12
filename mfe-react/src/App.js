export default function mount(selector = "body") {
  const container = document.createElement("div");
  container.style.padding = "20px";

  const status = document.createElement("div");
  status.textContent = "React waiting...";
  status.style.marginBottom = "10px";
  container.appendChild(status);

  const lastUpdate = document.createElement("div");
  lastUpdate.style.fontSize = "0.8em";
  lastUpdate.style.color = "#666";
  container.appendChild(lastUpdate);

  const button = document.createElement("button");
  button.textContent = "Update from React";
  button.style.padding = "8px 16px";
  button.style.marginTop = "10px";

  // Listen for events from other micro frontends
  window.addEventListener("user:updated", (e) => {
    console.log("React: Received event:", e.detail);
    const { id, name } = e.detail || {};
    if (id !== 1) {
      // Only update if not from React
      status.textContent = `React received: ${id} ${name}`;
      lastUpdate.textContent = `Last update: ${new Date().toLocaleTimeString()}`;
    }
  });

  button.addEventListener("click", () => {
    console.log("React: Sending update...");
    const event = new CustomEvent("user:updated", {
      detail: { id: 1, name: "React User" },
    });
    window.dispatchEvent(event);
    status.textContent = "React - Update sent!";
    setTimeout(() => {
      status.textContent = "React waiting...";
    }, 2000);
  });

  container.appendChild(button);
  document.querySelector(selector).appendChild(container);
}
