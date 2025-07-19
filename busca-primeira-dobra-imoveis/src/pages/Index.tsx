import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PropertyCard } from "@/components/PropertyCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  MapPin, 
  Shield, 
  Clock, 
  Star, 
  Quote,
  Home,
  Building,
  TreePine,
  Store
} from "lucide-react";

const Index = () => {
  // Sample property data
  const featuredProperties = [
    {
      id: "1",
      title: "Apartamento Moderno Vila Madalena",
      price: "R$ 850.000",
      location: "Vila Madalena, São Paulo - SP",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      type: "Apartamento",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: "2", 
      title: "Casa Contemporânea Jardim Europa",
      price: "R$ 2.300.000",
      location: "Jardim Europa, São Paulo - SP",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      type: "Casa",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: "3",
      title: "Studio Design Itaim Bibi",
      price: "R$ 420.000",
      location: "Itaim Bibi, São Paulo - SP", 
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      type: "Studio",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      featured: true
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Compradora",
      content: "Excelente atendimento! Encontrei minha casa dos sonhos com a ajuda da equipe profissional da Premium Imóveis.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Vendedor",
      content: "Venderam meu apartamento em tempo recorde e pelo melhor preço do mercado. Recomendo a todos!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Locatária",
      content: "Processo de locação super transparente e ágil. Equipe sempre disponível para esclarecer dúvidas.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      {/* Property Types Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Tipos de <span className="text-primary">Imóveis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre exatamente o que você procura entre nossa ampla variedade de propriedades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 animate-scale-in">
              <CardContent className="p-8">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:animate-glow">
                  <Home className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Apartamentos</h3>
                <p className="text-muted-foreground mb-4">Modernos e bem localizados</p>
                <Badge variant="secondary">350+ disponíveis</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="bg-gradient-luxury p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:animate-glow">
                  <Building className="w-8 h-8 text-luxury-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Casas</h3>
                <p className="text-muted-foreground mb-4">Espaçosas para toda família</p>
                <Badge variant="secondary">180+ disponíveis</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:animate-glow">
                  <TreePine className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Terrenos</h3>
                <p className="text-muted-foreground mb-4">Para construir seu projeto</p>
                <Badge variant="secondary">90+ disponíveis</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-8">
                <div className="bg-gradient-luxury p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:animate-glow">
                  <Store className="w-8 h-8 text-luxury-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Comerciais</h3>
                <p className="text-muted-foreground mb-4">Para seu negócio prosperar</p>
                <Badge variant="secondary">75+ disponíveis</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Imóveis em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Selecionamos as melhores oportunidades para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <div key={property.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              <TrendingUp className="w-5 h-5 mr-2" />
              Ver Todos os Imóveis
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Por Que Escolher a <span className="text-primary">Premium Imóveis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossa experiência e dedicação garantem o melhor serviço para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-card shadow-soft hover:shadow-strong transition-all duration-300 border-0 animate-fade-in-up">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Segurança Total</h3>
              <p className="text-muted-foreground">
                Todos os nossos processos são seguros e transparentes, com acompanhamento jurídico especializado.
              </p>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-card shadow-soft hover:shadow-strong transition-all duration-300 border-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-luxury p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Clock className="w-8 h-8 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Agilidade</h3>
              <p className="text-muted-foreground">
                Processos otimizados e equipe experiente para tornar sua experiência rápida e eficiente.
              </p>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-card shadow-soft hover:shadow-strong transition-all duration-300 border-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Excelência</h3>
              <p className="text-muted-foreground">
                Atendimento personalizado e comprometimento total com a satisfação dos nossos clientes.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              O Que Nossos <span className="text-primary">Clientes Dizem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de quem confiou em nós para realizar seus sonhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-gradient-card shadow-soft hover:shadow-strong transition-all duration-300 border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="flex text-luxury">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Pronto Para Encontrar Seu Novo Lar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nossa equipe está pronta para te ajudar a encontrar o imóvel perfeito. 
              Entre em contato e comece sua jornada hoje mesmo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                <MapPin className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
              <Button variant="hero" size="xl">
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
