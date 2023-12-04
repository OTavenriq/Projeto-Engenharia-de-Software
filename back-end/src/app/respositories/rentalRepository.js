import db from '../database/index.js';
import BookRepository from './bookRepository.js';

class RentalRepository {

    async findAll() {
        return await db.query(
            `SELECT 
                rental.id,
                customer.name AS customer,
                customer.id AS id_customer,
                book.name AS book,
                book.id AS id_book,
                CONVERT(rental.rental_date, date) AS date,
                IFNULL(rental.devolution_date, '--') AS devolution
             FROM customer_and_book AS rental
             INNER JOIN customer
             ON customer.id = rental.id_customer 
             INNER JOIN book
             ON book.id = rental.id_book
            `
        );
    }

    async findById(id) {
        return await db.query(
            `SELECT 
                rental.id,
                customer.name AS customer,
                book.id AS book,
                rental.rental_date AS date,
                IFNULL(rental.devolution_date, '--') AS devolution
             FROM customer_and_book AS rental
             INNER JOIN customer
             ON customer.id = rental.id_customer 
             INNER JOIN book
             ON book.id = rental.id_book
             WHERE rental.id=${id}
            `
        );
    }

    async findByDate(date) {
        return await db.query(
            'SELECT * FROM customer_and_book WHERE rental_date >= ?',
            [date]
        );
    }

    async create(id_customer, id_book) {
        await BookRepository.update(id_book, false);
        await db.query(
            'INSERT INTO customer_and_book(id_customer, id_book) VALUES(?, ?)',
            [id_customer, id_book]
        );
        return await db.query(
            'SELECT LAST_INSERT_ID() as rental_id'
        );

    }

    async update(id, devolution_date, id_book) {
        await BookRepository.update(id_book);
        return await db.query(
            'UPDATE customer_and_book SET devolution_date=? WHERE id=?',
            [devolution_date, id]
        );
    }

    async delete(id, id_book) {
        await BookRepository.update(id_book);
        return await db.query(
            'DELETE FROM customer_and_book WHERE id=?',
            [id]
        );
    }


}

export default new RentalRepository();