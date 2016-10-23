var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// DB Settings
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/portfolio');

module.exports = mongoose;