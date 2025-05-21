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

        // Rota para exibir o formulário de cadastro
        this.app.get("/cadastro", (req, res) => {
            res.render("Auth/cadastro", {
                error: req.query.error,
                usuario: req.query.usuario || ''
            });
        });

        // Rota para processar o cadastro
        this.app.post("/cadastro", async (req, res) => {
            const { usuario, senha } = req.body;
            
            try {
                // Verifica se o usuário já existe
                const existe = await this.authModel.usuarioExiste(usuario);
                if (existe) {
                    return res.redirect(`/cadastro?error=Usuário já existe&usuario=${encodeURIComponent(usuario)}`);
                }
                
                // Tenta cadastrar o novo usuário
                const cadastrado = await this.authModel.cadastrarUsuario(usuario, senha);
                
                if (cadastrado) {
                    // Cadastro bem-sucedido - redireciona para o login com mensagem de sucesso
                    return res.redirect('/login?success=Cadastro realizado com sucesso! Faça login.');
                } else {
                    return res.redirect('/cadastro?error=Erro ao cadastrar usuário');
                }
            } catch (error) {
                console.error('Erro no cadastro:', error);
                return res.redirect('/cadastro?error=Erro no servidor');
            }
        });
    }
}

module.exports = AuthController;
