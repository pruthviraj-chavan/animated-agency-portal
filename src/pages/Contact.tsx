
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields");
      return;
    }
    
    if (!formData.email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your message has been sent! We'll get back to you soon.");
      console.log("Form submitted:", formData);
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Have a project in mind? Get in touch with our team and let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h2 className="text-3xl font-bold mb-6 text-gradient">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you! Fill out the form, and our team will get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      details: "123 Digital Avenue, Tech City, TC 12345",
                      color: "from-purple-500 to-indigo-600"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      details: "+1 (555) 123-4567",
                      color: "from-blue-500 to-cyan-600"
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      details: "info@digitalagency.com",
                      color: "from-pink-500 to-rose-600"
                    }
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex items-start animate-slide-in-bottom"
                      style={{ animationDelay: `${150 + index * 100}ms` }}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center text-white mr-4 bg-gradient-to-r",
                        item.color
                      )}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Social links could be added here */}
              </div>
              
              {/* Contact Form */}
              <div className="bg-muted/30 rounded-xl p-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="animate-slide-in-bottom" style={{ animationDelay: "350ms" }}>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name <span className="text-primary">*</span></label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="hover-scale"
                      required
                    />
                  </div>
                  
                  <div className="animate-slide-in-bottom" style={{ animationDelay: "400ms" }}>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email <span className="text-primary">*</span></label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="hover-scale"
                      required
                    />
                  </div>
                  
                  <div className="animate-slide-in-bottom" style={{ animationDelay: "450ms" }}>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="hover-scale"
                    />
                  </div>
                  
                  <div className="animate-slide-in-bottom" style={{ animationDelay: "500ms" }}>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message <span className="text-primary">*</span></label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] hover-scale"
                      required
                    />
                  </div>
                  
                  <div className="pt-2 animate-slide-in-bottom" style={{ animationDelay: "550ms" }}>
                    <Button 
                      type="submit" 
                      className={cn(
                        "w-full transition-all duration-300 bg-gradient hover:opacity-90 button-pop",
                        isSubmitted ? "bg-green-600" : ""
                      )}
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Sent Successfully
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps (Placeholder) */}
        <section className="py-12 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] border border-border animate-fade-in">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-xl font-semibold">Interactive Map</p>
                  <p className="text-muted-foreground">(Map integration placeholder)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
