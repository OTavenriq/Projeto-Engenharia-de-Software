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

    async update(req, res) {
        console.log(req.body);
        return res.json(req.body)
        // const { id, name, email, phone, adress } = req.body;
        // let customer = await CustomerRepository.findById(id);
        
        // if (!customer) return res.status(404).json({ error: 'User not found' });

        // await CustomerRepository(id, name, email, phone, adress);

        // res.sendStatus(204);

    }   
}

export default new CustomerController();