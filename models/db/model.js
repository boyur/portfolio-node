var mongoose = require('../../models/db/connection');

var Blog = mongoose.model('blogs', {
  date: String,
  title: String,
  body: String
});

var Skills = mongoose.model('skills', {
  type: String,
  value: Number
});

module.exports.Blog = Blog;
module.exports.Skills = Skills;