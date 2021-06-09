import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/authContext";
import { Link } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const { passReset } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await passReset(emailRef.current.value);
      setMessage("Proverite vaš email!");
    } catch {
      setError("Resetovanje lozinke nije uspelo, pokušajte ponovo.");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Zaboravljena lozinka?</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Resetuj password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Nemaš nalog? <Link to="/signup">Registruj se</Link>
      </div>
    </>
  );
}
