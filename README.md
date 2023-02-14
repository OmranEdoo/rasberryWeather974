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

TO install Dependencies :
Download from the command line
```
# amd64
wget https://dl.influxdata.com/influxdb/releases/influxdb2-client-2.3.0-linux-amd64.tar.gz
  
# arm
wget https://dl.influxdata.com/influxdb/releases/influxdb2-client-2.3.0-linux-arm64.tar.gz
```
