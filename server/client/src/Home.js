import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import { Transition } from "./styles/Transition";
const Home = () => {
  

  return (
    <>
      <HeroSection  />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  )
};

export default Transition(Home);
