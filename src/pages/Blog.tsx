import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "10 Tendencias de Diseño Web para 2025",
      excerpt: "Descubre las últimas tendencias en diseño web que dominarán el próximo año y cómo implementarlas en tu sitio.",
      date: "15 Diciembre 2024",
      readTime: "5 min",
      category: "Diseño",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    },
    {
      title: "Por qué tu Negocio Necesita un Sitio Web Moderno",
      excerpt: "En la era digital, tener presencia online no es opcional. Te explicamos por qué tu negocio necesita un sitio web profesional.",
      date: "10 Diciembre 2024",
      readTime: "7 min",
      category: "Negocios",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "Guía Completa de SEO para Principiantes",
      excerpt: "Aprende los fundamentos del SEO y cómo optimizar tu sitio web para aparecer en los primeros resultados de Google.",
      date: "5 Diciembre 2024",
      readTime: "10 min",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&auto=format&fit=crop",
    },
    {
      title: "Azure vs AWS: ¿Cuál es Mejor para tu Proyecto?",
      excerpt: "Comparamos las dos plataformas cloud más populares y te ayudamos a elegir la mejor opción para tus necesidades.",
      date: "1 Diciembre 2024",
      readTime: "8 min",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    },
    {
      title: "Cómo Mejorar la Velocidad de tu Sitio Web",
      excerpt: "Consejos prácticos y técnicas avanzadas para hacer que tu sitio web cargue en menos de 2 segundos.",
      date: "25 Noviembre 2024",
      readTime: "6 min",
      category: "Optimización",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    },
    {
      title: "React vs Vue: Comparativa 2024",
      excerpt: "Un análisis detallado de los dos frameworks JavaScript más populares y cuál deberías elegir para tu próximo proyecto.",
      date: "20 Noviembre 2024",
      readTime: "12 min",
      category: "Desarrollo",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
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
                Nuestro <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Artículos, guías y recursos sobre desarrollo web, diseño, SEO y tecnología.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {post.category}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
