import React, { useEffect, useReducer } from "react";
import NewNote from "../components/NewNote";
import Notes from "../components/Notes";
import NoteContext from "../contexts/NoteContext";
import useAuth from "../hooks/useAuth";
import notesReducer from "../reducers/notesReducer";
import { fetchNotes } from "../services/server";

function NotesPage(props) {
  const { activeUser } = useAuth();
  const [notes, dispatchNotes] = useReducer(notesReducer, []);

  useEffect(() => {
    async function loadData() {
      const notes = await fetchNotes(activeUser);
      dispatchNotes({ type: "SET_NOTES", data: notes });
    }
    loadData();
  }, [activeUser]);

  return (
    <div>
      <NoteContext.Provider value={{ notes, dispatchNotes }}>
        <div className="App">
          <NewNote />
          <Notes />
        </div>
      </NoteContext.Provider>
    </div>
  );
}

export default NotesPage;
