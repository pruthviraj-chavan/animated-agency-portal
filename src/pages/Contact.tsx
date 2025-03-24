import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState, FormEvent, useEffect, useRef } from "react";
import { Phone, Mail, Send, CheckCircle, Loader2, Code } from "lucide-react";
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
    
    // Create WhatsApp message
    const whatsappNumber = "9404895667"; // The WhatsApp number
    const message = `New Contact from Website:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Message: ${formData.message}`;
    
    // Encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Simulate delay and then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Redirecting you to WhatsApp to send your message!");
      console.log("Form submitted:", formData);
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
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

  // Matrix code effect for the background
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const fontSize = 12;
    const columns = canvas.width / fontSize;

    // Array to store the y position of each character
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Semi-transparent black background to show trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the color and font of the text
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      // Loop through each drop
      for (let i = 0; i < drops.length; i++) {
        // Pick a random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));

        // Draw the character
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%, 0.5)`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset when it reaches the bottom and randomize the speed
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y coordinate
        drops[i]++;
      }
    };

    const animation = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(animation);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0"
      />
      
      <Header />
      <main className="flex-grow pt-24 relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in glitch">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Have a project in mind? Get in touch with our team and let's create something amazing together.
              </p>
              
              <div className="terminal mb-8">
                <span className="terminal-text">Initializing secure connection...</span>
              </div>
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
                      icon: Phone,
                      title: "Call Us",
                      details: "+91 94048 95667",
                      color: "from-blue-500 to-cyan-600"
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      details: "team.divektor@gmail.com",
                      color: "from-pink-500 to-rose-600"
                    },
                    {
                      icon: Code,
                      title: "Our Stack",
                      details: "React, Node.js, Python, TypeScript",
                      color: "from-purple-500 to-indigo-600"
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
                
                {/* Code Animation */}
                <div className="mt-12">
                  <div className="code-line py-1 px-2 text-xs font-mono text-muted-foreground mb-2">
                    <span className="text-agency-purple">import</span> <span className="text-agency-blue">&#123; sendMessage &#125;</span> <span className="text-agency-purple">from</span> <span className="text-agency-pink">'./contact'</span>;
                  </div>
                  <div className="code-line py-1 px-2 text-xs font-mono text-muted-foreground mb-2">
                    <span className="text-agency-purple">const</span> <span className="text-agency-blue">response</span> = <span className="text-agency-purple">await</span> sendMessage(formData);
                  </div>
                  <div className="code-line py-1 px-2 text-xs font-mono text-muted-foreground">
                    <span className="text-agency-purple">if</span> (response.success) <span className="text-agency-blue">console</span>.log(<span className="text-agency-pink">'Message sent successfully!'</span>);
                  </div>
                </div>
                
                {/* DNA Helix Animation */}
                <div className="dna-helix mt-12">
                  <div className="dna-strand"></div>
                  {[...Array(10)].map((_, i) => (
                    <div 
                      key={i} 
                      className="dna-rung" 
                      style={{ 
                        top: `${i * 20}px`,
                        animationDelay: `${i * 0.5}s`,
                        background: i % 2 === 0 ? '#9b87f5' : '#D946EF'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-muted/30 rounded-xl p-8 animate-fade-in relative" style={{ animationDelay: "300ms" }}>
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-agency-purple flex items-center justify-center animate-float">
                  <Code size={20} className="text-white" />
                </div>
                
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
                      className="hover-scale backdrop-blur-sm bg-background/50"
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
                      className="hover-scale backdrop-blur-sm bg-background/50"
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
                      placeholder="+91 98765 43210"
                      className="hover-scale backdrop-blur-sm bg-background/50"
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
                      className="min-h-[120px] hover-scale backdrop-blur-sm bg-background/50"
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
                          Connecting to WhatsApp...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Ready to Send via WhatsApp
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send via WhatsApp
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-2">
                      Your message will be sent directly to our WhatsApp
                    </p>
                  </div>
                </form>
                
                {/* Binary decoration */}
                <div className="absolute -bottom-3 -right-3 text-xs font-mono text-muted-foreground opacity-50 binary-pulse">
                  01001100 01101111 01110110 01100101
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Added cool coding visualization section instead of map */}
        <section className="py-12 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] border border-border animate-fade-in relative bg-black/30">
              <div className="absolute inset-0 bg-grid-pattern"></div>
              
              {/* Animated code blocks */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute code-block p-4 rounded bg-muted/20 border border-agency-purple/30 shadow-lg"
                    style={{
                      top: `${Math.random() * 60 + 10}%`,
                      left: `${Math.random() * 60 + 10}%`,
                      transform: `scale(${0.7 + Math.random() * 0.5})`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  >
                    <pre className="text-xs text-agency-purple/80 font-mono">
                      <code>{`function connect() {
  const message = getMessage();
  return sendToWhatsApp(message);
}`}</code>
                    </pre>
                  </div>
                ))}
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-8">
                <h3 className="text-2xl font-bold text-gradient mb-4">Connect with Our Development Team</h3>
                <p className="text-muted-foreground max-w-md">
                  Our expert developers are ready to bring your vision to life. 
                  Reach out through the form above and start your digital journey today.
                </p>
                <div className="mt-6">
                  <div className="inline-block px-4 py-2 bg-agency-purple/20 rounded-full border border-agency-purple/40 text-sm animate-pulse-slow">
                    <span className="text-agency-purple">npm install</span> <span className="text-white">digital-success</span>
                  </div>
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
