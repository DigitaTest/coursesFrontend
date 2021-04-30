import "./index.css";
import Footer from "./components/footer";
import Navbar from "./components/header/navbar";
import Routing from "./components/routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routing />
        <Footer />
      </Router>
    </>
  );
}

export default App;
