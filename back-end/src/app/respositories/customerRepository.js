import db from '../database/index.js';

class CustomerRepository {

    async findAll() {
        return await db.query(
            'SELECT * FROM customer'
        );
    }

    async findById(id) {
        return await db.query(
            'SELECT * FROM customer WHERE id=?',
            [id]
        );
    }

    async findByCpf(legal_document) {
        return await db.query(
            'SELECT legal_document AS has_legal_document FROM customer WHERE legal_document=?',
            [legal_document]
        );
    }

    async findByName(name) {
        return await db.query(
            `SELECT * FROM customer WHERE name like '%${name}%'`,
        );
    }

    async create(name, phone, legal_document, adress, born_date) {
        return await db.query(
            'INSERT INTO customer(name, phone, legal_document, adress, born_date) VALUES(?, ?, ?, ?, ?)',
            [name, phone, legal_document, adress, born_date]
        );
    }

    async update(id, name, phone="", adress="") {
        return await db.query(
            'UPDATE customer SET name=?, phone=?, adress=? WHERE id=?',
            [name, phone, adress, id]
        );
    }

    async delete(id) {
        return await db.query(
            'DELETE FROM customer WHERE id=?',
            [id]
        );
    }
}

export default new CustomerRepository();