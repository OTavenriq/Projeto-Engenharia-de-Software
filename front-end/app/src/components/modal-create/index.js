import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function ModalCreate({ openModalCreate, closeModalCreate }) {
  const [createInputName, setCreateInputName] = useState("");
  const [createInputCPF, setCreateInputCPF] = useState("");
  const [createInputAddress, setCreateInputAddress] = useState(""); // Corrigido o nome da função
  const [createInputPhone, setCreateInputPhone] = useState("");
  const [createInputBornDate, setCreateInputBornDate] = useState("");

  function handleInputName(event) {
    setCreateInputName(event.target.value);
  }

  function handleInputCPF(event) {
    setCreateInputCPF(event.target.value);
  }

  function handleInputAddress(event) {
    setCreateInputAddress(event.target.value);
  }

  function handleInputPhone(event) {
    setCreateInputPhone(event.target.value);
  }

  function handleInputBornDate(event) {
    setCreateInputBornDate(event.target.value);
  }

  async function createCustomer() {
    try {

      if(createInputCPF.length < 11)  {
        Swal.fire({
          title: "Error!",
          text: "CPF deve ter 11 digitos!",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      }

      if(createInputPhone.length < 11)  {
        Swal.fire({
          title: "Error!",
          text: "Telefone deve ter 11 digitos!",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      }

      if (isNaN(createInputCPF || createInputPhone)) {
        Swal.fire({
          title: "Error!",
          text: "Não é permitido letras e caracteres especiais no campo de telefone e CPF!",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      }
      const data = {
        name: createInputName,
        phone: createInputPhone,
        legal_document: createInputCPF,
        adress: createInputAddress,
        born_date: createInputBornDate,
      };
      const request = await axios.post(
        `http://localhost:3000/customers/`,
        data
      );
      closeModalCreate(); 

      Swal.fire({
        title: "Sucess!",
        text: "Cliente Criado com sucesso!",
        icon: "sucess",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "CPF já cadastrado",
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
            <h2>Criar cliente</h2>
            <div className="input-area">
              <div>
                <p>Nome:</p>
                <input
                  className="input"
                  type="text"
                  onChange={handleInputName}
                />
              </div>
              <div>
                <p>CPF:</p>
                <input
                  className="input"
                  type="text"
                  maxLength="11"
                  onChange={handleInputCPF}
                />
              </div>
              <div>
                <p>Endereço</p>
                <input
                  className="input"
                  type="text"
                  onChange={handleInputAddress}
                />
              </div>
              <div>
                <p>Telefone</p>
                <input
                  className="input"
                  type="text"
                  onChange={handleInputPhone}
                  maxLength="11"
                />
              </div>
              <div>
                <p>Data de Nascimento</p>
                <input
                  className="input"
                  type="date"
                  onChange={handleInputBornDate}
                />
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
