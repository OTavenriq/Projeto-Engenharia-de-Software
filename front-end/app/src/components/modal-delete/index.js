import axios from "axios";
import Swal from "sweetalert2";
import "./modal-delete.css";

export default function ModalDelete({ openModalDelete, closeModalDelete, id }) {
  async function deleteCustumer(id) {
    try {
      const request = await axios.delete(
        `http://localhost:3000/customers/${id}`
      );
      closeModalDelete();

      Swal.fire({
        title: "Sucess!",
        text: "Cliente Deletado com sucesso!",
        icon: "sucess",
        confirmButtonText: "Ok",
      });
    } catch (error) {
    }
  }
  return (
    <>
      {openModalDelete && (
        <div className="overlay" onClick={() => closeModalDelete(false)}>
          <div className="modal-delete" onClick={(e) => e.stopPropagation()}>
            <h2>Deseja excluir o conteúdo?</h2>
            <button className="fechar" onClick={() => closeModalDelete(false)}>
              Não
            </button>
            <button className="confirmar" onClick={() => deleteCustumer(id)}>
              Sim
            </button>
          </div>
        </div>
      )}
    </>
  );
}
