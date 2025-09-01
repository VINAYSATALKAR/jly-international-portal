// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TeamPreview from "../components/TeamPreview";
import CTASection from "../components/CTASection"; // <-- Import the new component

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TeamPreview />
      <CTASection /> {/* <-- Add it here */}
    </>
  );
};

export default Home;