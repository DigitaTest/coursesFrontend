import "./index.css";
import Footer from "./components/footer";
import Routing from "./components/routing";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/contexts/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routing />
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
