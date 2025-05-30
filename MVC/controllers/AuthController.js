// controllers/AuthController.js
const AuthModel = require("../models/AuthModel");

class AuthController {
    constructor(app) {
        this.app = app;
        this.authModel = new AuthModel();
        this.authRoutes();
    }

    authRoutes() {
        // Middleware para verificar autenticação
        this.app.use((req, res, next) => {
            const allowedPaths = ['/login', '/cadastro'];
            if (allowedPaths.includes(req.path) || req.session.usuario) {
                next();
            } else {
                res.redirect('/login');
            }
        });

        // Rota para exibir o formulário de login
        this.app.get("/login", (req, res) => {
            if (req.session.usuario) {
                return res.redirect('/');
            }
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
                    // Credenciais válidas - cria a sessão e redireciona
                    req.session.usuario = usuario;
                    return res.redirect("/");
                } else {
                    // Credenciais inválidas
                    return res.redirect(`/login?error=Credenciais inválidas&usuario=${encodeURIComponent(usuario)}`);
                }
            } catch (error) {
                console.error('Erro no login:', error);
                return res.redirect('/login?error=Erro no servidor');
            }
        });

        // Rota para logout
        this.app.get("/logout", (req, res) => {
            req.session.destroy();
            res.redirect('/login');
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
                const existe = await this.authModel.usuarioExiste(usuario);
                if (existe) {
                    return res.redirect(`/cadastro?error=Usuário já existe&usuario=${encodeURIComponent(usuario)}`);
                }
                
                const cadastrado = await this.authModel.cadastrarUsuario(usuario, senha);
                
                if (cadastrado) {
                    // Após cadastrar, já cria a sessão e redireciona
                    req.session.usuario = usuario;
                    return res.redirect('/');
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