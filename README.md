# station-meteo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## SSH setup

La sonde sera constituée d'un raspberry pi. Vous utiliserez l'image de base fournie (pré-installé) le login est : pi / pipo
On commence par se connecter avec la commande :
```
ssh pi@piensg030
```
yes, next mdp is 'pipo'

```exit```
copy ssh public key to the server 

```ssh-copy-id -i ~/.ssh/id_rsa pi@piensg030```

then, connect using 
```
ssh pi@piensg030
```


## DataBase setup
We chose to work with https://www.influxdata.com/ :

Before running the application you must have docker and run the following line :
```
docker run -ti -p 8086:8086 -v influxdb:/var/lib/influxdb --name influxdb influxdb:1.8
```
Open a new terminal and run :
```
docker exec -ti influxdb bash
```
# You are in root@81ae2e0ca5f7:/#
```
influx
```
# You are now in influx
```
CREATE DATABASE weather
```
