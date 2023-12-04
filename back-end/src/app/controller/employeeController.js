import EmployeeRepository from '../respositories/employeeRepository.js';

class EmployeeController {

    async login(req, res) {

        const { login, password } = req.body;

        if(!login || !password) return res.sendStatus(401);

        const user = await EmployeeRepository.findUser(login, password)

        if(!user.length) return res.sendStatus(404);
        
        return res.sendStatus(200);

    }
}

export default new EmployeeController();