console.log("bootstrap");

// React MFE
import("mfeReact/App")
  .then((module) => {
    const mount = module.default || module;
    if (typeof mount === "function") {
      mount("#react-root");
    } else {
      console.error("React mount function not found");
    }
  })
  .catch((err) => {
    console.error("Error loading React MFE:", err);
  });

// Angular MFE
import("mfeAngular/App")
  .then((module) => {
    const mount = module.default || module;
    if (typeof mount === "function") {
      mount("#angular-root");
    } else {
      console.error("Angular mount function not found");
    }
  })
  .catch((err) => {
    console.error("Error loading Angular MFE:", err);
  });

// Vue MFE
import("mfeVue/App")
  .then((module) => {
    const mount = module.default || module;
    if (typeof mount === "function") {
      mount("#vue-root");
    } else {
      console.error("Vue mount function not found");
    }
  })
  .catch((err) => {
    console.error("Error loading Vue MFE:", err);
  });
