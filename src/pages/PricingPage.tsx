import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Planes <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transparentes</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sin costos ocultos. Sin sorpresas. Elige el plan que mejor se adapte a tus necesidades 
                y comienza tu proyecto hoy mismo.
              </p>
            </div>
          </div>
        </section>

        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
