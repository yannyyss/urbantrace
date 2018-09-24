const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

router.get('/places', async (req,res,next) => {
  try{
    let places = await Place.find();
    res.status(200).send(places);
  }
  catch (e) {
    res.status(400).send(e)
  }
});

router.get('/places/:id', async (req,res,next) => {
  try{
    let id = req.params.id;
    let place = await Place.findById({ _id:id}).populate('creator');
    res.status(200).send(place);
  }
  catch (e){
    res.status(400).send(e);
  }
});

router.post('/places', (req,res,next) => {

  const {location,address,sports,creator} = req.body;

  const newPlace = new Place ({
    location,
    address,
    sports,
    creator
  })

  newPlace 
    .save()
    .then( () => {
      res.status(200).send(newPlace);
    })
    .catch( e => {
      res.status(200).send(e);
    })
});

router.put('/places/:id', async (req,res,next) => {
  let update = await Place.findByIdAndUpdate(req.params.id, {$set:req.body}, function(e,place){
    if(e) return next(e);
    res.status(200).send('Updated');
  });
});

router.delete('/places/:id', async (req,res,next) =>{
  let del = await Place.findByIdAndRemove(req.params.id, e => {
    if(e) return next(e);
    res.status(200).send('Deleted');
  });
});

module.exports = router;