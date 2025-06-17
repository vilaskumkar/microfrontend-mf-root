import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div style="padding: 20px;">
      <div style="margin-bottom: 10px;">{{ message }}</div>
      <div *ngIf="lastUpdate" style="font-size: 0.8em; color: #666;">
        Last update: {{ lastUpdate }}
      </div>
      <button (click)="send()" style="padding: 8px 16px; margin-top: 10px;">
        Update from Angular using CustomEvents
      </button>
    </div>
  `,
})
export class AppComponent implements OnInit {
  message = "Angular waiting...";
  lastUpdate: string | null = null;
  private ngZone: NgZone;

  constructor() {
    console.log("Angular: Component constructed");
    this.ngZone = new NgZone({ enableLongStackTrace: false });
  }

  ngOnInit() {
    console.log("Angular: Component initialized");
    window.addEventListener("user:updated", (e: any) => {
      console.log("Angular: Raw event:", e);
      console.log("Angular: Event detail:", e.detail);

      this.ngZone.run(() => {
        try {
          const { id, name } = e.detail || {};
          console.log("Angular: Parsed detail - id:", id, "name:", name);
          if (id !== 3) {
            // Only update if not from Angular
            this.message = `Angular received: ${id} ${name}`;
            this.lastUpdate = new Date().toLocaleTimeString();
          }
        } catch (error) {
          console.error("Angular: Error processing event:", error);
        }
      });
    });
  }

  send() {
    console.log("Angular: Sending update...");
    const event = new CustomEvent("user:updated", {
      detail: { id: 3, name: "Angular User" },
    });
    window.dispatchEvent(event);
    this.message = "Angular - Update sent!";
    setTimeout(() => {
      this.message = "Angular waiting...";
    }, 2000);
  }
}
