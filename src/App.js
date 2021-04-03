import "./index.css";
import Footer from "./components/footer/";
import Main from "./components/main/";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
