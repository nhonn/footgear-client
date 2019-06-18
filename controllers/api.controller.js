const User = require('../models/user.model')
const Hash = require('../models/hash.model')
const nodeMailer = require('nodemailer');
const bcrypt = require('bcrypt')
require('dotenv').config()

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = {
  signup: (req, res) => {
    const newUser = new User({
      userID: Date.now(),
      email: req.body.email,
      fullname: req.body.name,
      password: req.body.password
    })

    newUser.save((err, newUser) => {
      if (err) req.flash('error', 'Không thể lưu tài khoản')
      else res.status(200).redirect('/tai-khoan/dang-nhap')
    })

    const newHash = new Hash({
      userID: newUser.userID
    })
    newHash.save()

    const options = {
      from: 'trongnhon781@gmail.com',
      to: newUser.email,
      subject: 'Xác nhận tài khoản.',
      html: process.env.HOST + '/api/active?id=' + newHash.userID + '&code=' + newHash._id
    }
    transporter.sendMail(options, function (err, info) {
      if (err) console.log(err)
    });
  },

  signout: (req, res) => {
    req.logout()
    req.session.cart = null
    res.redirect('/')
  },

  updateProfile: (req, res) => {
    let user = req.user
    user.fullname = req.body.name
    user.phone = req.body.phone
    user.gender = req.body.gender
    user.save()
    res.status(200).redirect('/tai-khoan')
  },

  updatePassword: async (req, res) => {
    let user = req.user
    let tmp = await bcrypt.compare(req.body.oldpass, user.password)
    if (tmp) {
      user.password = req.body.newpass
      user.save()
    } else {
      req.flash('error', 'Sai mật khẩu.')
    }
    res.redirect('/tai-khoan')
  },

  reset: async (req, res) => {
    const tmp = await User.reset(req.query.id, req.query.code)
    if (tmp) {
      req.flash('success', 'Reset mật khẩu thành công. Mặc định: 00000000')
      res.redirect('/tai-khoan')
    } else res.redirect('/tai-khoan')
  },

  active: async (req, res) => {
    const tmp = await User.active(req.query.id, req.query.code)
    if (tmp) {
      req.flash('success', 'Kích hoạt tài khoản thành công')
      res.redirect('/tai-khoan')
    } res.redirect('/tai-khoan')
  },

  resetPassword: async (req, res) => {
    const email = req.query.email;
    console.log(email)
    const user = await User.findOne({ email })
    console.log(user)
    if (user == null || user === undefined) return;
    const hash = new Hash({
      userID: user.userID
    })
    hash.save()
    const options = {
      from: 'trongnhon781@gmail.com',
      to: email,
      subject: 'Khôi phục lại mật khẩu',
      html: process.env.HOST + '/api/reset?id=' + hash.userID + '&code=' + hash._id
    }
    transporter.sendMail(options, function (err, info) {
      if (err) console.log(err)
      console.log(info)
    });
  },

  activeAccount: async (req, res) => {
    const email = req.query.email;
    const user = await User.findOne({ email })
    if (user == null || user === undefined) return;
    const hash = new Hash({
      userID: user.userID
    })
    hash.save()
    const options = {
      from: 'trongnhon781@gmail.com',
      to: email,
      subject: 'Khôi phục lại mật khẩu',
      html: process.env.HOST + '/api/active?id=' + hash.userID + '&code=' + hash._id
    }
    transporter.sendMail(options, function (err, info) {
      if (err) console.log(err)
      console.log(info)
    });
  }
}
