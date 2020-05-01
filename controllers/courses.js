const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require("../middleware/async");
const Course = require('../models/course');

//@desc  Get Courses
//@route GET /api/v1/courses
//@route GET /api/v1/bootcamps/:bootcampID/courses
//@access Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;

  if(req.params.bootcampId){
      query = Course.find({bootcamp: req.params.bootcampId});

  }else {
      query = Course.find();
  }
  const courses = await query;

  res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
  });
});
