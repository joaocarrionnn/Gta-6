// index.js
const express = require("express");
const session = require('express-session');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require("path");
const HomeController = require("./mvc/controllers/HomeController");
const ChatController = require("./mvc/controllers/ChatController");
const AuthController = require("./mvc/controllers/AuthController"); 

class Server {
  constructor() {
    this.app = express();
    this.porta = process.env.PORT || 4091;
    this.genAI = new GoogleGenerativeAI("AIzaSyADWvC_T82w9GtoVtdTTcMD5fBSCIAoVbU");

    this.configMiddleware();
    this.start();
    this.on();
  }

  start() {
    new HomeController(this.app);
    new ChatController(this.app, this.genAI);
    new AuthController(this.app); 
  }

  configMiddleware() {
    // Configuração básica de sessão
    this.app.use(session({
      secret: 'sua_chave_secreta_aqui',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }
    }));

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.join(__dirname, "mvc", "views", "public")));
    this.app.use(express.json());
    this.app.set("view engine", "ejs");
    this.app.set("views", path.join(__dirname, "mvc", "views"));
  }

  on() {
    this.app.listen(this.porta, () => {
      console.log(`Servidor rodando em http://localhost:${this.porta}`);
    });
  }
}

new Server();