
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { TechCircle } from "@/components/home/TechCircle";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 300;

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
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
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
      canvas.height = 300;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(animation);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0"
    />
  );
};

const CodeElement = ({ delay = 0, children }: { delay?: number, children: React.ReactNode }) => {
  return (
    <div 
      className="animate-slide-in-bottom bg-muted/30 rounded-lg p-4 border border-primary/20 shadow-lg shadow-primary/5"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CodeSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient animate-scale-in">
          Our Development Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CodeElement delay={100}>
            <div className="text-xs font-mono mb-4">
              <span className="text-agency-purple">function</span> <span className="text-agency-blue">designProcess</span><span className="text-white">(</span><span className="text-agency-pink">requirements</span><span className="text-white">) {`{`}</span>
              <div className="pl-4 text-muted-foreground">
                <p>// First we understand your needs</p>
                <p><span className="text-agency-blue">const</span> <span className="text-agency-pink">design</span> = analyze(requirements);</p>
                <p><span className="text-agency-blue">return</span> createPrototype(design);</p>
              </div>
              <span className="text-white">{`}`}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">1. Design & Prototype</h3>
            <p className="text-muted-foreground">We create beautiful, functional designs based on your requirements and business goals.</p>
          </CodeElement>
          
          <CodeElement delay={300}>
            <div className="text-xs font-mono mb-4">
              <span className="text-agency-purple">async function</span> <span className="text-agency-blue">developSolution</span><span className="text-white">(</span><span className="text-agency-pink">prototype</span><span className="text-white">) {`{`}</span>
              <div className="pl-4 text-muted-foreground">
                <p>// Building with best practices</p>
                <p><span className="text-agency-blue">const</span> <span className="text-agency-pink">code</span> = <span className="text-agency-blue">await</span> writeCleanCode();</p>
                <p><span className="text-agency-blue">return</span> test(code);</p>
              </div>
              <span className="text-white">{`}`}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">2. Development</h3>
            <p className="text-muted-foreground">Our expert developers build your solution using modern technologies and best practices.</p>
          </CodeElement>
          
          <CodeElement delay={500}>
            <div className="text-xs font-mono mb-4">
              <span className="text-agency-purple">function</span> <span className="text-agency-blue">deployAndMaintain</span><span className="text-white">(</span><span className="text-agency-pink">solution</span><span className="text-white">) {`{`}</span>
              <div className="pl-4 text-muted-foreground">
                <p>// Ensuring everything runs smoothly</p>
                <p>deployToCloud(solution);</p>
                <p>setupMonitoring();</p>
                <p><span className="text-agency-blue">return</span> provideContinuousSupport();</p>
              </div>
              <span className="text-white">{`}`}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">3. Deploy & Support</h3>
            <p className="text-muted-foreground">We deploy your solution and provide ongoing maintenance and support to ensure success.</p>
          </CodeElement>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="fixed top-0 left-0 w-full h-screen">
          <CodeRain />
        </div>
      </div>
      
      <Header />
      <main className="flex-grow pt-16 relative z-10">
        <HeroSection />
        <ServicesSection />
        <section className="py-20 bg-background/90 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient animate-scale-in">
              Technologies We Master
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              Our team is proficient in a wide range of programming languages and frameworks, enabling us to choose the perfect technology for your project.
            </p>
            <TechCircle />
          </div>
        </section>
        <CodeSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ClientsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
