

# pull Mule 4 enterprise Docker image
docker pull rprins/mule4-trial-rpi:latest

# run the docker container as a daemon
docker run -d --name="mule4-rpi" -p 8081:8081 -v ~/mule/mule4-trial-rpi/apps:/opt/mule/apps -v ~/mule/mule4-trial-rpi/logs:/opt/mule/logs rprins/mule4-trial-rpi