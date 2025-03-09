
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PageConstructionProps {
  title: string;
}

export function PageConstruction({ title }: PageConstructionProps) {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
        <Layers className="h-12 w-12 text-primary" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">{title}</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
        We're currently building this page. Check back soon for the full experience!
      </p>
      <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
