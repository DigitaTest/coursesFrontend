import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/authContext";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Vaše lozinke moraju biti identične");
    }
    try {
      setError("");
      //Ovim disablujemo signup dugme dok se account kreira, da ne bi doslo do visestrukog kreiranja acc-a. Pogledaj disabled property button-a
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Kreiranje account-a nije uspelo.");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Registruj se</h2>
          {/* //boostrap verzija pop-up errora: */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Lozinka: </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Potvrdi lozinku: </Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Već imaš nalog? <Link to="/login">Prijavi se</Link>
      </div>
    </>
  );
}
export default SignUp;
