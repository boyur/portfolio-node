var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// DB Settings
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dev:dev@ds061206.mlab.com:61206/portfolio');

module.exports = mongoose;
