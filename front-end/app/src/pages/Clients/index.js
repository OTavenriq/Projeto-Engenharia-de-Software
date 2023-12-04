import Sidebar from "../../components/sidebar";
import Table from "../../components/table";

export default function Clients() {
  return (
    <div className="">
      <Sidebar />
      <div className="content">
        <div className="main-container">
          <div className="header">
            <h1>Gerenciar Locações</h1>
            <div className="search-wrapper">
              <input type="date" className="input-data-search" />
              <input
                type="text"
                placeholder="Busca Cliente"
                className="input-text-search"
              />
            </div>
          </div>
          <div className="content-body">
            {/* <Table
              coluna1="Nome"
              coluna2="Cpf"
              coluna3="Endereço"
              coluna4="Telefone"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
