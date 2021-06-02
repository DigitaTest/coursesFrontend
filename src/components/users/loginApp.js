import { Container } from "react-bootstrap";
import bc_Image from "../../assets/sgnup_background1.jpg";
import Login from "../../pages/login";
import { AuthProvider } from "../contexts/authContext";

function LoginApp() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${bc_Image})`,
        }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Login />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default LoginApp;
