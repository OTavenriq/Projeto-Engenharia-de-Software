import React, { useState } from "react";
import "./modal.css";
import axios from "axios";
import Swal from "sweetalert2";

const Modal = ({
  openModal,
  closeModal,
  id,
  input1,
  input2,
  input3,
  input4,
}) => {
  const [editInputName, setEditnputName] = useState(input1);
  const [editInputAddress, setInputAddress] = useState(input3);
  const [editInputPhone, setEditnputPhone] = useState(input4);

  function handleInputName(event) {
    setEditnputName(event.target.value);
  }
  function handleInputAddress(event) {
    setInputAddress(event.target.value);
  }
  function handleInputPhone(event) {
    setEditnputPhone(event.target.value);
  }

  async function editCustomer() {
    try {
      if (isNaN(editInputPhone)) {
        Swal.fire({
          title: "Error!",
          text: "Não é permitido letras no campo de telefone!",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      }
      const data = {
        name: editInputName,
        phone: editInputPhone,
        adress: editInputAddress,
      };
      const request = await axios.patch(
        `http://localhost:3000/customers/${id}`,
        data
      );
      closeModal();
      Swal.fire({
        title: "Sucess!",
        text: "Cliente editado com sucesso!",
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
            <h2>Editar cliente</h2>
            <div className="input-area" key={id}>
              <div>
                <p>Nome:</p>
                <input
                  className="input"
                  type="text"
                  value={editInputName}
                  onChange={handleInputName}
                />
              </div>
              <div>
                <p>CPF:</p>
                <input
                  className="input"
                  type="number"
                  value={input2}
                  disabled
                />
              </div>
              <div>
                <p>Endereço</p>
                <input
                  className="input"
                  type="text"
                  value={editInputAddress}
                  onChange={handleInputAddress}
                />
              </div>
              <div>
                <p>Telefone</p>
                <input
                  className="input"
                  type="text"
                  value={editInputPhone}
                  onChange={handleInputPhone}
                  maxLength="11"
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

export default Modal;
