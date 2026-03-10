import React, { useContext, useRef, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import NoteContext from "../contexts/NoteContext";
import { addNote } from "../services/server";
import "./NewNote.css";

function NewNote() {
  const { dispatchNotes } = useContext(NoteContext);
  const [newNoteText, setNewNoteText] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const fileRef = useRef();

  async function handleAddNote() {
    const newNote = await addNote({
      text: newNoteText,
      title: newNoteTitle,
      image: fileRef.current.files[0],
    });
    dispatchNotes({
      type: "ADD_NOTE",
      data: newNote,
    });
    setNewNoteText("");
    setNewNoteTitle("");
    fileRef.current.value = null;
  }

  // const textareaRef = useRef();
  // useEffect(() => {
  //   textareaRef.current.style.height = "inherit";
  //   textareaRef.current.style.height = `${Math.max(
  //     textareaRef.current.scrollHeight,
  //     100
  //   )}px`;
  // }, [newNoteText]);

  function handleTextareaChange(e) {
    setNewNoteText(e.target.value);
    e.target.style.height = "inherit";
    e.target.style.height = `${Math.max(e.target.scrollHeight, 100)}px`;
  }

  return (
    <Form className="c-new-note">
      <FloatingLabel
        controlId="floatingPassword"
        label="Title"
        className="my-2"
      >
        <Form.Control
          type="text"
          placeholder="Title"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Your note"
        className="mb-3"
      >
        <Form.Control
          // ref={textareaRef}
          as="textarea"
          placeholder="Your note"
          value={newNoteText}
          onChange={handleTextareaChange}
        />
      </FloatingLabel>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control ref={fileRef} type="file" accept="image/*" />
      </Form.Group>
      <Button
        disabled={!!!newNoteText}
        variant="outline-primary"
        onClick={handleAddNote}
      >
        Add
      </Button>
    </Form>
  );
}

export default NewNote;
