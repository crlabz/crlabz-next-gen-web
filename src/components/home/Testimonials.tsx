import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart",
      content: "CR Labz transformó completamente nuestra presencia online. El sitio web que crearon es moderno, rápido y ha aumentado nuestras conversiones en un 150%.",
      rating: 5,
    },
    {
      name: "Carlos Ramírez",
      role: "Director, Ecommerce Plus",
      content: "Excelente trabajo en el desarrollo de nuestra tienda online. La integración con Azure y Cloudflare ha hecho que nuestro sitio sea increíblemente rápido.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Fundadora, Design Studio",
      content: "Profesionales, creativos y muy atentos. Entendieron exactamente lo que necesitábamos y lo entregaron a tiempo. Altamente recomendados.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra prioridad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 lg:p-8 bg-card hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
