var location_f= function(req,res,next){
  res.render('location-list', { title: 'This is Location Page' });
}
var getLocation_f= function(req,res,next){
  res.render('location', { title: 'This is  Location  info Page' });
}

var newLocation_f= function(req,res,next){
  res.render('review', { title: 'This is add review Location Page' });
}

module.exports={
  homelist:location_f,
  locationInfo:getLocation_f,
  addReview:newLocation_f
};
