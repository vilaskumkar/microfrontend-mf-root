import { createApp, reactive, h } from "vue";

export default function mount(selector = "body") {
  console.log("Vue: Mounting to selector:", selector);

  const state = reactive({
    message: "Vue waiting...",
    lastUpdate: null,
  });

  const App = {
    setup() {
      console.log("Vue: Component setup");

      const send = () => {
        console.log("Vue: Sending update...");
        const event = new CustomEvent("user:updated", {
          detail: { id: 2, name: "Vue User" },
        });
        window.dispatchEvent(event);
        state.message = "Vue - Update sent!";
        setTimeout(() => {
          state.message = "Vue waiting...";
        }, 2000);
      };

      // Add event listener
      console.log("Vue: Adding event listener");
      window.addEventListener("user:updated", (e) => {
        console.log("Vue: Raw event:", e);
        console.log("Vue: Event detail:", e.detail);

        try {
          const { id, name } = e.detail || {};
          console.log("Vue: Parsed detail - id:", id, "name:", name);
          if (id !== 2) {
            // Only update if not from Vue
            state.message = `Vue received: ${id} ${name}`;
            state.lastUpdate = new Date().toLocaleTimeString();
          }
        } catch (error) {
          console.error("Vue: Error processing event:", error);
        }
      });

      return () =>
        h("div", { style: { padding: "20px" } }, [
          h("div", { style: { marginBottom: "10px" } }, state.message),
          state.lastUpdate
            ? h(
                "div",
                { style: { fontSize: "0.8em", color: "#666" } },
                `Last update: ${state.lastUpdate}`
              )
            : null,
          h(
            "button",
            {
              style: { padding: "8px 16px", marginTop: "10px" },
              onClick: send,
            },
            "Update from Vue"
          ),
        ]);
    },
  };

  const el = document.createElement("div");
  el.id = "vue-root";
  document.querySelector(selector).appendChild(el);

  const app = createApp(App);
  app.mount(el);
  console.log("Vue: Component mounted");
}
