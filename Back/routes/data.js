const Influx = require('influx');
const express = require('express');
const http = require('http')
const os = require('os')

const app = express()
//const url = 'localhost:8086';


const influx = new Influx.InfluxDB({
    host: 'localhost',
    database: 'RW974',
    schema: [
        {
            measurement: 'temp',
            fields: { 
                value: Influx.FieldType.FLOAT,
                duration: Influx.FieldType.FLOAT },
            tags: ['unit', 'source']
        }
    ]
  })

influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('RW974')) {
      return influx.createDatabase('RW974');
    }
  })
  .then(() => {
    http.createServer(app).listen(3000, function () {
      console.log('Listening on port 3000')
    })
  })
  .catch(err => {
    console.error(`Error creating Influx database!`);
})

app.use((req, res, next) => {
    const start = Date.now()
  
    res.on('finish', () => {
      const duration = Date.now() - start
      console.log(`Request to ${req.path} took ${duration}ms`);
  
      influx.writePoints([
        {
          measurement: 'duration',
          tags: { host: os.hostname() },
          fields: { duration, path: req.path },
        }
      ]).catch(err => {
        console.error(`Error saving data to InfluxDB! ${err.stack}`)
      })
    })
    return next()
  })
  
app.get('/', function (req, res) {
    setTimeout(() => res.end('Hello world!'), Math.random() * 500)
})
  
app.get('/temp', function (req, res) {
    influx.query(`
      select * from temp
      where host = ${Influx.escape.stringLit(os.hostname())}
      order by time desc
    limit 10
    `).then(result => {
      res.json(result)
    }).catch(err => {
      res.status(500).send(err.stack)
    })
})

module.exports = app;


        // {
        //     measurement: 'pre',
        //     fields: { value: Influx.FieldType.FLOAT },
        //     tags: ['unit', 'source']
        // },
        // {
        //     measurement: 'hum',
        //     fields: { value: Influx.FieldType.FLOAT },
        //     tags: ['unit', 'source']
        // },
        // {
        //     measurement: 'lum',
        //     fields: { value: Influx.FieldType.FLOAT },
        //     tags: ['unit', 'source']
        // },
        // {
        //     measurement: 'wind_dir',
        //     fields: { value: Influx.FieldType.FLOAT },
        //     tags: ['unit', 'source']
        // },
        // {
        //     measurement: 'wind_speed',
        //     fields: { value: Influx.FieldType.FLOAT },
        //     tags: ['unit', 'source']
        // },
        // {
        //     measurement: 'gps',
        //     fields: { value: Influx.FieldType.FLOAT },
        //     tags: ['unit', 'source']
        // },
        // {
        //     measurement: 'rain',
        //     fields: { value: Influx.FieldType.FLOAT },
        //     tags: ['unit', 'source']
        // },