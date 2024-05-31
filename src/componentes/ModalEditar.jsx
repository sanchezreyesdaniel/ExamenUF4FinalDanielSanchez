import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ContextoGlobal } from '../context/GlobalContext';

export function ModalFormEditar() {
    const { setCartas, fetchHistorias } = useContext(ContextoGlobal);
    const [showModal, setShowModal] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [imagen, setImagen] = useState('');

    useEffect(() => {
        handleShow(); // Llama a handleShow cuando el componente se monta
    }, []); // El segundo argumento del useEffect, un array vacío, asegura que solo se ejecute una vez al montar el componente

    const handleClose = () => {
        setShowModal(false);
        // Limpia los campos del formulario al cerrar el modal
        setTitulo('');
        setTexto('');
        setImagen('');
    };

    const handleShow = () => setShowModal(true);

    async function controladorNuevaHistoria() {
        const dataCarta = {
            titulo: titulo,
            texto: texto,
            imagen: imagen
        };

        console.log('Creando nueva historia:', dataCarta);

        try {
            const response = await fetch('https://servidor-json-prueba.vercel.app/cervezas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataCarta),
            });
            if (response.ok) {
                await fetchHistorias();
                handleClose();
            }
        } catch (error) {
            console.error('Error al crear la historia:', error);
        }
    }

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{titulo ? titulo : 'Nuevo Elemento'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitulo">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el título"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formTexto">
                        <Form.Label>Texto</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Ingrese el texto"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formImagen">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la URL de la imagen"
                            value={imagen}
                            onChange={(e) => setImagen(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={controladorNuevaHistoria}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
