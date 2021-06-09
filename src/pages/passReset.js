import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { useAuth } from "../components/contexts/authContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      //Ovim disablujemo signup dugme dok se account kreira, da ne bi doslo do visestrukog kreiranja acc-a. Pogledaj disabled property button-a
      setLoading(true);
      await login(emailRef.current.value);
      //Ukoliko login uspe saljemo korisnika na homepage
      history.push("/");
    } catch {
      setError("Pokušajte ponovo.");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Zaboravljena lozinka?</h2>
          {/* //boostrap verzija pop-up errora: */}
          {error && <Alert variant="danger">{error}</Alert>}
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
