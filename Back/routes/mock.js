var express = require('express');
var router = express.Router();

const all = require('./json/all.json')
const lum = require('./json/lum.json')
const hum = require('./json/hum.json')
const pre = require('./json/pre.json')
const temp = require('./json/temp.json')
const rain = require('./json/rain.json')
const windS = require('./json/windS.json')
const windD = require('./json/windD.json')
const gps = require('./json/gps.json')


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(all);
});

router.get('/lum', function (req, res, next) {
    res.json(lum);
});

router.get('/hum', function (req, res, next) {
    res.json(hum);
});

router.get('/pre', function (req, res, next) {
    res.json(pre);
});

router.get('/temp', function (req, res, next) {
    res.json(temp);
});

router.get('/rain', function (req, res, next) {
    res.json(rain);
});

router.get('/windS', function (req, res, next) {
    res.json(windS);
});

router.get('/windD', function (req, res, next) {
    res.json(windD);
});

router.get('/gps', function (req, res, next) {
    res.json(gps);
});

module.exports = router;
