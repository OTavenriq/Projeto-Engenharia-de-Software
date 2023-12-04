import { useState } from "react";
import axios from "axios";
import "./table.css";
import Modal from "../modal";
import ModalDelete from "../modal-delete";

export default function Table({ col1, col2, col3, col4, data }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [modalData, setModalData] = useState({});

  function toggleModal(item) {
    setModalData(item);
    setOpenModal(!openModal);
  }

  function toggleModalDelete(item) {
    setModalData(item);
    setOpenModalDelete(!openModalDelete);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{col1}</th>
            <th>{col2}</th>
            <th>{col3}</th>
            <th>{col4}</th>
            <th className="button-column">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.legal_document}</td>
              <td>{item.adress}</td>
              <td>{item.phone}</td>
              <td>
                <button className="btn-edit" onClick={() => toggleModal(item)}>
                  Editar
                </button>
                <button
                  className="btn-delete"
                  onClick={() => toggleModalDelete(item)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && (
        <Modal
          openModal={openModal}
          closeModal={toggleModal}
          id={modalData.id}
          input1={modalData.name}
          input2={modalData.legal_document}
          input3={modalData.adress}
          input4={modalData.phone}
        />
      )}
      {openModalDelete && (
        <ModalDelete
          openModalDelete={openModalDelete}
          closeModalDelete={toggleModalDelete}
          id={modalData.id}
        />
      )}
    </div>
  );
}
