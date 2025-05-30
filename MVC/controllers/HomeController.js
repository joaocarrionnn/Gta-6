class HomeController {
  constructor(app) {
    this.app = app;
    this.routes();
  }

  routes() {
    this.app.get("/", (req, res) => {
      if (!req.session.usuario) {
        return res.redirect('/login');
      }
      res.render("Home/index", { usuario: req.session.usuario });
    });
  }
}

module.exports = HomeController;