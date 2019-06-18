const express = require('express')
const path = require('path')
const logger = require('morgan')
const favicon = require('serve-favicon')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.set('trust proxy', 1)
app.use(logger('dev'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
)
app.use(
  session({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60
    })
  })
)
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
require('./fn/passport')(passport)
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/index.route')
const usersRouter = require('./routes/user.route')
const productRouter = require('./routes/product.route')
const brandRouter = require('./routes/brand.route')
const cartRouter = require('./routes/cart.route')
const orderRouter = require('./routes/order.route')
const apiRouter = require('./routes/api.router')

app.use('*', function (req, res, next) {
  if (req.user) {
    req.app.locals.user = req.user
  }
  else {
    req.app.locals.user = null
  }
  next()
})

app.use('/', indexRouter)
app.use('/tai-khoan', usersRouter)
app.use('/san-pham', productRouter)
app.use('/thuong-hieu', brandRouter)
app.use('/gio-hang', cartRouter)
app.use('/don-hang', orderRouter)
app.use('/api', apiRouter)

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  if (err.status === 404) {
    res.status(404).render('error404', {
      title: 'Trang bạn tìm kiếm không tồn tại'
    })
  } else {
    res.status(err.status || 500)
    res.render('error')
  }
})

module.exports = app
