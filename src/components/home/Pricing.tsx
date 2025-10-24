import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Básico",
      description: "Perfecto para empezar",
      monthlyPrice: "$299",
      annualPrice: "$2,990",
      features: [
        "Hasta 5 páginas",
        "Diseño responsive",
        "Formulario de contacto",
        "Optimización SEO básica",
        "Hosting incluido 1 año",
        "Soporte por email",
      ],
    },
    {
      name: "Profesional",
      description: "Para negocios en crecimiento",
      monthlyPrice: "$599",
      annualPrice: "$5,990",
      popular: true,
      features: [
        "Hasta 15 páginas",
        "Diseño personalizado",
        "Blog integrado",
        "SEO avanzado",
        "Hosting ilimitado",
        "Soporte prioritario 24/7",
        "Panel de administración",
        "Integraciones básicas",
      ],
    },
    {
      name: "Empresarial",
      description: "Solución completa",
      monthlyPrice: "$1,299",
      annualPrice: "$12,990",
      features: [
        "Páginas ilimitadas",
        "Diseño premium único",
        "E-commerce completo",
        "SEO y marketing digital",
        "Hosting premium",
        "Soporte dedicado 24/7",
        "Panel avanzado",
        "Todas las integraciones",
        "Mantenimiento incluido",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Planes y Precios
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Elige el plan que mejor se adapte a tus necesidades
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-muted">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "annual"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anual
              <span className="ml-2 text-xs text-primary">Ahorra 17%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">
                    {billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{billingPeriod === "monthly" ? "mes" : "año"}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="block">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Comenzar
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
