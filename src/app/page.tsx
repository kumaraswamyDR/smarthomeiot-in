import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#05081a] text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      {/* <Footer /> */}
    </main>
  );
}
