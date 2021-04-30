import { Route, Switch } from "react-router-dom";
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
import SignUp from "../users/signup";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
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
        <Route path="/signup">
          <SignUp />
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
