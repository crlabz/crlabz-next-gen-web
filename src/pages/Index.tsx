import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import TechStack from "@/components/home/TechStack";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <WhyUs />
      <TechStack />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
