#!/bin/bash

echo ""
echo "****************************"
echo "*   PROJECT SETUP RESET!   *"
echo "****************************"
echo ""
sleep 2

if [ -d "./backend/node_modules" ];
then
  rm -rf ./backend/node_modules ./backend/package-lock.json
  sleep 1
  npm install --prefix backend
  echo "Backend node_modules are now refreshed!"
else
  npm install --prefix backend
  echo "Backend node_modules are now installed!"
fi
echo ""
sleep 2

if [ -d "./frontend/node_modules" ];
then
  rm -rf ./frontend/node_modules ./frontend/package-lock.json
  sleep 1
  npm install --prefix frontend
  echo "Frontend node_modules are now refreshed!"
else
  npm install --prefix frontend
  echo "Frontend node_modules are now installed!"
fi
echo ""
sleep 2

if [ -f "./frontend/node_modules/react-scripts/config/webpackDevServer.config.js" ];
then
  rm ./frontend/node_modules/react-scripts/config/webpackDevServer.config.js
  cp ./frontend/backup/webpackDevServer.config.js ./frontend/node_modules/react-scripts/config/
  echo "Frontend react-scripts config file replaced!"
fi
echo ""
sleep 2

echo "Starting up the application..."
sleep 1
npm run dev
