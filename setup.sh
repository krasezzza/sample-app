#!/bin/bash

echo ""
echo "****************************"
echo "*   PROJECT SETUP START!   *"
echo "****************************"
echo ""
sleep 2

if [ -d "./backend/node_modules" ];
then
  echo "Backend node_modules already installed."
else
  rm -rf ./backend/node_modules
  sleep 1
  npm install --prefix backend
  echo "Backend node_modules are now installed!"
fi
echo ""
sleep 2

if [ -d "./frontend/node_modules" ];
then
  echo "Frontend node_modules already installed."
else
  rm -rf ./frontend/node_modules
  sleep 1
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
