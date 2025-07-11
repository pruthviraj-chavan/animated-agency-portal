
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Facebook, Instagram, Linkedin, Twitter, Code, CreditCard, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Here you would typically call an API to subscribe the user
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = {
    mainPages: [
      { name: "Home", path: "/" },
      { name: "Features", path: "/services" },
      { name: "Pricing", path: "/services" },
      { name: "Contact us", path: "/contact" },
    ],
    company: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
    utility: [
      { name: "404", path: "/404" },
      { name: "Licenses", path: "/licenses" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, link: "#", label: "Facebook" },
    { icon: Instagram, link: "#", label: "Instagram" },
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden">
      {/* Space background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        {/* Stars effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10">
        {/* Newsletter section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join our AI-powered community
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to our newsletter and get the latest AI trends, automation tips, 
              and exclusive updates delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/80 border-border/50 backdrop-blur-sm"
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                Submit
              </Button>
            </form>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CreditCard size={16} />
                <span>No credit card is required</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift size={16} />
                <span>Early access & Special offers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="container mx-auto px-4 py-12 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="col-span-1 animate-fade-in">
              <Link to="/" className="flex items-center gap-2 font-bold text-2xl mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  <Code size={20} />
                </div>
                <span className="text-primary">dieVektor</span>
              </Link>
              
              <div className="flex space-x-3 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.link}
                    aria-label={social.label}
                    className="w-8 h-8 flex items-center justify-center rounded bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Main Pages */}
            <div className="col-span-1 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="font-semibold text-foreground mb-4">Main Pages</h3>
              <ul className="space-y-3">
                {footerLinks.mainPages.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-1 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility Pages */}
            <div className="col-span-1 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h3 className="font-semibold text-foreground mb-4">Utility Pages</h3>
              <ul className="space-y-3">
                {footerLinks.utility.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              Designed by dieVektor, Powered by AI
            </p>
            <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
              © {new Date().getFullYear()} dieVektor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
