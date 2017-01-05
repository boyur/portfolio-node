var mongoose = require('../../models/db/connection');

var Blog = mongoose.model('blogs', {
  date: String,
  title: String,
  body: String
});

var Skills = mongoose.model('skills', {
  name: String,
  type: String,
  value: Number
});

var Works = mongoose.model('works', {
  title: String,
  technology: String,
  link: String,
  file: String
});

module.exports.Blog = Blog;
module.exports.Skills = Skills;
module.exports.Works = Works;