class AuthModel {
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
    }

    login() {
        const usuariosValidos = {
            "Carlos": "carlos@2025",
            "Admin": "admin@123"
        };

        return usuariosValidos[this.usuario] === this.senha;
    }
}

module.exports = AuthModel;