import { Route, Switch } from "react-router-dom";
import Navbar from "../header/navbar";
import Error from "../../pages/Error";
import Home from "../../pages/home";
import Team from "../team/team";
import ContactUs from "../../pages/contactUs";
import FAQ from "../../pages/FAQ";
import Blog from "../../pages/blog";
import PrivacyPolicy from "../../pages/privacyPolicy";
import UserProfile from "../users/userProfile";
import Courses from "../../pages/courses";
import Course from "../course/course";
import SignUpApp from "../users/signupApp";
import LoginApp from "../users/loginApp";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/courses">
          <Navbar />
          <Courses />
        </Route>
        <Route path="/contact">
          <Navbar />
          <ContactUs />
        </Route>
        <Route path="/team">
          <Navbar />
          <Team />
        </Route>
        <Route path="/blog">
          <Navbar />
          <Blog />
        </Route>
        <Route path="/user">
          <Navbar />
          <UserProfile />
        </Route>
        <Route path="/FAQ">
          <Navbar />
          <FAQ />
        </Route>
        <Route path="/privacy">
          <Navbar />
          <PrivacyPolicy />
        </Route>
        <Route path="/signup">
          <SignUpApp />
        </Route>
        <Route exact path="/login">
          <LoginApp />
        </Route>
        <Route path="/course/:id" children={<Course />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default Routing;
