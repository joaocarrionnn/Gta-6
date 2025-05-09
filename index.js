const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.porta = process.env.PORT || 4091;
    this.genAI = new GoogleGenerativeAI("AIzaSyADWvC_T82w9GtoVtdTTcMD5fBSCIAoVbU"); 

    // Middleware para parsear JSON
    this.app.use(express.json());

    this.configurarViews();
    this.routes();
    this.on();
  } 

  configurarViews() {
    // Define o diretório de views (caminho absoluto)
    this.app.set("views", path.join(__dirname, "mvc", "views"));
    
    // Define EJS como a view engine
    this.app.set("view engine", "ejs");
    
    // Middleware para arquivos estáticos (CSS, JS, imagens)
    this.app.use(express.static(path.join(__dirname, "MVC/views/public")));
  }

  routes() {
    // Rota principal que renderiza o index.ejs
    this.app.get("/", (req, res) => {
      res.render("index"); // Não precisa da extensão .ejs
    });
  }

  on() {
    this.app.listen(this.porta, () => {
      console.log(`Servidor rodando em http://localhost:${this.porta}`);
    });
  }
  

  routes() {
    
    // Rota principal
    this.app.get("/", (req, res) => {
      res.render("index");
    });

    // Rota do chatbot
    this.app.post("/chat", async (req, res) => {
      try {
        const { message } = req.body;
        if (!message) throw new Error("Mensagem vazia");

        const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent({
          contents: [{
            role: "user",
            parts: [{ text: `Responda como um especialista de GTA 6, e responda em uma única frase de até 10 palavras: ${message}` }]
          }]
        });

        const response = await result.response
        const reply = response.text()

        res.json({reply})
      } catch (error) {}
    });
  }
}

new Server();
