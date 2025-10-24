import { Check } from "lucide-react";

const WhyUs = () => {
  const features = [
    "Desarrollo moderno con React y TypeScript",
    "Hosting en Azure y Cloudflare para máxima velocidad",
    "Diseño responsive 100% mobile-friendly",
    "SEO optimizado para mejores posiciones",
    "Soporte técnico continuo",
    "Actualizaciones y mantenimiento incluido",
    "Panel de administración intuitivo",
    "Integración con sistemas de pago",
  ];

  return (
    <section className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Somos una agencia especializada en crear experiencias web modernas y efectivas. 
              Utilizamos tecnologías de vanguardia y las mejores prácticas de la industria.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold">
                  5+
                </div>
                <p className="text-xl font-semibold">Años de experiencia</p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
