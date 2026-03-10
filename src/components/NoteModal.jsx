import { Image, Modal } from "react-bootstrap";
import React from "react";

function NoteModal({ show, note, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{note ? note.title : ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{note ? note.text : ""}</Modal.Body>
      {note && note.imageURL && (
        <Modal.Footer>
          <Image fluid src={note.imageURL} />
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default NoteModal;
