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
const archive = require('./json/archive.json')



router.get('/', function (req, res, next) {
    res.send("server de test");
}); 
router.get('/live', function (req, res, next) {
    res.json(all);
});

router.get('/live/lum', function (req, res, next) {
    res.json(lum);
});

router.get('/live/hum', function (req, res, next) {
    res.json(hum);
});

router.get('/live/pre', function (req, res, next) {
    res.json(pre);
});

router.get('/live/temp', function (req, res, next) {
    res.json(temp);
});

router.get('/live/rain', function (req, res, next) {
    res.json(rain);
});

router.get('/live/windS', function (req, res, next) {
    res.json(windS);
});

router.get('/live/windD', function (req, res, next) {
    res.json(windD);
});

router.get('/live/gps', function (req, res, next) {
    res.json(gps);
});

router.get('/archive', function (req, res, next) {
    res.json(archive);
});

router.get('/archive{feature}', function (req, res, next) {
    res.json(archive);
});

module.exports = router;
