var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');// routes/index.js
var usersRouter = require('./routes/users');// routes/user.js

/*paso 1 */
var contactoRouter = require('./routes/contacto'); /*routes/contacto.js */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contacto', contactoRouter);

/*ruta1 */
app.get('/prueba', function (req,res){
  res.send('Hola soy la pagina de prueba')
})

/*ruta2 */
app.get('/nosotros', function (req,res){
  res.send('Hola soy la pagina nosotros')
})

/*ruta3 */
app.get('/destacados', function (req,res){
  res.send('Hola soy la pagina destacados')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
