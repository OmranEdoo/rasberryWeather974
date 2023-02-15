//Influx
const Influx = require('influx');
const http = require('http');
const os = require('os');

//Express
const express = require('express');
const router = express.Router();

function createInfluxClient(){
  const influx = new Influx.InfluxDB('http://localhost:8086/weather');
  return influx;
}

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
    //Creata an influx client using default db (express_response_db) for now
    const influx = createInfluxClient()
  });

router.get('/:measure', async function(req, res, next) {
    let param = req.params.measure;
    //Creata an influx client using default db (express_response_db) for now
    //Creata an influx client using default db (express_response_db) for now
    const influx = createInfluxClient();

    let valeurs = {};
    let allPromises = [];
    let result = influx.query(
            `select * from ${param} GROUP BY * ORDER BY DESC LIMIT 1`
        );
     let gps = influx.query(
              `select * from gps GROUP BY * ORDER BY DESC LIMIT 1`
          );
          console.log('gps',gps)
          function test(){
            return gps.then(result=>{
        const lat = result[1].latitude;
        const long = result[1].longitude;
        return [lat, long];
      })
    }
    let coord = await test();
    
    result.then(results=>{
      for (let index = 0; index < results.length; index++) {
        valeurs[param] = {
          id: 30,
          name:'RaspberryWeather974',
          location:{
            latitude:coord[0],
            longitude:coord[1]
          },
          time: results[index].date,
          status: 400,
          measurements: {
            [param]: {
              name: results[index].name,
              value: parseFloat(results[index].value),
              unit: results[index].unit,
              desc: results[index].name
            }
          }}
    }
    res.json(valeurs)
  })

})

module.exports = router;