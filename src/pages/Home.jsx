
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TeamPreview from "../components/TeamPreview";
import WhyChooseUs from "../components/WhyChooseUs";


const Home = () => {
  return <>
    <HeroSection />
    <ServicesSection />
    <WhyChooseUs />
    <TeamPreview/>
    {/* <AboutPreview />     // optional: short intro to your mission
<CTASection />       // optional: invite to explore membership or contact */}

  </>

    ;
};

export default Home;
