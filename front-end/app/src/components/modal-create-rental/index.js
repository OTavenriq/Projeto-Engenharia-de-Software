import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function ModalCreateRental({ openModalCreate, closeModalCreate }) {

  const [customerOption, setCustomerOption] = useState([]);
  const [bookOption, setBookOption] = useState([]);

  const [inputCustomer, setInputCustomer] = useState("");
  const [inputBook, setInputBook] = useState("");

  useEffect(() => {
    getCustomer();
    getBooks();
  }, []);

  async function getCustomer() {
    const request = await axios.get("http://localhost:3000/customers");
    const { data } = request;
    console.log(data);
    setCustomerOption(data);
  }

  async function getBooks() {
    const request = await axios.get("http://localhost:3000/books");
    const { data } = request;
    setBookOption(data);
  }

  function handleInputCustomer(event) {
    setInputCustomer(event.target.value);
  }

  function handleInputBook(event) {
    setInputBook(event.target.value);
  }

  async function createCustomer() {
    try {
      if (!inputCustomer || !inputBook) {
        Swal.fire({
          title: "Error!",
          text: "Selecione um Cliente e um Livro, por favor!",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      }

      const data = {
        id_customer: inputCustomer,
        id_book: inputBook,
      };

      const request = await axios.post(
        `http://localhost:3000/rentals/`,
        data
      );
      closeModalCreate();

      Swal.fire({
        title: "Sucess!",
        text: "Locação cadastrada com sucesso!",
        icon: "sucess",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Oocrreu algum erro, por favor, contate os administradores!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }

  return (
    <>
      {openModalCreate && (
        <div className="overlay" onClick={closeModalCreate}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Cadastrar Locação</h2>
            <div className="input-area">
              <div>
                <p>Cliente:</p>
                <select className="input" onChange={handleInputCustomer}>
                  <option>Selecione um cliente</option>
                  {customerOption.map(option => {
                    return <option value={option.id}>{option.name}</option>
                  }
                  )}
                </select>
              </div>
              <div>
                <p>Livro:</p>
                <select className="input" onChange={handleInputBook}>
                  <option>Selecione um livro</option>
                  {bookOption.map(option => {
                    return <option value={option.id}>{option.name}</option>
                  }
                  )}
                </select>
              </div>
            </div>
            <button className="fechar" onClick={closeModalCreate}>
              Cancelar
            </button>
            <button className="confirmar" onClick={createCustomer}>
              Confirmar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
