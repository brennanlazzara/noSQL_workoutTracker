const express = require('express')
let router = express.Router()
let path = require('path')



// GET method INDEX.HTML route
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });
  
// GET method EXERCISE.HTML route
router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
  });


  // GET method STATS.HTML route
router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
  });


  module.exports = router