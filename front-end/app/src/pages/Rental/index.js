import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar";
import TableRental from "../../components/table-rental";
import ModalCreateRental from "../../components/modal-create-rental";


export default function Rental() {	
	const [rentals, setRentals] = useState([]);
	const [date, setDate] = useState([]);
	const [searchCustomer, setSearchCustomer] = useState("");
	const [openModalCreate, setOpenModalCreate] = useState(false);

	useEffect(() => {
		getRentals();
	}, []);

	async function getRentals() {
		const request = await axios.get("http://localhost:3000/rentals");
		const { data } = request;
		setRentals(data);
		console.log(rentals);
	}

	function toggleModalCreate(item) {
		setOpenModalCreate(!openModalCreate);
	  }

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
						<TableRental
							col1="Livro"
							col2="Cliente"
							col3="Data Locação"
							col4="Data Devolução"
							data={rentals}
						/>
					</div>
					<button className="btn-register" onClick={toggleModalCreate}>
						Cadastrar
					</button>
					{openModalCreate && (
						<ModalCreateRental
							openModalCreate={openModalCreate}
							closeModalCreate={toggleModalCreate}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
