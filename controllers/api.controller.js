const User = require('../models/user.model')
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
    console.log(tmp)
    if (tmp) {
      user.password = req.body.newpass
      user.save()
    } else {
      req.flash('error', 'Sai mật khẩu.')
    }
    res.redirect('/tai-khoan')
  },

  reset: (req, res) => {
    const email = req.query.email;
    const options = {
      from: 'trongnhon781@gmail.com',
      to: email,
      subject: 'Khôi phục lại mật khẩu',
      html: '<p>link</p>'
    }
    transporter.sendMail(options, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info);
    });
  }
}
