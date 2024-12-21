/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';

export function EditProduct( {selectedItem, setSelectedItem} ) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: selectedItem.name,
    description: selectedItem.description,
    price: selectedItem.price,
    image: selectedItem.image,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (id) => {
    const payload = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      image: formData.image,
    };
  
    console.log("Datos que se envían:", payload); 
  
    axios.put(`http://localhost:3000/products/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Éxito", response);
        handleClose();
        setSelectedItem(payload);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <>
      <button onClick={handleShow} className="add-to-cart">
        Editar
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Editar producto </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción del producto"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio del producto"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL de la imagen del producto"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => handleSubmit(selectedItem.id)}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
