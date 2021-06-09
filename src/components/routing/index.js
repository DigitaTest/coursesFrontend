import { Route, Switch } from "react-router-dom";
import Navbar from "../header/navbar";
import Error from "../../pages/Error";
import Home from "../../pages/home";
import Team from "../team/team";
import FAQ from "../../pages/FAQ";
import Blog from "../../pages/blog";
import PrivacyPolicy from "../../pages/privacyPolicy";
import UserProfile from "../users/userProfile";
import Courses from "../../pages/courses";
import Course from "../course/course";
import SignUp from "../../components/users/signup";
import Login from "../../components/users/login";
import PrivateRoute from "../routing/privateRoute";
import PassReset from "../../components/users/passReset";
import UpdateProfile from "../../components/users/updateProfile";

const Routing = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/user" component={UserProfile} />
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/courses">
          <Navbar />
          <Courses />
        </Route>
        <Route path="/team">
          <Navbar />
          <Team />
        </Route>
        <Route path="/blog">
          <Navbar />
          <Blog />
        </Route>
        <Route path="/pass-reset">
          <PassReset />
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
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <Route path="/course/:id">
          <Navbar />
          <Course />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default Routing;
