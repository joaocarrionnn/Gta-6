// controllers/AuthController.js
const AuthModel = require("../models/AuthModel");

class AuthController {
    constructor(app) {
        this.app = app;
        this.authModel = new AuthModel();
        this.authRoutes();
    }

    authRoutes() {
        // Rota para exibir o formulário de login
        this.app.get("/login", (req, res) => {
            res.render("Auth/login", { 
                error: req.query.error,
                usuario: req.query.usuario || ''
            });
        });

        // Rota para processar o login
        this.app.post("/login", async (req, res) => {
            const { usuario, senha } = req.body;
            
            try {
                const credenciaisValidas = await this.authModel.verificarCredenciais(usuario, senha);
                
                if (credenciaisValidas) {
                    // Credenciais válidas - redireciona para a página principal
                    return res.redirect("/");
                } else {
                    // Credenciais inválidas - volta para o login com mensagem de erro
                    return res.redirect(`/login?error=Credenciais inválidas&usuario=${encodeURIComponent(usuario)}`);
                }
            } catch (error) {
                console.error('Erro no login:', error);
                return res.redirect('/login?error=Erro no servidor');
            }
        });
    }
}

module.exports = AuthController;