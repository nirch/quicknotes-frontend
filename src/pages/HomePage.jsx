import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <Container className="mt-5">
      <h1 className="display-1">Welcome to Notes App!</h1>
      <p>
        <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to
        start using the app.
      </p>
    </Container>
  );
}

export default HomePage;
