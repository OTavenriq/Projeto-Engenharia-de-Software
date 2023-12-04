import axios from "axios";
import { useEffect, useState } from "react";

export default function CustomerBody() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCustomer();
    }, []);

    async function getCustomer() {
        const request = await axios.get(
            'http://localhost:3000/customers',
        )
        const { data } = request;
        setData(data);
    }

    return (
        <tbody className='customers-body'>

            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.legal_document}</td>
                    <td>{item.born_date}</td>
                    <td>{item.adress}</td>
                    <td>{item.phone}</td>
                    <td><button>Editar</button></td>
                    <td><button>Deletar</button></td>
                </tr>
            ))}
        </tbody>
    )

}