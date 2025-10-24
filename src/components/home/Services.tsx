import { Card } from "@/components/ui/card";
import { Code, Palette, ShoppingCart, Smartphone, Cloud, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Sitios web modernos y responsivos construidos con las últimas tecnologías",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Interfaces atractivas y experiencias de usuario excepcionales",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago integradas",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Web",
      description: "Progressive Web Apps con funcionalidad offline y notificaciones",
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Infraestructura con Azure y Cloudflare para máxima velocidad",
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "SEO y rendimiento optimizado para mejores resultados",
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones completas de desarrollo web para hacer crecer tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
