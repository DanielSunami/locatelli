#!/bin/bash

cd frontend
echo 'installing express...'
npm install express
node server.js &
echo $! > ../front.pid
