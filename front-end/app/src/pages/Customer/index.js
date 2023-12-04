import Sidebar from "../../components/sidebar";
import Table from "../../components/table";
import axios from "axios";
import { useEffect, useState } from "react";
import "./customer.css";
import ModalCreate from "../../components/modal-create";

export default function Customer() {
  const [customer, setCustomer] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [openModalCreate, setOpenModalCreate] = useState(false);

  useEffect(() => {
    getCustomer();
  }, []);

  async function getCustomer() {
    const request = await axios.get("http://localhost:3000/customers");
    const { data } = request;
    setCustomer(data);
  }

  async function searchCustomers() {
    try {
      const response = await axios.get(
        `http://localhost:3000/customers/search/${searchCustomer}`
      );
      setCustomer(response.data);
    } catch (error) {}
  }

  const handleInputChange = async (e) => {
    setSearchCustomer(e.target.value);
    if (e.target.value.length >= 3) {
      setSearchCustomer(e.target.value);
      await searchCustomers();
      return;
    }
    await getCustomer();
  };

  function toggleModalCreate(item) {
    setOpenModalCreate(!openModalCreate);
  }

  return (
    <div className="">
      <Sidebar />
      <div className="content">
        <div className="main-container">
          <div className="header">
            <h1>Gerenciar Clientes</h1>
            <div className="search-wrapper">
              <input
                className="input"
                type="text"
                placeholder="Busca Cliente"
                value={searchCustomer}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="content-body">
            <Table
              col1="Nome"
              col2="Cpf"
              col3="Endereço"
              col4="Telefone"
              data={customer}
            />
          </div>
          <button className="btn-register" onClick={toggleModalCreate}>
            Cadastrar
          </button>
        </div>
      </div>
      {openModalCreate && (
        <ModalCreate
          openModalCreate={openModalCreate}
          closeModalCreate={toggleModalCreate}
        />
      )}
    </div>
  );
}
