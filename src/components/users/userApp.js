import { Container } from "react-bootstrap";
import bc_Image from "../../assets/sgnup_background1.jpg";
import UserProfile from "../../components/users/userProfile";
import { AuthProvider } from "../contexts/authContext";

function UserApp() {
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
          <UserProfile />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default UserApp;
