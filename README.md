# Microfrontend MF Root

This repository contains a very small demo using module federation to compose React, Angular, Vue, and Next.js applications under a single container.

## Prerequisites

- **Node.js** v14 or later
- **npm** (comes with Node) or **yarn** as your package manager

## Installing dependencies

Install packages for each project individually:

```bash
cd container && npm install
cd ../mfe-react && npm install
cd ../mfe-angular && npm install
cd ../mfe-vue && npm install
cd ../mfe-nextjs && npm install
```

## Running the projects

Use `webpack-dev-server` to serve each project in development mode. Each MFE exposes its bundle through module federation so the container can load it.

```bash
# Run the container (http://localhost:8080)
cd container && npx webpack serve --config webpack.config.js

# In separate terminals run the micro frontends
cd ../mfe-react && npx webpack serve --config webpack.config.js  # http://localhost:8081
cd ../mfe-angular && npx webpack serve --config webpack.config.js  # http://localhost:8082
cd ../mfe-vue && npx webpack serve --config webpack.config.js  # http://localhost:8083
cd ../mfe-nextjs && npx webpack serve --config webpack.config.js  # http://localhost:8084
```

Open `http://localhost:8080` after starting all MFEs to see the combined app.

## Interaction between MFEs

The applications communicate via browser events. A `user:updated` event can be dispatched when user details change:

```javascript
window.dispatchEvent(new CustomEvent("user:updated", { detail: user }));
```

Other MFEs listen for this event to synchronize state:

```javascript
window.addEventListener("user:updated", (e) => {
  // handle updated user data
});
```

## Independent deployment

Each micro frontend can be built and deployed separately. The container loads their `remoteEntry.js` files from the configured URLs, allowing you to release updates to a single MFE without touching the others.

## Micro Frontends

### React MFE

- **Port**: 8081
- **Technology**: React 18
- **Features**: Modern React with hooks

### Angular MFE

- **Port**: 8082
- **Technology**: Angular
- **Features**: Full Angular framework

### Vue MFE

- **Port**: 8083
- **Technology**: Vue.js
- **Features**: Vue 3 composition API

### Next.js MFE

- **Port**: 8084
- **Technology**: Next.js 13.5.6 with TypeScript
- **Features**: Full TypeScript support, Next.js features, modern React patterns
