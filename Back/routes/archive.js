//Influx
const Influx = require('influx');
const http = require('http');
const os = require('os');

//Express
const express = require('express');
const { Console } = require('console');
const router = express.Router();

function createInfluxClient() {
    const influx = new Influx.InfluxDB('http://localhost:8086/weather');
    return influx;
}
const influx = createInfluxClient();

router.get('/:period/:param', async function (req, res, next) {
    let param = req.params.param;
    let endDatetime = req.params.endDatetime;
    if (!endDatetime) {
        endDatetime = new Date();
    }
    console.log("today : ", endDatetime);
    let valeurs = {};
    //Creata an influx client using default db (express_response_db) for now
    console.log("param : ", param)
    let period = req.params.period;
    console.log("period : ", period)
    let gps = influx.query(
        `SELECT * FROM gps GROUP BY * ORDER BY DESC LIMIT 10`
    );
    //console.log('gps', gps)
    function GPS() {
        return gps.then(result => {
            const lat = result[0].latitude;
            const long = result[0].longitude;
            return [lat, long];
        })
    }
    let coord = GPS();
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

    let namequery = influx.query(
        `select * from ${param} GROUP BY * ORDER BY DESC LIMIT 1`
    );
    namequery.then(results => {
        for (let index = 0; index < results.length; index++) {
            valeurs.measurements[param] = {
                name: results[index].name,
                desc: results[index].desc,
                unit: results[index].unit,
                values: [],
                times: []
            }
        }

        let allValue = [];
        let allTime = [];
        let value = [];
        let time = [];
        let L = [];
        let result;

        let period_date = new Date();
        let a = new Date();
        let step;
        let stepping;
        if (period == "day") {
            console.log("------day case------");
            period_date.setHours(endDatetime.getHours() - 24);
            console.log("date_day : ", period_date);
            a.setHours(a.getHours() - 24);
            console.log("date_day+1h : ", a);
            stepping = 24;
            for (let i = 1; i < stepping + 1; i++) {

                console.log(i)
                console.log("date_dayà : ", period_date.toISOString());
                a.setHours(a.getHours() + 1);
                console.log("date_day+1h : ", a.toISOString());

                let moyenne = getMeanValue(param, period_date, a, allTime);
                allValue.push(moyenne);

                let periodDateCopy = structuredClone(period_date);
                allTime.push(periodDateCopy)
                console.log("yesterdays", allTime)

                period_date.setHours(period_date.getHours() + 1)

            }
            valeurs.measurements[param].times = allTime
            console.log("allllll", allTime)
            Promise.all(allValue).then(r => {
                valeurs.measurements[param].values = r
                res.json(valeurs)
            })
        }
        else if (period == "week") {
            console.log("------week case------");
            period_date.setHours(endDatetime.getHours() - 7 * 24);
            console.log("date_week : ", period_date);
            a.setHours(a.getHours() - 7 * 24);
            console.log("date_week+12h : ", a);
            stepping = 14;
            for (let i = 1; i < stepping + 1; i++) {
                console.log(i)
                console.log("date_week : ", period_date.toISOString());
                a.setHours(a.getHours() + 12);
                console.log("date_week+12h : ", a.toISOString());

                let moyenne = getMeanValue(param, period_date, a, allTime);
                allValue.push(moyenne);

                let periodDateCopy = structuredClone(period_date);
                allTime.push(periodDateCopy)
                console.log("yesterdays", allTime)

                period_date.setHours(period_date.getHours() + 12)

            }
            valeurs.measurements[param].times = allTime
            console.log("allllll", allTime)
            Promise.all(allValue).then(r => {
                valeurs.measurements[param].values = r
                res.json(valeurs)
            })


        }
        else if (period == "month") {
            console.log("------month case------");
            period_date.setMonth(endDatetime.getMonth() - 12);
            console.log("date_month : ", period_date);
            a.setMonth(endDatetime.getMonth() - 12);
            console.log("date_month+1day : ", a);
            stepping = 30;
            for (let i = 1; i < stepping + 1; i++) {
                console.log(i)
                console.log("date_month : ", period_date.toISOString());
                a.setMonth(a.getMonth() + 1);
                console.log("date_month+1month : ", a.toISOString());

                let moyenne = getMeanValue(param, period_date, a, allTime);
                allValue.push(moyenne);

                let periodDateCopy = structuredClone(period_date);
                allTime.push(periodDateCopy)
                console.log("yesterdays", allTime)

                period_date.setMonth(period_date.getMonth() + 1)

            }
            valeurs.measurements[param].times = allTime
            console.log("allllll", allTime)
            Promise.all(allValue).then(r => {
                valeurs.measurements[param].values = r
                res.json(valeurs)
            })


        }

    }
    )
})


async function getMeanValue(param, period_date, a, allTime) {
    console.log("requete", `SELECT mean(value) as mean FROM ${param} WHERE time > '${period_date.toISOString()}' AND time < '${a.toISOString()}'`)
    let r = await influx.query(
        `SELECT mean(value) as mean FROM ${param} WHERE time > '${period_date.toISOString()}' AND time < '${a.toISOString()}'`).then(r => {
            if (r[0]) {
                if (r[0].mean) {
                    console.log("moyenne", r[0].mean)
                    return r[0].mean
                    // allValue.push(r[0].mean);
                } else {
                    console.log("moyenne", 0)
                    return 0
                    // allValue.push(0);
                }
            }
            else {
                console.log("moyenne", 0)
                return 0
                // allValue.push(0);
            }
        })
    return r
}

module.exports = router;