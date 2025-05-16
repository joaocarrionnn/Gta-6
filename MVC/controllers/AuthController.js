


const AuthModel = require("../models/AuthModel");

class AuthController {
    constructor(app) {
        this.app = app;
        this.authRoutes();
    }

    authRoutes() {
        // Rota para exibir o formulário de login
        this.app.get("/login", (req, res) => {
            res.render("Auth/login", { error: null });
        });

        // Rota para processar o login
        this.app.post("/login", (req, res) => {
            const { usuario, senha } = req.body;
            const auth = new AuthModel(usuario, senha);

            if (auth.login()) {
                // Aqui você normalmente criaria uma sessão
                return res.redirect("/");
            } else {
                res.render("Auth/login", { 
                    error: "Credenciais inválidas",
                    usuario // Mantém o usuário digitado no formulário
                });
            }
        });
    }
}

module.exports = AuthController;