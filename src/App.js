import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/AuthProvider";
import NotesNavbar from "./components/NotesNavbar";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotesPage from "./pages/NotesPage";

function App() {
  return (
    <AuthProvider>
      <NotesNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <NotesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
