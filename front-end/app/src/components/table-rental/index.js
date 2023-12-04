import { useState } from "react";
import axios from "axios";
import "./table.css";
import ModalRental from "../modal-rental";
import ModalDeleteRental from "../modal-delete-rental";

export default function TableRental({ col1, col2, col3, col4, data }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [modalData, setModalData] = useState({});
  console.log(data);
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
              <td>{item.customer}</td>
              <td>{item.book}</td>
              <td>{item.date.split("T")[0]}</td>
              <td>{item.devolution}</td>
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
        <ModalRental
          openModal={openModal}
          closeModal={toggleModal}
          id={modalData.id}
          input1={modalData.customer}
          input2={modalData.book}
          input3={modalData.date.split("T")[0]}
          input4={modalData.devolution}
          input5={modalData.id_book}
        />
      )}
      {openModalDelete && (
        <ModalDeleteRental
          openModalDelete={openModalDelete}
          closeModalDelete={toggleModalDelete}
          id={modalData.id}
          id_book={modalData.id_book}
        />
      )}
    </div>
  );
}
