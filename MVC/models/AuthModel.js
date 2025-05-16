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
}

module.exports = AuthModel;