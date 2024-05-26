import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import { Transition } from "./styles/Transition";
const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Thapa Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default Transition(About);
