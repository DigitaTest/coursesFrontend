import Courses from "./Courses";
import HeaderDesc from "../components/header/headerDesc";
import Team from "../components/team/team";
import Quote from "./quote"

const Home = () => {
  return (
    <>
      <HeaderDesc />
      <Quote />
      <Team />
      <Courses />
    </>
  );
};

export default Home;
