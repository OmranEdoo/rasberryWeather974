# RasberryWeather974
Following the instructions of (https://ensg_dei.gitlab.io/web-az/js/exercices/projet-station-meteo/)
The goal is to realize the software part of a weather station composed of sensors and a central. Each probe is connected to several sensors that give various information:
```
    Temperature
    Hygrometry
    Atmospheric pressure
    Rainfall
    Luminosity
    Wind speed 
    Wind direction
    GPS position  
    Time
```
A weather station can subscribe to several sensors and present the data of these sensors.

Our job consisted in creating the software part of the two elements, using exclusively WEB technologies (html/CSS/javascript/node.js).

We have a probe AND a control unit at our disposal. We had to set up a protocol (https://github.com/OmranEdoo/rasberryWeather974/blob/dev/API_TSI_v3.yaml) between all TSI-C students for data exchange.

# Table of Contents

- [Project setup](#projectsetup)
- [SystemD](#systemd)
- [License](#license)
- [Useful links](#usefullinks)


## Project setup
### Front: 
(There is a readme in the front folder)

```
git clone https://github.com/OmranEdoo/rasberryWeather974.git
npm install -g @vue/cli  
```
In the project folder:
```cmd
cd Front 
npm install 
npm run serve 
```

In a browser, open localhost:8080/

To use the mock server, run the mock server on localhost:3000, that will be explained in the mock part.

In order to visualize the website on (http://piensg030:8080), the front vue project has been put in a service following the command lines for the SystemD: 
```
cat << 'EOF' | sudo tee /etc/systemd/system/FrontService.service
[Unit]
Description=Front rasberryWeather974

[Service]
WorkingDirectory=/home/pi/rasberryWeather974/Front
ExecStart=/usr/bin/npm run dev

[Install]
WantedBy=multi-user.target
EOF
```
Next we start our FrontService by running :
```
sudo systemctl status FrontRasberry (#to get its status)
sudo systemctl start FrontRasberry (#to start it)
sudo systemctl stop FrontRasberry (#to stop it)
sudo systemctl restart FrontRasberry (#to restart)
sudo systemctl enable FrontRasberry (#to add it at system start-up)
```
We also add : 
```
sudo systemctl daemon-reload (#to rerun all generators)
```

For live and archive:
        - The server works when clicking on live for live and archive for archive (piensg030:8080/live, piensg030:8080/archive)
        - if the server is down or if the json sent by the api does not follow the written protocol in swagger, you will have an error 

### Server : 
1. Install InfluxDB : 
``` docker run -ti -d -p 8086:8086 -v influxdb:/var/lib/influxdb --name influxdb influxdb:1.8```
		```docker exec -ti influxdb bash
        # You are in root@81ae2e0ca5f7:/#
        influx
        # You are now in influx
        CREATE DATABASE weather```


You now have the database for the project. But, the database is empty and to fulfill it you just have to run the following lines : (pre-requies having node)
2. Fill the database, Mock server : 
Open a new terminal and run :

```     mkdir /dev/shm/ 
		cd /dev/shm/
		touch rainCounter.log
		touch gpsNmea
		touch sensors
		git clone https://gitlab.com/cedricici/fakesonde.git
        ```
Next, you open the project and execute : 
```
		npm install 
		npm start
```
```git clone https://github.com/OmranEdoo/rasberryWeather974.git```
then you open your project on VisualStudioCode:
there you have to go to Back/WatchReadfile/createdata.js and change the paths (path_sensors..) at the beginning to the relative path of the 3 files you created in the beginning of this step
```		cd Back
		npm install 
		cd WatchReadfile
		node createdata.js
        ```
Open a new terminal and run :
	```	cd Back 
		npm start```


3. Deploy our API and dataLoader on the rasberry :
dataLoader
```
cat << 'EOF' | sudo tee /etc/systemd/system/data.service
[Unit]
Description=weather fake data generator

[Service]
WorkingDirectory=/home/pi/rasberryWeather974/Back/WatchReadfile
ExecStart=/usr/bin/node createdata.js

[Install]
WantedBy=multi-user.target
EOF
```

API
```
cat << 'EOF' | sudo tee /etc/systemd/system/rasberry.service
[Unit]
Description=rasberry Back service

[Service]
WorkingDirectory=/home/pi/rasberryWeather974/Back
ExecStart=/usr/bin/npm start

[Install]
WantedBy=multi-user.target
EOF
```

### SSH setup

The probe will consist of a raspberry pi. We used the base image provided (pre-installed) the login is: 
pi / pipo
We start by connecting with the command :
```
ssh pi@piensg030
```
yes, next password is 'pipo'

```exit```
copy ssh public key to the server 

```ssh-copy-id -i ~/.ssh/id_rsa pi@piensg030```

then, connect using 
```
ssh pi@piensg030
```