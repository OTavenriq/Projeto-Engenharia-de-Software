import customerRepository from '../respositories/customerRepository.js';
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

        const { name, phone, legal_document, adress, born_date } = req.body;

        const has_legal_document  = await customerRepository.findByCpf(legal_document);
        
        if(has_legal_document.length) return res.sendStatus(400);

        const customer = await CustomerRepository.create(name, phone, legal_document, adress, born_date);
                
        return res.json({name: name, phone: phone, legal_document: legal_document, adress: adress});
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, phone, adress } = req.body;

        await CustomerRepository.update(id, name, phone, adress);
        
        res.status(200).json({ name:name, phone:phone, adress:adress });
    }

    async delete(req, res) {
        const { id } = req.params;
        CustomerRepository.delete(id);
        res.sendStatus(204);
    }
}

export default new CustomerController();