import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, CreditCard, Gift, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const AICommunitySection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to our AI-powered community. Check your inbox for a confirmation email.",
    });
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-agency-purple/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-agency-purple/20 to-agency-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-agency-blue/20 to-agency-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
          Join our AI-powered community
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Subscribe to our newsletter and get the latest AI trends, automation 
          tips, and exclusive updates delivered straight to your inbox.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-background/80 backdrop-blur-sm border-agency-purple/30 focus:border-agency-purple focus:ring-agency-purple"
                disabled={isSubmitted}
              />
            </div>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-agency-blue to-agency-purple hover:from-agency-purple hover:to-agency-blue text-white px-8 transform transition-all hover:scale-105"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <Check className="w-4 h-4" />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>

        {/* Benefits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <CreditCard className="w-5 h-5 text-agency-green" />
            <span>No credit card is required</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-agency-purple/30"></div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Gift className="w-5 h-5 text-agency-blue" />
            <span>Early access & Special offers</span>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="max-w-md mx-auto p-4 bg-gradient-to-r from-agency-green/20 to-agency-blue/20 rounded-lg border border-agency-green/30 animate-scale-in">
            <div className="flex items-center justify-center space-x-2 text-agency-green">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Successfully subscribed!</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Welcome to our community. Check your inbox for confirmation.
            </p>
          </div>
        )}

        {/* Footer Logo */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="inline-flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-agency-purple/20">
            <div className="w-8 h-8 bg-gradient-to-br from-agency-purple to-agency-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-semibold text-lg">Dievektor</span>
          </div>
        </div>
      </div>
    </section>
  );
};