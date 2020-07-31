var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var str = fs.readFileSync(`./data/CatObjArr.json`, 'utf8');
  var CatObjArr = JSON.parse(str);
  var CatPicIndex = Math.floor((Math.random() * 99));
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(CatObjArr[CatPicIndex]));
});

module.exports = router;
