import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import TestimonialsStatic from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Channels from "../components/Channels";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <Hero />
        <TestimonialsStatic />
        <Channels />
        <Features />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
