#!/bin/bash

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="16.13.0"

echo "Current Node.js version: $NODE_VERSION"
echo "Required Node.js version: >= $REQUIRED_VERSION"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "Error: Node.js version $REQUIRED_VERSION or higher is required"
    echo "Please install a compatible version using nvm:"
    echo "nvm install 16.13.0"
    echo "nvm use 16.13.0"
    exit 1
fi

# Stop any running instances first
echo "Stopping any running instances..."
./stop-all.sh

# Install dependencies in root if package.json exists
echo "Checking for root package.json..."
if [ -f package.json ]; then
  echo "Installing root dependencies..."
  yarn install
fi

# Install dependencies in each micro frontend and container
declare -a dirs=("container" "mfe-react" "mfe-angular" "mfe-vue" "mfe-nextjs")
for dir in "${dirs[@]}"; do
  echo "Installing dependencies in $dir..."
  (cd "$dir" && yarn install)
done

echo "Starting all apps in new Terminal tabs..."

# Function to open a new Terminal tab and run a command (macOS)
function open_tab() {
  local dir=$1
  local port=$2
  osascript \
    -e "tell application \"Terminal\" to activate" \
    -e "tell application \"Terminal\" to do script \"cd $(pwd)/$dir && echo 'Starting $dir on port $port...' && yarn start\""
}

# Start each app with its port
open_tab container 8080
open_tab mfe-react 8081
open_tab mfe-angular 8082
open_tab mfe-vue 8083
open_tab mfe-nextjs 8084

echo "All apps are starting!"
echo "Container: http://localhost:8080"
echo "React MFE: http://localhost:8081"
echo "Angular MFE: http://localhost:8082"
echo "Vue MFE: http://localhost:8083"
echo "Next.js MFE: http://localhost:8084" 