const User = require('../models/user.model')
const nodeMailer = require('nodemailer');
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
      if (err) console.log(err)
      else res.status(200).redirect('/tai-khoan/dang-nhap')
    })
  },

  signout: (req, res) => {
    req.logout()
    res.redirect('/')
  },

  update: async (req, res) => {
    let user = req.user
    if (req.query.oldPass || req.query.newPass || req.query.rePass) {
      if (User.verify(user.email, req.query.oldPass)) {
        user.fullname = req.query.name
        user.gender = req.query.gender === 'male' ? 0 : 1
        user.password = req.query.newPass
        user.phone = req.query.phone
        user.save(() => res.status(200).json('success'))
      } else res.status(304).json('fail')
    } else {
      user.fullname = req.query.name
      user.gender = req.query.gender === 'male' ? 0 : 1
      user.phone = req.query.phone
      user.save(() => res.status(200).json('success'))
    }
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
