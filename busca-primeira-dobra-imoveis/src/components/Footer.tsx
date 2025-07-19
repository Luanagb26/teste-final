import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-dark text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg shadow-medium">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  Premium<span className="text-luxury">Imóveis</span>
                </h2>
                <p className="text-xs text-background/70">Sua casa dos sonhos</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Há mais de 15 anos no mercado imobiliário, conectando pessoas aos seus lares ideais com excelência e confiança.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-luxury hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-luxury hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-luxury hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-luxury hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Compra</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Venda</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Aluguel</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Avaliação Gratuita</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Consultoria</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Financiamento</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-background/80">
                <MapPin className="w-4 h-4 mr-3 text-luxury" />
                Av. Paulista, 1000 - São Paulo, SP
              </div>
              <div className="flex items-center text-background/80">
                <Phone className="w-4 h-4 mr-3 text-luxury" />
                (11) 99999-9999
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="w-4 h-4 mr-3 text-luxury" />
                contato@premiumimoveis.com
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-background/60">
                Horário de atendimento:<br />
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Newsletter</h3>
            <p className="text-sm text-background/80">
              Receba as melhores oportunidades diretamente no seu e-mail.
            </p>
            <div className="space-y-3">
              <Input 
                type="email"
                placeholder="Seu e-mail" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:bg-background/20"
              />
              <Button variant="luxury" size="sm" className="w-full">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 Premium Imóveis. Todos os direitos reservados. | 
            <a href="#" className="hover:text-luxury transition-colors ml-2">Política de Privacidade</a> | 
            <a href="#" className="hover:text-luxury transition-colors ml-2">Termos de Uso</a>
          </p>
          <p className="text-xs text-background/50 mt-2">
            CRECI-SP: 12345-J | Site desenvolvido com tecnologia de ponta
          </p>
        </div>
      </div>
    </footer>
  );
}