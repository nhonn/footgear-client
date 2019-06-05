const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const favicon = require('serve-favicon')
const session = require('express-session')
const passport = require('passport')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

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
    resave: true,
    saveUninitialized: true,
    cookie: {
      path: '/',
      maxAge: 24 * 60 * 60 * 1000
    }
  })
)
app.use(cookieParser())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
app.use(passport.session())
require('./fn/passport')(passport)

const indexRouter = require('./routes/index.route')
const usersRouter = require('./routes/user.route')
const productRouter = require('./routes/product.route')
const categoryRouter = require('./routes/category.route')
const brandRouter = require('./routes/brand.route')
const cartRouter = require('./routes/cart.route')
const orderRouter = require('./routes/order.route')

app.use('/', indexRouter)
app.use('/tai-khoan', usersRouter)
app.use('/san-pham', productRouter)
app.use('/danh-muc', categoryRouter)
app.use('/thuong-hieu', brandRouter)
app.use('/gio-hang', cartRouter)
app.use('/don-hang', orderRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('error404')
})

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
