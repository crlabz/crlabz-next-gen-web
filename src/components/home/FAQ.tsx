import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio básico puede estar listo en 2-3 semanas, mientras que proyectos más complejos pueden tomar 6-8 semanas. Siempre establecemos un cronograma claro al inicio del proyecto.",
    },
    {
      question: "¿Qué tecnologías utilizan?",
      answer: "Utilizamos las tecnologías más modernas incluyendo React, TypeScript, y frameworks modernos. Para hosting utilizamos Microsoft Azure y Cloudflare CDN para garantizar velocidad y seguridad óptimas.",
    },
    {
      question: "¿Incluyen el hosting en sus planes?",
      answer: "Sí, todos nuestros planes incluyen hosting premium con Azure y Cloudflare. Esto garantiza que tu sitio sea rápido, seguro y esté siempre disponible.",
    },
    {
      question: "¿Puedo cancelar mi plan en cualquier momento?",
      answer: "Absolutamente. No hay contratos de permanencia. Puedes cancelar tu plan mensual en cualquier momento. Los planes anuales ofrecen un descuento significativo pero también pueden cancelarse.",
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer: "Sí, todos nuestros planes incluyen soporte continuo. El nivel de soporte varía según el plan, desde soporte por email en el plan básico hasta soporte dedicado 24/7 en el plan empresarial.",
    },
    {
      question: "¿Puedo actualizar mi plan más adelante?",
      answer: "Por supuesto. Puedes actualizar tu plan en cualquier momento a medida que tu negocio crece. El proceso es simple y sin interrupciones en tu sitio web.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encuentra respuestas a las preguntas más comunes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
