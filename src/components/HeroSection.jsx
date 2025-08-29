import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 py-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/hero.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
          Welcome to JLY International
        </h1>
        <p className="text-lg md:text-xl font-roboto max-w-2xl mx-auto mb-8">
          Converting Relationships into Results. Empowering businesses through strategic connections, funding, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/auth"
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
