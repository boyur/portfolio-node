var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// DB Settings
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_6brrjdzg:7197jc4beof70c2srssk5voj1p@ds011943.mlab.com:11943/portfolio');

// Routes
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var jsonParser = bodyParser.json();

var Blog = mongoose.model('blogs', {
  date: String,
  title: String,
  body: String
});

/* GET blog page. */
app.get('/blog.html', function(req, res, next) {
  Blog.find({}, function (err, posts) {

    res.render('pages/blog', {
      title: 'Блог',
      data: posts
    });

  });
});

app.post('/addBlogPost', jsonParser, function(req, res) {
  var blog = new Blog(req.body);

  blog.save(function(err) {
    if (err) {
      res.send('ошибка');
    } else {
      console.log('add post');
      res.send('ok');
    }
  });
});

/* GET db page. */
app.get('/admin', function(req, res, next) {
  Blog.find({}, function (err, posts) {

    res.render('admin', {
      title: 'Админка',
      data: posts
    });

  });
});

// Delete Post
app.post('/delPost', jsonParser, function(req, res) {

  Blog.findOne({_id: req.body.id}, function (err, post) {

    post.remove(function (err) {

      if (err) {
        console.log('Error deleted!')

      } else {
        console.log('User deleted!')
      }
    })

  });

  console.log(req.body.id);
  res.send('Пост удален');

});

/* GET about page. */
app.post('/posts-list', function(req, res, next) {
  Blog.find({}, function (err, posts) {

    res.render('admin/posts-list', {
      data: posts
    });

  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
