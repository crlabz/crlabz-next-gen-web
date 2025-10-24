const Clients = () => {
  const clients = [
    "Ollio",
    "OdeaoLabs",
    "Elevate",
    "Luminary",
    "Magnolia",
  ];

  return (
    <section className="py-16 lg:py-24 border-y border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Elegidos por empresas y profesionales
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-shimmer">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 lg:px-12"
              >
                <div className="text-2xl lg:text-3xl font-semibold text-muted-foreground/40 hover:text-foreground transition-colors">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
