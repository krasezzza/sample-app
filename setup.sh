#!/bin/bash

echo ""
echo "****************************"
echo "*   PROJECT SETUP START!   *"
echo "****************************"
echo ""
sleep 2

if [ -f "./backend/.env" ];
then
  echo "DotEnv file already configured."
else
  cp ./backend/example/.env.example ./backend/.env
  echo "DotEnv file is now configured!"
fi
echo ""
sleep 2

if [ -f "./backend/.sequelizerc" ];
then
  echo "DotSequelizeRC file already configured."
else
  cp ./backend/example/.sequelizerc.example ./backend/.sequelizerc
  echo "DotSequelizeRC file is now configured!"
fi
echo ""
sleep 2

if [ -f "./backend/src/database.sqlite" ];
then
  echo "SQLite database already configured."
else
  cp ./backend/example/database.sqlite.example ./backend/database.sqlite
  sleep 1
  npm run be-migrate-up
  npm run be-seed-up
  echo "SQLite database is now configured!"
fi
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
  cp ./frontend/example/webpackDevServer.config.js ./frontend/node_modules/react-scripts/config/
  echo "Frontend react-scripts config file replaced!"
fi
echo ""
sleep 2

echo "Starting up the application..."
sleep 1
npm run dev
