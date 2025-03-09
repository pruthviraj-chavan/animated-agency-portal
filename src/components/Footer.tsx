
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Code } from "lucide-react";
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
    company: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, link: "#", label: "Facebook" },
    { icon: Instagram, link: "#", label: "Instagram" },
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        {/* Animated code line effect */}
        <div className="overflow-hidden mb-8 max-w-full">
          <div className="w-full h-6 bg-muted/30 rounded-lg relative mb-4">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-agency-purple to-agency-blue animate-pulse w-24 rounded-lg"></div>
          </div>
          <div className="typing-code font-mono text-xs text-muted-foreground overflow-hidden whitespace-nowrap animate-typing">
            <span className="text-agency-blue">const</span> <span className="text-agency-pink">createAmazingExperience</span> = (<span className="text-agency-purple">client</span>) =&gt; &#123; <span className="text-agency-blue">return</span> <span className="text-agency-pink">client.success</span> &#125;;
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl mb-4 hover-scale">
              <div className="w-10 h-10 bg-gradient rounded-full flex items-center justify-center text-white">
                <Code className="animate-pulse" />
              </div>
              <span className="text-gradient">DigitalAgency</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Creating stunning digital experiences with the perfect blend of design and technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-in"
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li 
                  key={link.name}
                  className="animate-slide-in-bottom"
                  style={{ animationDelay: `${250 + index * 50}ms` }}
                >
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors story-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="col-span-1 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li 
                  key={link.name}
                  className="animate-slide-in-bottom"
                  style={{ animationDelay: `${350 + index * 50}ms` }}
                >
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors story-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="font-bold text-lg mb-4">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted/50 hover-scale"
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient hover:opacity-90 button-pop animate-pulse-slow"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright and back to top */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-border/30 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Digital Agency. All rights reserved.
          </p>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors mt-4 sm:mt-0 animate-float"
            onClick={scrollToTop}
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
