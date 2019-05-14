module.exports = {
  getGenre: (req, res) => {
    res.status(200).render("genre/index");
  }
};
