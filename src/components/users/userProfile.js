import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function UserProfile() {
  const [error, setError] = useState("");
  // Iz nekog razloga jebenog error ovde imamo :(
  const { logout, currentUser } = useAuth();
  const history = useHistory();

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
          <h2 className="text-center mb-4">Moj Profil</h2>
          {/* U slucaju da nam failuje logout */}
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <div className="row">
            <div className="col text-center">
              <Link
                to="/update-profile"
                className="btn btn-primary w-30 mt-3 text-center"
              >
                {" "}
                Ažuriraj profil{" "}
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Odjavi me
        </Button>
      </div>
    </>
  );
}

export default UserProfile;
