import db from '../database/index.js';

class RentalRepository {

    async findAll() {
        return await db.query(
            'SELECT * FROM rental'
        );
    }

    async findById(id) {
        return await db.query(
            'SELECT * FROM rental WHERE id=?',
            [id]
        );
    }

    async update(id, name, email, phone, adress) {
        return await db.query(
            'UPDATE rental SET name=?, email=?, phone=?, adress=? WHERE id=?',
            [id, name, email, phone, adress]
        );
    }

    async findByDate(date) {
        return await db.query(
            `SELECT * FROM rental WHERE date = ?'`,
            [date]
        );
    }
}

export default new RentalRepository();