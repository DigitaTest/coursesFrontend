import { Form, Button, Card } from "react-bootstrap";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Registruj se</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password: </Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Potvrdi password: </Form.Label>
                  <Form.Control
                    type="email"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <button className="w-100" type="submit">
                  Sign Up
                </button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Već imaš nalog? Prijavi se
          </div>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
