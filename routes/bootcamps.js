 const express = require('express');
 const{ 
     getBootcamps,
     getBootcamp,
      createBootcamp, 
      updateBootcamp,
      deleteBootcamp,
      getBootcampsInRadius
  } = require('../controllers/bootcamps');

  //include other resource routers

  const courseRouter = require('./courses');
 const router = express.Router();
 

 //Re-Route into other resource routes
 router.use('/:bootcampId/courses', courseRouter);

 router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
 
 router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

 router
   .route('/:id')
   .get(getBootcamp)
   .put(updateBootcamp)
   .delete(deleteBootcamp)
  module.exports = router;