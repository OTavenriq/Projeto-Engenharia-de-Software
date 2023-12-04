import db from '../database/index.js';

class EmployeeRepository {

    async findUser(login, password) {
        return await db.query(
            `SELECT * FROM employee WHERE login = '${login}' AND password = '${password}'`,
        );
    }
}

export default new EmployeeRepository();