import React, { useState } from "react";
import { ModalFormEditar } from "./ModalEditar";

export function Card({ id, titulo, texto, imagen }) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ id, titulo, texto, imagen });

  const handleEdit = () => {
    setModalData({ id, titulo, texto, imagen });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div id={id} className="card" style={{ width: "18rem" }}>
        <img src={imagen} alt="" />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{texto}</p>
          <button onClick={handleEdit} className="btn btn-primary">
            Editar
          </button>
          <a href="#" className="btn btn-danger ml-2">
            Eliminar
          </a>
        </div>
      </div>
      {showModal && (
        <ModalFormEditar
          show={showModal}
          handleClose={handleCloseModal}
          initialData={modalData}
        />
      )}
    </div>
  );
}
