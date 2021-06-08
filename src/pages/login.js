import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { useAuth } from "../components/contexts/authContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, logout, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  console.log(currentUser.email);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      //Ovim disablujemo signup dugme dok se account kreira, da ne bi doslo do visestrukog kreiranja acc-a. Pogledaj disabled property button-a
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
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
          <h2 className="text-center mb-4">Prijavi se</h2>
          {/* //boostrap verzija pop-up errora: */}
          {error && <Alert variant="danger">{error}</Alert>}
          {currentUser.email}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Lozinka: </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <button disabled={loading} className="w-100" type="submit">
              Prijavi se
            </button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Nemaš nalog? <Link to="/signup">Registruj se</Link>
      </div>
    </>
  );
}
