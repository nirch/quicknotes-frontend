import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteContext from "../contexts/NoteContext";
import Note from "./Note";
import NoteModal from "./NoteModal";

function Notes() {
  const { notes } = useContext(NoteContext);
  const [noteInModal, setNoteInModal] = useState(null);
  return (
    <Container>
      <Row>
        {notes.map((note, i) => (
          <Col md={3} key={i}>
            <Note note={note} onOpenModal={() => setNoteInModal(note)} />
          </Col>
        ))}
      </Row>
      <NoteModal
        show={!!noteInModal}
        note={noteInModal}
        onClose={() => setNoteInModal(null)}
      />
    </Container>
  );
}

export default Notes;
