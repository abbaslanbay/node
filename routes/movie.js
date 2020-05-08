const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
router.post('/', (req, res, next) =>{
  /*Tek Te fiELDLARİ AYIRIP databasea ekleniyor*/
  const {title,imdb_score,category,country,year} = req.body;
  const movie = new Movie({
    title:title,
    imdb_score:imdb_score,
    category:category,
    country:country,
    year:year
  }); 
/* Gelen TÜm dataya Ekliyor (Önerilmez)
const movie = new Movie(req.body)
*/
const promise = movie.save();
  promise.then((data) => {
    res.json({status : 1})
  }).catch((err) => {
    res.json(err)
  })
 /* movie.save((err,data) => {
    if(err)
      res.json(err)

    res.json(data)
  })*/
});

module.exports = router;
