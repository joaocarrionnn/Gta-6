// models/AuthModel.js
const mysql = require('mysql2/promise');

class AuthModel {
    constructor() {
        this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            port: 3306,
            database: 'sistema_login',
            waitForConnections: true,
            connectionLimit: 10
        });
    }

    async verificarCredenciais(usuario, senha) {
        try {
            const [rows] = await this.pool.execute(
                'SELECT id_usuario FROM login WHERE usuario = ? AND senha = ?',
                [usuario, senha]
            );
            return rows.length > 0;
        } catch (error) {
            console.error('Erro ao verificar credenciais:', error);
            return false;
        }
    }

    async cadastrarUsuario(usuario, senha) {
        try {
            const [result] = await this.pool.execute(
                'INSERT INTO login (usuario, senha) VALUES (?, ?)',
                [usuario, senha]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            return false;
        }
    }

    async usuarioExiste(usuario) {
        try {
            const [rows] = await this.pool.execute(
                'SELECT id_usuario FROM login WHERE usuario = ?',
                [usuario]
            );
            return rows.length > 0;
        } catch (error) {
            console.error('Erro ao verificar usuário:', error);
            return false;
        }
    }
}

module.exports = AuthModel;
