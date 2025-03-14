
import React from "react";
import { Button } from "@/components/ui/button";

const WhatsAppCTA = () => {
  return (
    <section className="py-12 bg-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Have questions about our internship program?</h2>
            <p className="text-primary-foreground/90">Reach out to us directly via WhatsApp for quick responses!</p>
          </div>
          <Button 
            onClick={() => window.open("https://wa.me/919404895667", "_blank")}
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/20 button-pop"
          >
            Contact via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
