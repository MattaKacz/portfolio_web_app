#!/bin/bash
set -e  # zakończ skrypt przy pierwszym błędzie

# 🔧 KONFIGURACJA
APP_DIR="/var/www/website_www_portfolio/portfolio_web_app"
PM2_NAME="nextjs-app"
LOG_FILE="$APP_DIR/deploy.log"

# 🕓 Timestamp logu
timestamp=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$timestamp] 🚀 Starting deployment..." | tee -a "$LOG_FILE"

# 🧭 Przejdź do katalogu aplikacji
cd "$APP_DIR"

# 🔐 Upewnij się, że deploy.sh jest wykonalny
chmod +x ./deploy.sh

# 🧹 Wyczyść lokalne zmiany (żeby pull nie wybuchł)
git reset --hard
git clean -fd

# ⬇️ Pobierz najnowszy kod z Git
echo "[$timestamp] 🔄 Pulling from Git..." | tee -a "$LOG_FILE"
git pull origin main

# 📦 Zainstaluj zależności
echo "[$timestamp] 📦 Installing dependencies..." | tee -a "$LOG_FILE"
npm install

# 🛠 Zbuduj aplikację
echo "[$timestamp] 🏗 Building project..." | tee -a "$LOG_FILE"
npm run build

# 🔁 Restartuj aplikację w PM2
echo "[$timestamp] ♻️ Restarting PM2 process..." | tee -a "$LOG_FILE"
pm2 restart "$PM2_NAME"

# ✅ Gotowe
echo "[$timestamp] ✅ Deployment finished successfully!" | tee -a "$LOG_FILE"
