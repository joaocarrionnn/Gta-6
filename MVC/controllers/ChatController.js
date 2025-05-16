class ChatController {
  constructor(app, genAI) {
    this.app = app;
    this.genAI = genAI;
    this.routes();
  }

  routes() {
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

        const response = await result.response;
        const reply = response.text();

        res.json({ reply });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }
}

module.exports = ChatController;