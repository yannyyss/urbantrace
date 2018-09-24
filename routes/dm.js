const express = require('express');
const router = express.Router();
const DM = require('../models/DM');

router.get('/dm', async (req,res,next) => {
  try{
    let dm = await DM.find();
    res.status(200).send(dm);
  }
  catch (e) {
    res.status(400).send(e);
  }
});

router.get('/dm/:id', async (req,res,next) => {
  try{
    let id = req.params.id;
    let dmid = await DM.findById({_id:id}).populate('creator');
    res.status(200).send(dmid)
  }
  catch (e) {
    res.status(400).send(e);
  }
});

router.post('/dm', (req,res,next) => {

  const {title,message,creator} = req.body;

  const newDM = new DM ({
    title,
    message,
    creator
  });

  newDM
   .save()
   .then( () => {
     res.status(200).send(newDM);
   })
   .catch(e => {
     res.status(400).send(e);
   })
});

router.put('/dm/:id', async (req,res,next) => {
  let update = await DM.findByIdAndUpdate(req.params.id, {$set:req.body}, function (e,dm) {
    if(e) return next(e);
    res.status(200).send('Update');
  });
});

router.delete('/dm/:id', async (req,res,next) => {
  let del = await DM.findByIdAndRemove(req.params.id, e => {
    if(e) return next(e);
    res.status(200).send('Deleted');
  });
});

module.exports = router;