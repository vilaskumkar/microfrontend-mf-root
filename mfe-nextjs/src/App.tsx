import React, { useEffect, useState } from "react";
import { User, AppProps } from "./types";
import {
  listenForUserUpdates,
  dispatchUserUpdated,
  createNextJSUser,
} from "./utils/events";

const App: React.FC<AppProps> = ({ selector = "body" }) => {
  const [status, setStatus] = useState<string>("Next.js waiting...");
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    // Listen for events from other micro frontends
    const cleanup = listenForUserUpdates((e) => {
      console.log("Next.js: Received event:", e.detail);
      const { id, name } = e.detail || {};
      if (id !== 4) {
        // Only update if not from Next.js
        setStatus(`Next.js received: ${id} ${name}`);
        setLastUpdate(`Last update: ${new Date().toLocaleTimeString()}`);
      }
    });

    return cleanup;
  }, []);

  const handleUpdateClick = () => {
    console.log("Next.js: Sending update...");
    const user = createNextJSUser(4, "User");
    dispatchUserUpdated(user);
    setStatus("Next.js - Update sent!");
    setTimeout(() => {
      setStatus("Next.js waiting...");
    }, 2000);
  };

  const containerStyle: React.CSSProperties = {
    padding: "20px",
    border: "2px solid #0070f3",
    borderRadius: "8px",
    backgroundColor: "#f8f9ff",
    marginBottom: "20px",
  };

  const statusStyle: React.CSSProperties = {
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#0070f3",
  };

  const lastUpdateStyle: React.CSSProperties = {
    fontSize: "0.8em",
    color: "#666",
    marginBottom: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    marginTop: "10px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <div style={statusStyle}>{status}</div>
      <div style={lastUpdateStyle}>{lastUpdate}</div>
      <button style={buttonStyle} onClick={handleUpdateClick}>
        Update from Next.js using CustomEvents
      </button>
    </div>
  );
};

// Export a mount function for module federation
export default function mount(selector: string = "body") {
  const container = document.createElement("div");
  container.id = "nextjs-mfe-container";
  document.querySelector(selector)?.appendChild(container);

  // This would be replaced with ReactDOM.render in a real implementation
  // For now, we'll create a simple DOM structure
  const appDiv = document.createElement("div");
  appDiv.style.padding = "20px";
  appDiv.style.border = "2px solid #0070f3";
  appDiv.style.borderRadius = "8px";
  appDiv.style.backgroundColor = "#f8f9ff";
  appDiv.style.marginBottom = "20px";

  const status = document.createElement("div");
  status.textContent = "Next.js waiting...";
  status.style.marginBottom = "10px";
  status.style.fontWeight = "bold";
  status.style.color = "#0070f3";
  appDiv.appendChild(status);

  const lastUpdate = document.createElement("div");
  lastUpdate.style.fontSize = "0.8em";
  lastUpdate.style.color = "#666";
  lastUpdate.style.marginBottom = "10px";
  appDiv.appendChild(lastUpdate);

  const button = document.createElement("button");
  button.textContent = "Update from Next.js using CustomEvents";
  button.style.padding = "8px 16px";
  button.style.marginTop = "10px";
  button.style.backgroundColor = "#0070f3";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "4px";
  button.style.cursor = "pointer";
  button.style.fontSize = "14px";

  // Listen for events from other micro frontends
  window.addEventListener("user:updated", (e: any) => {
    console.log("Next.js: Received event:", e.detail);
    const { id, name } = e.detail || {};
    if (id !== 4) {
      // Only update if not from Next.js
      status.textContent = `Next.js received: ${id} ${name}`;
      lastUpdate.textContent = `Last update: ${new Date().toLocaleTimeString()}`;
    }
  });

  button.addEventListener("click", () => {
    console.log("Next.js: Sending update...");
    const user = createNextJSUser(4, "User");
    dispatchUserUpdated(user);
    status.textContent = "Next.js - Update sent!";
    setTimeout(() => {
      status.textContent = "Next.js waiting...";
    }, 2000);
  });

  appDiv.appendChild(button);
  container.appendChild(appDiv);
}

export { App };
