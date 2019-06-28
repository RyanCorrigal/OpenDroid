#!/bin/bash

# update and upgrade
sudo apt-get update -y && sudo apt-get upgrade -y

# install node and dependencies
sudo apt-get install -y build-essential
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update -y && sudo apt-get install -y yarn

# install noble dependencies
sudo apt-get install -y bluetooth bluez libbluetooth-dev libudev-dev libcap2-bin

# install npm packages
mkdir node/
cd ~/node

npm install noble
cd node_modules/noble
npm install
cd ../../
npm install sphero
cd node_modules/sphero
npm install
cd ../../

# install nodemon for ease of use
sudo npm install -g nodemon

# test our nodejs BLE setup
sudo nodemon node_modules/noble/examples/advertisement-discovery.js

echo 'Node has been successfully installed with the following modules:'
echo '  - Nodemon (Global)'
echo '  - Noble'
echo '  - Shpero'
