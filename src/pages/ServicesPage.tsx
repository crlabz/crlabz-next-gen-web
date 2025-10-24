import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, ShoppingCart, Smartphone, Cloud, Zap, Search, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, rápidos y responsivos usando las últimas tecnologías como React, TypeScript y frameworks modernos.",
      features: [
        "React y TypeScript",
        "Diseño responsive",
        "Optimización de rendimiento",
        "Integración de APIs",
      ],
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Diseñamos interfaces intuitivas y atractivas que brindan experiencias excepcionales a tus usuarios.",
      features: [
        "Diseño de interfaces modernas",
        "Prototipado interactivo",
        "Testing de usabilidad",
        "Design systems",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Desarrollamos tiendas online completas con pasarelas de pago, gestión de inventario y análisis de ventas.",
      features: [
        "Catálogo de productos",
        "Carrito de compras",
        "Pasarelas de pago",
        "Panel de administración",
      ],
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Web",
      description: "Creamos Progressive Web Apps con funcionalidad offline, notificaciones push y experiencia nativa.",
      features: [
        "PWA modernas",
        "Funcionalidad offline",
        "Notificaciones push",
        "Instalable en dispositivos",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Hosting premium con Azure y Cloudflare para máxima velocidad, seguridad y disponibilidad.",
      features: [
        "Microsoft Azure",
        "Cloudflare CDN",
        "SSL gratuito",
        "99.99% uptime",
      ],
    },
    {
      icon: Search,
      title: "SEO",
      description: "Optimizamos tu sitio para motores de búsqueda para mejorar tu visibilidad y atraer más clientes.",
      features: [
        "Optimización on-page",
        "Investigación de keywords",
        "Link building",
        "Reportes mensuales",
      ],
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "Mejoramos el rendimiento de tu sitio web para cargar en menos de 2 segundos.",
      features: [
        "Optimización de imágenes",
        "Minificación de código",
        "Lazy loading",
        "Caching estratégico",
      ],
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Implementamos herramientas de análisis para que puedas tomar decisiones basadas en datos.",
      features: [
        "Google Analytics",
        "Mapas de calor",
        "Análisis de conversiones",
        "Reportes personalizados",
      ],
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
                Nuestros <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Servicios</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Soluciones completas de desarrollo web para hacer crecer tu negocio. 
                Desde el diseño hasta el despliegue, te acompañamos en cada paso.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-6">
                    <service.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Listo para empezar tu proyecto?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contáctanos hoy y descubre cómo podemos ayudarte a llevar tu negocio al siguiente nivel.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 px-8 py-6 text-lg">
                  Solicitar Cotización
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
