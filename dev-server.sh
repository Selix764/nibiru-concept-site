#!/bin/bash

# NIBIRU Development Server Script
echo "🌟 Starting NIBIRU Development Server..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the nibiru-react directory."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Kill any existing process on port 3000
echo "🔄 Checking for existing processes on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Start the development server
echo "🚀 Starting React development server..."
echo "📍 Server will be available at: http://localhost:3000"
echo "🌐 Network access: http://192.168.1.131:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start 