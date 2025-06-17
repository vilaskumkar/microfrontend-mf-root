# Next.js Micro Frontend

This is a Next.js TypeScript micro frontend that integrates with the main container application using Module Federation.

## Features

- **TypeScript Support**: Full TypeScript integration with proper type checking
- **Module Federation**: Exposes components to the container application
- **Event Communication**: Communicates with other MFEs via browser events
- **Modern React**: Uses React 18 with hooks and functional components
- **Next.js Integration**: Leverages Next.js 12.3.4 features while working as an MFE

## Development

### Prerequisites

- Node.js 16.13.0 or higher
- Yarn package manager

### Installation

```bash
yarn install
```

### Running the MFE

```bash
# Start the MFE in development mode
yarn start

# Or use Next.js development server
yarn dev
```

The MFE will be available at `http://localhost:8084`

### Building

```bash
# Build for production
yarn build

# Build using Next.js
yarn build:next
```

## Integration with Container

This MFE is automatically loaded by the container application and will appear as a new section alongside React, Angular, and Vue MFEs.

### Communication

The MFE communicates with other micro frontends using browser events:

- **Sending events**: Dispatches `user:updated` events when the update button is clicked
- **Receiving events**: Listens for `user:updated` events from other MFEs
- **Event format**: `{ id: number, name: string }`

### Module Federation

The MFE exposes its `App` component through Module Federation, allowing the container to dynamically load and render it.

## File Structure

```
mfe-nextjs/
├── src/
│   ├── App.tsx          # Main application component
│   ├── index.ts         # Entry point
│   ├── index.html       # HTML template
│   ├── types/index.ts   # TypeScript type definitions
│   ├── utils/events.ts  # Event handling utilities
│   └── pages/index.tsx  # Next.js pages router
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── webpack.config.js    # Webpack configuration with Module Federation
├── next.config.js       # Next.js configuration
└── README.md           # This file
```

## Customization

To customize the MFE:

1. Modify `src/App.tsx` to change the UI and functionality
2. Update `webpack.config.js` to change Module Federation settings
3. Modify `package.json` to add new dependencies
4. Update `tsconfig.json` for TypeScript configuration changes

## Troubleshooting

- **Port conflicts**: Ensure port 8084 is available
- **Module Federation issues**: Check that the container is properly configured to load this MFE
- **TypeScript errors**: Run `yarn build` to check for type issues
- **Dependencies**: Make sure all dependencies are installed with `yarn install`
- **Node.js version**: This MFE uses Next.js 12.3.4 which is compatible with Node.js 16.13.0+
