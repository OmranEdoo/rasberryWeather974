const Influx = require('influx');
const fs = require('fs')
const gps = require('chokidar');
const rain = require('chokidar');
const influx = new Influx.InfluxDB('http://localhost:8086/weather')
const nmea = require('@drivetech/node-nmea');
const path_sensors = "/dev/shm/sensors";
const path_gps = "/dev/shm/gpsNmea";
const path_rain = "/dev/shm/rainCounter.log";

// Create a table in InfluxDB
influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('weather')) {
      return influx.createDatabase('weather');
    }
  })
  .then(() => {
    fs.watchFile(path_sensors, (curr, prev) => {
      fs.readFile(path_sensors, 'utf-8', (err, data) => {
        const dataJson = JSON.parse(data);
        //console.log(dataJson);
        if (err) throw err;
        influx.writePoints([
          {
            measurement: 'temp',
            fields: {
              name: dataJson.measure[0].name,
              desc: dataJson.measure[0].desc,
              unit: dataJson.measure[0].unit,
              value: parseFloat(dataJson.measure[0].value),
              date: dataJson.date
            },
          }, {
            measurement: 'pre',
            fields: {
              name: dataJson.measure[1].name,
              desc: dataJson.measure[1].desc,
              unit: dataJson.measure[1].unit,
              value: parseFloat(dataJson.measure[1].value),
              date: dataJson.date
            },
          }, {
            measurement: 'hum',
            fields: {
              name: dataJson.measure[2].name,
              desc: dataJson.measure[2].desc,
              unit: dataJson.measure[2].unit,
              value: parseFloat(dataJson.measure[2].value),
              date: dataJson.date
            },
          }, {
            measurement: 'lum',
            fields: {
              name: dataJson.measure[3].name,
              desc: dataJson.measure[3].desc,
              unit: dataJson.measure[3].unit,
              value: parseFloat(dataJson.measure[3].value),
              date: dataJson.date
            },
          }, {
            measurement: 'wind_dir',
            fields: {
              name: dataJson.measure[4].name,
              desc: dataJson.measure[4].desc,
              unit: dataJson.measure[4].unit,
              value: parseFloat(dataJson.measure[4].value),
              date: dataJson.date
            },
          }, {
            measurement: 'wind_speed',
            fields: {
              name: dataJson.measure[5].name,
              desc: dataJson.measure[5].desc,
              unit: dataJson.measure[5].unit,
              value: parseFloat(dataJson.measure[5].value),
              date: dataJson.date
            },
          }

        ]).catch(err => {
          console.error(`Error writing points: ${err.stack}`)
        });
      });
    });
  })
  .catch(err => {
    console.error(`Error creating Influx database!`);
    console.error(err);

  });


gps.watch(path_gps).on('change', (event, path) => {

  fs.readFile(path_gps, 'utf8', (err, dataRaw) => {
    if (err) {
      console.error(err)
      return
    }

    data = nmea.parse(dataRaw.split("\n")[1]);

    influx.writePoints([
      {
        measurement: "gps",
        fields: {
          latitude: data.loc['geojson'].coordinates[1],
          longitude: data.loc['geojson'].coordinates[0],
          //date: data.date,
          name: "gps",
          unit: "°"
        },
      }
    ], {
      database: 'weather',
      precision: 'ms',
    })
      .catch(error => {
        console.error(`Error saving data to InfluxDB! ${error.stack}`)
      });
  });
})
console.log("rainnnn")
rain.watch(path_rain).on('change', (event, path) => {
  console.log(path_rain)

  fs.readFile(path_rain, 'utf8', (err, data) => {
    console.log(path_rain)
    console.log("rain", typeof data);
    data = data.replace('\n', '');
    if (err) {
      console.error(err)
      return
    }
    influx.writePoints([
      {
        measurement: "rain",
        fields: {
          unit: 'mm/m^2',
          value: 0.3274,
          name: 'Rainfall',
          date: data
        }
      }
    ], {
      database: 'weather',
      precision: 'ms',
    })
      .catch(error => {
        console.error(`Error saving rain to InfluxDB! ${error.stack}`)
      });
  });
})

