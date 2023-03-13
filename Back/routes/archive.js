//Influx
const Influx = require('influx');
const http = require('http');
const os = require('os');

//Express
const express = require('express');
const router = express.Router();

function createInfluxClient() {
    const influx = new Influx.InfluxDB('http://localhost:8086/weather');
    return influx;
}


router.get('/:period/:param', async function (req, res, next) {
    let param = req.params.param;
    let valeurs = {};
    //Creata an influx client using default db (express_response_db) for now
    const influx = createInfluxClient();
    console.log("param : ", param)
    let period = req.params.period;
    console.log("period : ", period)
    let date = new Date().toJSON();
    console.log("date : ", date);

    let gps = influx.query(
        `select * from gps GROUP BY * ORDER BY DESC LIMIT 10`
    );
    console.log('gps', gps)
    function test() {
        return gps.then(result => {
            const lat = result[0].latitude;
            const long = result[0].longitude;
            return [lat, long];
        })
    }
    let coord = await test();



    if (period == "week") {
        console.log("------week case------");
        let result = influx.query(
            `select * from ${param} GROUP BY * ORDER BY time ASC limit 10`
        );

        result.then(results => {
            for (let index = 0; index < results.length; index++) {
                console.log("DEBUUUUUG", results[1])
                valeurs[param] = {
                    id: 30,
                    name: 'RaspberryWeather974',
                    location: {
                        latitude: coord[0],
                        longitude: coord[1]
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
                    }
                }
            }
            res.json(valeurs[param])
            console.log(valeurs)
        })
    }

})

module.exports = router;