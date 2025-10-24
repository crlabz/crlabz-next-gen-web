import { Card } from "@/components/ui/card";
import { Cloud, Shield, Zap, Globe } from "lucide-react";

const TechStack = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Tecnología de Vanguardia
          </h2>
          <p className="text-lg text-muted-foreground">
            Utilizamos las mejores herramientas y plataformas para garantizar el máximo rendimiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Cloud className="h-7 w-7 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Microsoft Azure</h3>
                <p className="text-muted-foreground mb-4">
                  Infraestructura cloud empresarial con escalabilidad ilimitada y seguridad de nivel mundial.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span>99.99% de disponibilidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span>Certificaciones de seguridad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-blue-500" />
                    <span>Red global de data centers</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Zap className="h-7 w-7 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Cloudflare</h3>
                <p className="text-muted-foreground mb-4">
                  CDN global para velocidad ultrarrápida y protección DDoS automática para tu sitio.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <span>Carga en milisegundos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-orange-500" />
                    <span>Protección contra ataques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-orange-500" />
                    <span>310+ ciudades globalmente</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
