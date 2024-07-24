// src/components/TeamMember.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const TeamMember = ({ id, name, role }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card m-2" style={{ width: '18rem' }} onClick={handleShow}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{role}</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Nome:</strong> {name}</p>
          <p><strong>Papel:</strong> {role}</p>
          <p><strong>ID:</strong> {id}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TeamMember;