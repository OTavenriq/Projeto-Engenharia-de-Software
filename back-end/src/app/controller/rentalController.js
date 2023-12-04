import RentalRepository from '../respositories/rentalRepository.js';

class RentalController {
    async index(req, res) {

        const rentals = await RentalRepository.findAll();
        res.json(rentals);
    }

    async show(req, res) {

        const { id } = req.params;
        const rental = await RentalRepository.findById(id);

        if (!rental) return res.status(404).json({ error: 'Rental not found' });

        res.json(customer);
    }

    async showByDate(req, res) {
        const { date } = req.params;
        const rentals = await RentalRepository.findByDate(date);
        if (!rentals) return res.status(404).json([]);
        res.json(rentals);
    }

    async store(req, res) {
        
        const { id_customer, id_book } = req.body;

        const [ { rental_id } ] = await RentalRepository.create(id_customer, id_book);

        const [ rental ]  = await RentalRepository.findById(rental_id);

        return res.json({customer: rental.customer, book: rental.book, rental: rental.date, devolution: rental.devolution});
    }

    async update(req, res) {
        const { id } = req.params;
        const { devolution, id_book } = req.body;
        await RentalRepository.update(id, devolution, id_book);
        
        res.sendStatus(204);
    }

    async delete(req, res) {
        const { id, id_book } = req.params;
        RentalRepository.delete(id, id_book);
        res.sendStatus(204);
    }
}

export default new RentalController();