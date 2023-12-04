import db from '../database/index.js';

class BookRepository {

    async findAll() {
        return await db.query(
            'SELECT id, name FROM book WHERE available > 0'
        );
    }

    async update(id, sum=true) {
        const available = sum ? 'available = available + 1' : 'available = available - 1'; 
        return await db.query(
            `UPDATE book SET ${available} WHERE id=?`,
            [id]
        );
    }

}

export default new BookRepository();