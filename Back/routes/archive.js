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


router.get('/:period/:param', async function (req, res, next) {
    let param = req.params.param;
    let endDatetime = req.params.endDatetime;
    if (!endDatetime) {
        endDatetime = new Date();
    }
    console.log("today : ", endDatetime);
    let valeurs = {};
    //Creata an influx client using default db (express_response_db) for now
    const influx = createInfluxClient();
    console.log("param : ", param)
    let period = req.params.period;
    console.log("period : ", period)

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
    let allValue = [];
    let allTime = [];
    let value = [];
    let time = [];
    let L = [];
    let result;

    let period_date = new Date();
    let step;
    let stepping;
    let a = new Date();
    if (period == "day") {
        console.log("------day case------");
        period_date.setHours(endDatetime.getHours() - 24);
        console.log("date_day : ", period_date);
        stepping = 24;
        for (let i = 1; i < stepping+1; i++){
            console.log(i)
            a.setHours((period_date.getHours()+i)%24);
            console.log("EUH",a)
            console.log("EUHKFGJNJJKER",(period_date.getHours()+i)%24)
            result = influx.query(
                `SELECT * FROM ${param} WHERE time > '${period_date.toISOString()}' AND time < '${a.toISOString()}'`
            );
            period_date = a;
        }
    }
    else if (period == "week") {
        console.log("------week case------");
        period_date.setHours(endDatetime.getHours() - 7*24);
        console.log("date_week : ", period_date);
        stepping = 14;
        step = (endDatetime - period_date) / stepping;
        console.log("step_week : ", step);
    }
    else if (period == "month") {
        console.log("------month case------");
        period_date.setMonth(endDatetime.getMonth() - 1);
        console.log("date_month : ", period_date);
        stepping = 30;
        step = (endDatetime - period_date) / stepping;
        console.log("step_month : ", step);
    }
    else if (period == "year") {
        console.log("------year case------");
        period_date.setFullYear(endDatetime.getFullYear() - 1);
        console.log("date_year : ", period_date);
        stepping = 52;
        step = (endDatetime - period_date) / stepping;
        console.log("step_year : ", step);
    }
    
    
    await result.then(results => {
        for (let index = 0; index < results.length; index++) {
            allValue.push(parseFloat(results[index].value))
            allTime.push(results[index].date)
            valeurs.measurements[param] = {
                name: results[index].name,
                desc: results[index].name,
                unit: results[index].unit,
            }
        }
        
            // if (time>time[i]+step && time<time[i*stepping]+step){
            //     allTime.foreach(r=>{
            //         L.push(r);
            //     }
            //     )
            // }
            // value.push(math.mean(L))
            
        
        valeurs.measurements[param].values = value;
        valeurs.measurements[param].times = time;
    })

    res.json(valeurs)
}
)

module.exports = router;
