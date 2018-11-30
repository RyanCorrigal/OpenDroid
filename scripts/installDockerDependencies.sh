#!/bin/bash

# install docker
curl -sSL https://get.docker.com | sh

# add docker user and start the service
sudo usermod -aG docker pi
sudo systemctl enable docker
sudo systemctl start docker

echo Docker was successfully installed!