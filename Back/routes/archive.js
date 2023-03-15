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
    let today = new Date();
    console.log("today : ", today);

    let gps = influx.query(
        `SELECT * FROM gps GROUP BY * ORDER BY DESC LIMIT 10`
    );
    //console.log('gps', gps)
    function test() {
        return gps.then(result => {
            const lat = result[0].latitude;
            const long = result[0].longitude;
            return [lat, long];
        })
    }
    let coord = await test();
    valeurs = {
        id: 30,
        name: 'RaspberryWeather974',
        location: {
            latitude: coord[0],
            longitude: coord[1]
        },
        status: 400,
        measurements: {}

    }
    let value = [];
    let time = [];
    let period_date = new Date();


    if (period == "day") {
        console.log("------day case------");
        period_date.setDate(today.getDate() - 1)
        console.log("date_day : ", period_date)
    }
    else if (period == "week") {
        console.log("------week case------");
        period_date.setDate(today.getDate() - 7)
        console.log("date_week : ", period_date)
    }
    else if (period == "month") {
        console.log("------month case------");
        period_date.setDate(today.getDate() - 30)
        console.log("date_week : ", period_date)
    }

    result = influx.query(
        `SELECT * FROM ${param} WHERE time > '${period_date.toISOString()}' AND time < '${today.toISOString()}'  LIMIT 24`
    );
    await result.then(results => {
        for (let index = 0; index < results.length; index++) {
            value.push(parseFloat(results[index].value))
            time.push(results[index].date)
            valeurs.measurements[param] = {
                name: results[index].name,
                desc: results[index].name,
                unit: results[index].unit,
            }
        }
        valeurs.measurements[param].values = value;
        valeurs.measurements[param].times = time;
    })

    res.json(valeurs)
}
)

module.exports = router;
