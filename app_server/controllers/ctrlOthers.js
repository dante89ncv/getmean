var about_f= function(req,res,next){
  res.render('about', { title: 'This is the About Page' });
}

module.exports={about:about_f};
