module.exports = {
  getLoginPage: (req, res) => {
    res.status(200).render("user/login", { title: "Đăng nhập" });
  },

  getRegisterPage: (req, res) => {
    res.status(200).render("user/register", { title: "Đăng ký tài khoản mới" });
  },

  getProfilePage: (req, res) => {
    res.status(200).render("user/profile", { title: "Thông tin tài khoản" });
  }
};
