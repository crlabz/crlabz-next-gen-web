import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "Nos enfocamos en crear sitios web que realmente impulsen tu negocio y generen resultados medibles.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboramos estrechamente contigo en cada etapa del proyecto para asegurar tu visión.",
    },
    {
      icon: Award,
      title: "Excelencia Técnica",
      description: "Utilizamos las mejores prácticas y tecnologías más modernas del mercado.",
    },
    {
      icon: Heart,
      title: "Pasión por el Diseño",
      description: "Creamos experiencias digitales hermosas que tus usuarios amarán.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Sobre <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CR Labz</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos una agencia de desarrollo web moderna con sede en Costa Rica, 
                dedicada a crear experiencias digitales excepcionales que impulsan el éxito de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Nuestra Historia</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  CR Labz nació de la pasión por el desarrollo web y el deseo de ayudar a las empresas 
                  costarricenses a tener una presencia digital de clase mundial. Fundada por un equipo de 
                  desarrolladores experimentados, hemos crecido hasta convertirnos en una de las agencias 
                  más innovadoras de la región.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nuestro enfoque combina diseño creativo con desarrollo técnico sólido. Utilizamos 
                  tecnologías modernas como React, TypeScript y servicios cloud de Azure y Cloudflare 
                  para garantizar que cada proyecto sea rápido, seguro y escalable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hoy, nos enorgullece servir a empresas de todos los tamaños, desde startups hasta 
                  corporaciones establecidas, ayudándoles a alcanzar sus objetivos digitales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Nuestros Valores
              </h2>
              <p className="text-lg text-muted-foreground">
                Los principios que guían nuestro trabajo cada día
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: "5+", label: "Años de Experiencia" },
                { number: "50+", label: "Proyectos Completados" },
                { number: "40+", label: "Clientes Satisfechos" },
                { number: "100%", label: "Dedicación" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
