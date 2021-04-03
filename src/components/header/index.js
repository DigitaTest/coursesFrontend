import Navbar from "./navbar";
import { BrowserRouter as Router } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Router>
        <header id="header-wrapper">
          <Navbar />
          <section id="banner" className="container">
            <p>
              Mi smo <strong>DigitaLab</strong>, grupa mladih ljudi blabla truc
              truc. Test TEST TEST TEST
            </p>
          </section>
        </header>
      </Router>
    </>
  );
};

export default Index;
