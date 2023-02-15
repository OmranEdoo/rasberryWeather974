const Influx = require('influx');
const fs = require('fs')

const influx = new Influx.InfluxDB('http://localhost:8086/weather')

const path = "/dev/shm/sensors";

//console.log(influx)
// Create a table in InfluxDB
influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('weather')) {
      return influx.createDatabase('weather');
    }
  })
  .then(() => {
    fs.watchFile(path, (curr, prev) => {
      fs.readFile(path, 'utf-8', (err, data) => {
        const dataJson = JSON.parse(data);
        console.log(dataJson);
        if (err) throw err;
        influx.writePoints([
          {
            measurement: 'temp',
            fields: { 
              unit: dataJson.measure[0].unit,
              value: dataJson.measure[0].value,
              name: dataJson.measure[0].name,
              date: dataJson.date
            },
          },{
            measurement: 'pres',
            fields: { 
              unit: dataJson.measure[1].unit,
              value: dataJson.measure[1].value,
              name: dataJson.measure[1].name,
              date: dataJson.date
            },
          },{
            measurement: 'hum',
            fields: { 
              unit: dataJson.measure[2].unit,
              value: dataJson.measure[2].value,
              name: dataJson.measure[2].name,
              date: dataJson.date
            },
          },{
            measurement: 'lum',
            fields: { 
              unit: dataJson.measure[3].unit,
              value: dataJson.measure[3].value,
              name: dataJson.measure[3].name,
              date: dataJson.date
            },
          },{
            measurement: 'wind_dir',
            fields: { 
              unit: dataJson.measure[4].unit,
              value: dataJson.measure[4].value,
              name: dataJson.measure[4].name,
              date: dataJson.date
            },
          },{
            measurement: 'wind_speed',
            fields: { 
              unit: dataJson.measure[5].unit,
              value: dataJson.measure[5].value,
              name: dataJson.measure[5].name,
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
