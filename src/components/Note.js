import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import "./Note.css";

function Note({ note, onOpenModal }) {
  const { dispatchNotes } = useContext(NoteContext);
  let options = {
    dateStyle: "medium",
    timeStyle: "medium",
  };
  const dateFormatted = note.date.toLocaleString("en-IL", options);

  function deleteNote(e) {
    if (window.confirm("Are you sure you want to delete your note?")) {
      dispatchNotes({ type: "DELETE_NOTE", data: note });
    }
    e.stopPropagation();
  }

  return (
    <div className="c-note p-2 my-2" onClick={onOpenModal}>
      <div className="header">
        <div className="date">{dateFormatted}</div>
        <div className="delete" onClick={deleteNote}>
          &times;
        </div>
      </div>
      <div className="body">
        {note.title ? <h2>{note.title}</h2> : null}
        <p>{note.text}</p>
      </div>
    </div>
  );
}

export default Note;
