import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function NotesNavbar() {
  const { activeUser, onLogout } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            Notes App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {activeUser && (
                <>
                  <Nav.Link to="/notes" as={NavLink}>
                    Notes
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav className="ms-auto">
              {!activeUser && (
                <Nav.Link to="/login" as={NavLink}>
                  Login
                </Nav.Link>
              )}
              {activeUser && (
                <Nav.Link href="#" onClick={onLogout}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NotesNavbar;
