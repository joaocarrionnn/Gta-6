class HomeController {
  constructor(app) {
    this.app = app;
    this.routes();
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.render("Home/index"); // Assumindo que seu index.ejs está em mvc/views/Home/
    });
  }
}

module.exports = HomeController;