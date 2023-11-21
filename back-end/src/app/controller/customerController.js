import CustomerRepository from '../respositories/customerRepository.js';

class CustomerController {
    async index(req, res) {

        const customer = await CustomerRepository.findAll();
        res.json(customer);
    
    }

    async show(req, res) {

        const { id } = req.params;
        const customer = await CustomerRepository.findById(id);

        if (!customer) return res.status(404).json({ error: 'User not found' });

        res.json(customer);
    }

    async showByName(req, res) {
        const { name } = req.params;
        const customer = await CustomerRepository.findByName(name);

        if (!customer) return res.status(404).json([]);

        res.json(customer);
    }

    async store(req, res) {

        const { name, email, phone, legal_document, adress, born_date } = req.body;

        const customer = await CustomerRepository.create(name, email, phone, legal_document, adress, born_date);
        
        return res.json({name: name, email: email, phone: phone, legal_document: legal_document, adress: adress, born_date: born_date});
    }

    async update(req, res) {

        const { id } = req.params;
        const { name, email, phone, adress } = req.body;
        await CustomerRepository.update(id, name, email, phone, adress);
        
        res.status(200).json({ name:name, email:email, phone:phone, adress:adress });
    }

    async delete(req, res) {
        const { id } = req.params;
        CustomerRepository.delete(id);
        res.sendStatus(204);
    }
}

export default new CustomerController();