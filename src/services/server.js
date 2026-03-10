import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URI
    ? process.env.REACT_APP_SERVER_URI
    : "http://localhost:3000",
  withCredentials: true
});

function setAuthHeader(token) {
  // api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

async function login(username, password) {
  const response = await api.post("/auth/login", { email: username, password });
  return response.data;
}

async function fetchNotes() {
  const response = await api.get("/notes");
  return serverNotes2AppNotes(response.data);
}

async function addNote(note) {
  let formData = new FormData();
  formData.append("title", note.title);
  formData.append("text", note.text);
  note.image && formData.append("image", note.image, note.image.name);
  const response = await api.post("/notes", formData);
  return serverNote2AppNote(response.data);
}

export { login, fetchNotes, setAuthHeader, addNote };

function serverNotes2AppNotes(notes) {
  return notes.map((note) => serverNote2AppNote(note));
}

function serverNote2AppNote(note) {
  return { ...note, date: new Date(note.date) };
}
