import "./index.css";
import Footer from "./components/footer/";
import Navbar from "./components/header/navbar";
import Main from "./components/main/";
import { BrowserRouter as Router } from "react-router-dom";
<script src="lorem-js/lorem.js"></script>;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
