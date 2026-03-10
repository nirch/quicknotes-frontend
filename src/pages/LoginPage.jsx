import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const { onLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

  async function handleLogin() {
    setIsLoginError(false);
    setIsLoggingIn(true);
    try {
      await onLogin(username, pwd);
    } catch (err) {
      console.log(err);
      setIsLoginError(true);
    } finally {
      setIsLoggingIn(false);
    }
  }

  return (
    <div className="w-50 mx-auto mt-5">
      <h1>Login to Notes App</h1>
      <p>
        or <Link to="/signup">create an account</Link>
      </p>
      {isLoginError && (
        <Alert variant="danger">
          Login error! Incorrect username or password
        </Alert>
      )}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            variant="outline-primary"
            type="button"
            onClick={handleLogin}
            disabled={isLoggingIn}
          >
            Login {isLoggingIn && <Spinner animation="border" size="sm" />}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginPage;
