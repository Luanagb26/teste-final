import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart, Share2, Camera } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  featured?: boolean;
}

export function PropertyCard({ 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  area, 
  type, 
  image, 
  featured = false 
}: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-soft hover:shadow-strong transition-all duration-300 border-0 animate-scale-in">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {featured && (
            <Badge className="absolute top-3 left-3 bg-luxury text-luxury-foreground">
              Destaque
            </Badge>
          )}
          
          <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
            {type}
          </Badge>
          
          <div className="absolute bottom-3 right-3 flex gap-2 ">
            <Button size="icon" variant="hero" className="w-8 h-8 ">
              <Heart className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="hero" className="w-8 h-8">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="hero" className="w-8 h-8">
              <Camera className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                {bedrooms}
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                {bathrooms}
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                {area}m²
              </div>
            </div>
          </div>
          
          <div className="pt-2 border-t border-border/50">
            <div className="text-2xl font-bold text-primary">
              {price}
            </div>
            <div className="text-sm text-muted-foreground">
              R$ {Math.round(parseInt(price.replace(/[R$.,]/g, '')) / area)}/m²
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}