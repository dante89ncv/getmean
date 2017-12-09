var express = require('express');
var router = express.Router();
var ctrlLocations=require('../controllers/ctrlLocations')
var ctrlOthers=require('../controllers/ctrlOthers')
/* GET home page. */
router.get('/', ctrlLocations.homelist)
      .get('/location', ctrlLocations.locationInfo)
      .get('/location/review/new',ctrlLocations.addReview)
      .get('/about',ctrlOthers.about);




module.exports = router;
