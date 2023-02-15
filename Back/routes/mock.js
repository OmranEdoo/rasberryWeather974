var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/mocks', function (req, res, next) {
    res.json('mock.json');
});

module.exports = router;
