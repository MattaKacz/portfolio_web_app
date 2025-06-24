#!/bin/bash

set -e

APP_DIR="/var/www/website_www_portfolio/portfolio_web_app"

echo "📁 Moving to project directory: $APP_DIR"
cd "$APP_DIR"

echo "🔄 Pulling latest code from Git..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🛠️ Building the Next.js app..."
npm run build

echo "🚀 Restarting PM2 process..."
pm2 restart nextjs-app

echo "♻️ Reloading NGINX..."
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"
