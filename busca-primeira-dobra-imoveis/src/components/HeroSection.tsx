import { Button } from "@/components/ui/button";
import { PropertySearch } from "@/components/PropertySearch";
import { Play, TrendingUp, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/70 via-neutral-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight mt-28">
            Encontre Seu
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">
              Lar Perfeito
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra as melhores oportunidades do mercado imobiliário com nossa expertise de mais de 15 anos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="luxury" size="xl" className="animate-glow">
              <TrendingUp className="w-5 h-5 mr-2" />
              Explorar Imóveis
            </Button>
            <Button variant="hero" size="xl">
              <Play className="w-5 h-5 mr-2" />
              Assistir Tour Virtual
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-luxury mb-2">15+</div>
              <div className="text-background/80">Anos de Experiência</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-luxury mb-2">2.5K+</div>
              <div className="text-background/80">Imóveis Vendidos</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-luxury mb-2">98%</div>
              <div className="text-background/80">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
        
        {/* Search Component */}
        <PropertySearch />
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-80">
          <div className="flex items-center text-background/70">
            <Users className="w-5 h-5 mr-2" />
            <span className="text-sm">Mais de 10.000 clientes atendidos</span>
          </div>
          <div className="flex items-center text-background/70">
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm">Prêmio Melhor Imobiliária 2023</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}