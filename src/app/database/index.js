// db.js
import mysql from 'mysql2/promise'; // Importe a versão 'promise' do mysql2
import dotenv from 'dotenv';

dotenv.config();

class Database {
      constructor() {
        this.connection = mysql.createPool(process.env.CONNECTION_STRING);
      }

    async query(sql, args) {
        try {
            const [results] = await this.connection.query(sql, args);
            return results;
        } catch (error) {
            throw error;
        }
    }
}

// Singleton - Garante que haverá apenas uma instância da conexão
const instance = new Database();
Object.freeze(instance);

export default instance;
