const express = require('express');
const router = express.Router();
const Events = require('../models/Events');

router.get('/events', async (req,res,next) => {
  try{
    let events = await Events.find();
    res.status(200).send(events);
  }
  catch (error) {
    res.status(400).send('estamos en el error');
  }
});

router.get('/events/:id', async (req,res, next) => {
  try{
    let id = req.params.id;
    let eventId = await Events.findById({ _id: id }).populate('creator');
    res.status(200).send(eventId);
  }
  catch(error){
    res.status(400).send(error);
  }
});

router.post('/events', (req,res,next) => {

  const {name,date, description,image, asistants, location, address} = req.body;

  const newEvents = new Events ({
    name,
    date,
    description,
    image,
    asistants,
    location,
    address
  });  

  newEvents
    .save()
    .then( () => {
      res.status(200).send(newEvents)
    })
    .catch( error => {
      res.status(400).send(error);
    })
});

router.put('/events/:id', async (req,res,next) => {
  let update = await Events.findByIdAndUpdate(req.params.id, {$set:req.body}, function(error,event){
    if(error) return next(error);
    res.status(200).send('Event edited');
  });
});

router.delete('/events/:id', async (req,res,next) => {
  let del = await Events.findByIdAndRemove(req.params.id, err => {
    if(err) return next(err);
    res.status(200).send('Deleted');
  });
});

module.exports = router;

