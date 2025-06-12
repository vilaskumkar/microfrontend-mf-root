import "zone.js/dist/zone";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";

// Export mount function for Module Federation
export default function mount(selector = "body") {
  console.log("Angular: Mounting to selector:", selector);
  const container = document.createElement("app-root");
  document.querySelector(selector).appendChild(container);

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error("Angular: Bootstrap error:", err));
}
