import { Image, Modal } from "react-bootstrap";
import React from "react";

function NoteModal({ show, note, onClose }) {
  console.log(note);
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{note ? note.title : ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{note ? note.text : ""}</Modal.Body>
      {note && note.image_url && (
        <Modal.Footer>
          <Image fluid src={note.image_url} />
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default NoteModal;
