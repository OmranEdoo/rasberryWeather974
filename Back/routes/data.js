//Influx
const Influx = require('influx');
const http = require('http');
const os = require('os');

//Express
const express = require('express');
const router = express.Router();

const listMeasure = {
    'temp':'temp',
    'hum':'hum',
    'pre':'pre',
    'lum':'lum',
    'wind_dir':'wind_dir',
    'wind_speed':'wind_speed',
}

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

router.get('/:measure', function(req, res, next) {
    let param = req.params['measure'];
    //Creata an influx client using default db (express_response_db) for now
    //Creata an influx client using default db (express_response_db) for now
    const influx = createInfluxClient();

    let valeurs = {};
    let allPromises = [];
    let result = influx.query(
            `select * from ${param} GROUP BY * ORDER BY DESC LIMIT 1`
        );
    valeurs[param]={};
    valeurs[param]['id']=null;
    valeurs[param]['name']=null;
    valeurs[param]['location']=null;
    valeurs[param]['time']=null;
    valeurs[param]['status']=null;
    valeurs[param]['measurement']={};
    valeurs[param]['measurement'][param]={};
    valeurs[param]['measurement'][param]['name']=null;
    valeurs[param]['measurement'][param]['value']=null;
    valeurs[param]['measurement'][param]['unit']=null;
    valeurs[param]['measurement'][param]['desc']=null;




    result.then(results=>{
      for (let index = 0; index < results.length; index++) {
        valeurs[param]['id']=30;
        valeurs[param]['name']="RaspberryWeather974";
        valeurs[param]['location']="30";
        valeurs[param]['time'] = new Date (results[index].date).toISOString(); 
        valeurs[param]['status']="400";
        valeurs[param]['measurement'][param]['name']=results[index].name;
        valeurs[param]['measurement'][param]['desc']=results[index].name;
        valeurs[param]['measurement'][param]['value']=parseInt(results[index].value);
        valeurs[param]['measurement'][param]['unit']=results[index].unit;
      }
      res.send(valeurs);
    })  
});   


    // router.get('/:measure/:date', function(req, res, next) {
    //     let listParam = req.params['measure'].split(',').map(elem => elem.toLowerCase());
    //     let listDate = req.params['date'].split(',');

    //     //Creata an influx client using default db (express_response_db) for now
    //     //Creata an influx client using default db (express_response_db) for now
    //     const influx = createInfluxClient();

    //     let dateDebut = new Date(listDate[0]).getTime();
    //     let dateFin = Date.now();
        
    //     if (listDate.length == 2) {
    //         dateFin = new Date(listDate[1]).getTime();
    //     }
    //     let valeurs = {};
    //     let allPromises = [];
    //     listParam.forEach(param => {
    //         valeurs[param] ={'date':[],'value':[]};
    //         allPromises.push(
    //         influx.query(
    //             `select * from ${listMeasure[param]} where date>${dateDebut} and date<=${dateFin}`
    //         ))
    //     });
    
    //     Promise.all(allPromises)
    //     .then(promises => {
    //         i=0
    //         promises.forEach(results=>{
    //             for (let index = 0; index < results.length; index++) {
    //                     valeurs[listParam[i]]['value'].push(results[index].value);
    //                     valeurs[listParam[i]]['date'].push((new Date (results[index].date)).toISOString());
    //                 }
                
                
    //             i+=1;
    //             })
    //             res.send(valeurs);
    //     })
        
    //     });

module.exports = router;

























// const Influx = require('influx');
// const express = require('express');
// const http = require('http')
// const os = require('os')

// const app = express()
// //const url = 'localhost:8086';


// const influx = new Influx.InfluxDB({
//     host: 'localhost',
//     database: 'weather',
//     schema: [
//         {
//             measurement: 'temp',
//             fields: { value: Influx.FieldType.FLOAT },
//             tags: ['unit', 'source']
//         },
//         {
//           measurement: 'pre',
//           fields: { value: Influx.FieldType.FLOAT },
//           tags: ['unit', 'source']
//       },
//       {
//           measurement: 'hum',
//           fields: { value: Influx.FieldType.FLOAT },
//           tags: ['unit', 'source']
//       },
//       {
//           measurement: 'lum',
//           fields: { value: Influx.FieldType.FLOAT },
//           tags: ['unit', 'source']
//       },
//       {
//           measurement: 'wind_dir',
//           fields: { value: Influx.FieldType.FLOAT },
//           tags: ['unit', 'source']
//       },
//       {
//           measurement: 'wind_speed',
//           fields: { value: Influx.FieldType.FLOAT },
//           tags: ['unit', 'source']
//       },
//       {
//           measurement: 'gps',
//           fields: { value: Influx.FieldType.FLOAT },
//           tags: ['unit', 'source']
//       },
//       {
//           measurement: 'rain',
//           fields: { value: Influx.FieldType.FLOAT },
//           tags: ['unit', 'source']
//       }
//     ]
//   })

// influx.getDatabaseNames()
//   .then(names => {
//     if (!names.includes('weather')) {
//       return influx.createDatabase('weather');
//     }
//   })
//   .then(() => {
//     http.createServer(app).listen(3000, function () {
//       console.log('Listening on port 3000')
//     })
//   })
//   .catch(err => {
//     console.error(`Error creating Influx database! blabla`);
// })

// app.use((req, res, next) => {
//     const start = Date.now()
  
//     res.on('finish', () => {
//       const duration = Date.now() - start
//       console.log(`Request to ${req.path} took ${duration}ms`);
  
//       influx.writePoints([
//         {
//             measurement: 'duration',
//             tags: { host: os.hostname() },
//             fields: { duration, path: req.path },
//         },
        
//       ]).catch(err => {
//         console.error(`Error saving data to InfluxDB! ${err.stack}`)
//       })
//     })
//     return next()
//   })
  
// app.get('/', function (req, res) {
//     setTimeout(() => res.end('Hello world!'), Math.random() * 500)
// })
  
// app.get('/temp', function (req, res) {
//     influx.query(`
//       select * from temp
//       where host = ${Influx.escape.stringLit(os.hostname())}
//       order by time desc
//     limit 10
//     `).then(result => {
//       res.json(result)
//     }).catch(err => {
//       res.status(500).send(err.stack)
//     })
// })

// module.exports = app;


      