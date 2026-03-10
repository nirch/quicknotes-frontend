// The function receives the current state (array of notes)
// and and action:
//  action.type - what operation to preform on the state (add notes, delete note, etc.)
//  action.data - additional data specific for the action type (e.g. the note to add)
// The function return the new state (new notes) after it has been changed
export default function notesReducer(notes, action) {
  switch (action.type) {
    case "SET_NOTES":
      return [...action.data];
    case "ADD_NOTE":
      return [action.data, ...notes];
    case "DELETE_NOTE":
      return notes.filter((note) => note !== action.data);
    default:
      throw new Error();
  }
}
