import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pt-20">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            <span className="block text-white">Desarrollamos sitios web</span>
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              modernos y efectivos
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Para la presentación y venta de sus productos y servicios
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-medium text-base sm:text-lg px-8 py-6 rounded-full group"
              >
                Ver Servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white text-base sm:text-lg px-8 py-6 rounded-full backdrop-blur-sm"
              >
                Contactar
              </Button>
            </Link>
          </div>

          {/* Subtitle */}
          <p className="text-sm text-zinc-500 pt-4">
            Pagos mensuales y anuales • Cancela cuando quieras
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
