var index= function(req,res,next){
  res.render('index', { title: 'AppNacho' });
}

module.exports.index=index;
