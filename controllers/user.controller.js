module.exports = {
  getLoginPage: (req, res) => {
    res.status(200).render("users/login", { title: "Đăng nhập" });
  },

  getRegisterPage: (req, res) => {
    res
      .status(200)
      .render("users/register", { title: "Đăng ký tài khoản mới" });
  },

  getProfilePage: (req, res) => {
    res.status(200).render("users/profile", { title: "Thông tin tài khoản" });
  }
};
