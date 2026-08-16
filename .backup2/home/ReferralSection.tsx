
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ReferralSection() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "9404895667";
    const message = `Hi, I'd like to refer someone for your web development services.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-background/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-agency-pink/10 animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-background/60 backdrop-blur-sm rounded-xl border border-border p-8 md:p-12 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-agency-purple to-agency-pink flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient animate-scale-in">
            💸 Refer & Earn with Us!
          </h2>
          
          <p className="text-lg text-center mb-6 animate-fade-in">
            Know someone who needs a website? Refer them to us and earn <span className="font-bold text-primary">10% to 15% commission</span> on the total deal value!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background/80 rounded-lg p-5 border border-border text-center hover-scale">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-agency-purple to-agency-blue flex items-center justify-center text-white mx-auto mb-3">
                1
              </div>
              <h3 className="font-bold mb-2">Refer Someone</h3>
              <p className="text-sm text-muted-foreground">Send your friends or business contacts our way</p>
            </div>
            
            <div className="bg-background/80 rounded-lg p-5 border border-border text-center hover-scale">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-agency-blue to-agency-pink flex items-center justify-center text-white mx-auto mb-3">
                2
              </div>
              <h3 className="font-bold mb-2">We Close The Deal</h3>
              <p className="text-sm text-muted-foreground">We'll handle all the details and create an amazing website</p>
            </div>
            
            <div className="bg-background/80 rounded-lg p-5 border border-border text-center hover-scale">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-agency-pink to-agency-purple flex items-center justify-center text-white mx-auto mb-3">
                3
              </div>
              <h3 className="font-bold mb-2">You Get Paid</h3>
              <p className="text-sm text-muted-foreground">Earn your commission once the project is confirmed</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={handleWhatsAppClick} className="bg-gradient button-pop">
              Refer Someone Now
            </Button>
            <Button asChild variant="outline" className="button-pop">
              <Link to="/services/refer">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
