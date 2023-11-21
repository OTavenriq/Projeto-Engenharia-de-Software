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

    async findByName(name) {
        return await db.query(
            'SELECT * FROM customer WHERE name like %?%',
            [name]
        );
    }

    async create(name, email, phone, legal_document, adress, born_date) {
        return await db.query(
            'INSERT INTO customer(name, email, phone, legal_document, adress, born_date) VALUES(?, ?, ?, ?, ?, ?)',
            [name, email, phone, legal_document, adress, born_date]
        );
    }

    async update(id, name, email, phone, adress) {
        return await db.query(
            'UPDATE customer SET name=?, email=?, phone=?, adress=? WHERE id=?',
            [id, name, email, phone, adress]
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