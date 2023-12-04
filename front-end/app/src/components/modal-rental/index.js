import React, { useState } from "react";
import "./modal.css";
import axios from "axios";
import Swal from "sweetalert2";

const ModalRental = ({
  openModal,
  closeModal,
  id,
  input1,
  input2,
  input3,
  input4,
  input5,
}) => {
  const [InputDevolutionDate, setInputDevolutionDate] = useState(input4);
  console.log("input1", input1);
  console.log(input2);
  console.log(input3);
  console.log(input4);
  function handleInputDevolutionDate(event) {
    setInputDevolutionDate(event.target.value);
  }

  async function editCustomer() {
    try {
      const data = {
        devolution: InputDevolutionDate,
        id_book: input5
      };
      const request = await axios.patch(
        `http://localhost:3000/rentals/${id}`,
        data
      );
      closeModal();
      Swal.fire({
        title: "Sucess!",
        text: "Locação editada com sucesso!",
        icon: "sucess",
        confirmButtonText: "Ok",
      });
    } catch (error) {}
  }

  return (
    <>
      {openModal && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Editar locação</h2>
            <div className="input-area" key={id}>
              <div>
                <p>Nome:</p>
                <input
                  className="input"
                  type="text"
                  defaultValue={input1}
                  disabled
                />
              </div>
              <div>
                <p> Livro:</p>
                <input
                  className="input"
                  type="text"
                  defaultValue={input2}
                  disabled
                />
              </div>
              <div>
                <p>Data Locação</p>
                <input
                  className="input"
                  type="date"
                  defaultValue={input3}
                  disabled
                />
              </div>
              <div>
                <p>Data Devolução</p>
                <input
                  className="input"
                  type="date"
                  value={InputDevolutionDate}
                  min={input3}
                  onChange={handleInputDevolutionDate}
                />
              </div>
            </div>
            <button className="fechar" onClick={closeModal}>
              Cancelar
            </button>
            <button className="confirmar" onClick={editCustomer}>
              Cofirmar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalRental;
