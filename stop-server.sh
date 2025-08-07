#!/bin/bash

# NIBIRU Stop Development Server Script
echo "🛑 Stopping NIBIRU Development Server..."

# Find and kill processes on port 3000
echo "🔍 Looking for processes on port 3000..."
PIDS=$(lsof -ti:3000)

if [ -z "$PIDS" ]; then
    echo "✅ No processes found on port 3000"
else
    echo "🔄 Stopping processes: $PIDS"
    echo $PIDS | xargs kill -9
    echo "✅ Development server stopped"
fi

# Also kill any react-scripts processes
echo "🔍 Looking for react-scripts processes..."
REACT_PIDS=$(pgrep -f "react-scripts start")

if [ -z "$REACT_PIDS" ]; then
    echo "✅ No react-scripts processes found"
else
    echo "🔄 Stopping react-scripts processes: $REACT_PIDS"
    echo $REACT_PIDS | xargs kill -9
    echo "✅ React scripts stopped"
fi

echo "🎉 All development servers stopped!" 