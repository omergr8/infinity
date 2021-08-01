import Landing from "./sections/Landing/Landing";
import IntroVideo from "./sections/IntroVideo/IntroVideo";
import Features from "./sections/Features/Features";
import Participate from "./sections/Participate/Participate";
import Roadmap from "./sections/Roadmap/Roadmap";
import Partners from "./sections/Partners/Partners";
import Faq from "./sections/Faq/Faq";
import { Element } from "react-scroll";
const Home = () => {
  return (
    <div>
      <Landing />
      <IntroVideo />
      <Features />
      <Participate />
      <Element id="roadmap" name="roadmap">
        <Roadmap id="roadmap" />
      </Element>
      <Partners />
      <Faq />
    </div>
  );
};
export default Home;
