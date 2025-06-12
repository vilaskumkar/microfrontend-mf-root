#!/bin/bash

echo "Stopping all micro frontend apps..."

# Function to kill process running on a specific port
function kill_port() {
    local port=$1
    local pid=$(lsof -ti:$port)
    if [ ! -z "$pid" ]; then
        echo "Stopping process on port $port (PID: $pid)"
        kill -9 $pid
    else
        echo "No process running on port $port"
    fi
}

# Kill processes on each port
kill_port 8080  # Container
kill_port 8081  # React
kill_port 8082  # Angular
kill_port 8083  # Vue

echo "All apps have been stopped!" 