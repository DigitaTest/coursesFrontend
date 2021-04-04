import { Route, Switch } from "react-router-dom";
<<<<<<< Updated upstream
import Courses from "../../pages/Courses";
import Error from "./../../pages/Error";
import ShowNavbar from "../../pages/Courses";

import Home from "./home";
=======
import Courses from "../../pages/courses";
import Error from "../../pages/Error";
import Home from "./home";
import Team from "../team/team";
import ContactUs from "../contactUs/contactUs";
import Blog from "../blog/blog";
import FAQ from "../../pages/faq/FAQ";
import PrivacyPolicy from "../../pages/privacyPolicy";
import UserProfile from "./../users/userProfile";
import Course from "../course/course";
>>>>>>> Stashed changes
const Index = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
<<<<<<< Updated upstream
        <Route path="/courses">
          <Courses />
        </Route>
=======
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/user">
          <UserProfile />
        </Route>
        <Route path="/FAQ">
          <FAQ />
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route path="/course/:id" children={<Course />}></Route>
>>>>>>> Stashed changes
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default Index;
