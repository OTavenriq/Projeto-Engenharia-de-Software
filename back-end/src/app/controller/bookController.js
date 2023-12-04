import BookRepository from '../respositories/bookRepository.js';

class BookController {
    async index(req, res) {
        const books = await BookRepository.findAll();
        res.json(books);
    }
}

export default new BookController();