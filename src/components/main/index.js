import { Route, Switch } from "react-router-dom";
import Courses from "../../pages/Courses";
import Error from "./../../pages/Error";
import ShowNavbar from "../../pages/Courses";

import Home from "./home";
const Index = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default Index;
