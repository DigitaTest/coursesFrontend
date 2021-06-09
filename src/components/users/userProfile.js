import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/authContext";
import { Link, useHistory } from "react-router-dom";

export function UserProfile() {
  const [error, setError] = useState("");
  // Iz nekog razloga jebenog error ovde imamo :(
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      // Kad se user log-outuje vracam ga na login page
      history.push("/login");
    } catch {
      setError("Odjavljivanje nije uspelo");
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Moj profil</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Ažuriraj profil
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}

export default UserProfile;
