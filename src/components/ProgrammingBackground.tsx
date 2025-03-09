
import { useEffect, useRef } from "react";

const programmingLogos = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#007396" },
  { name: "PHP", color: "#777BB4" },
  { name: "Go", color: "#00ADD8" },
  { name: "Ruby", color: "#CC342D" }
];

export function ProgrammingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setDimensions();
    window.addEventListener('resize', setDimensions);

    // Create programming logos
    const logos = programmingLogos.map((logo) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 30 + Math.random() * 20,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      text: logo.name,
      color: logo.color,
      opacity: 0.1 + Math.random() * 0.2
    }));

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      logos.forEach(logo => {
        // Update position
        logo.x += logo.speedX;
        logo.y += logo.speedY;
        
        // Boundary check
        if (logo.x < 0 || logo.x > canvas.width) logo.speedX *= -1;
        if (logo.y < 0 || logo.y > canvas.height) logo.speedY *= -1;
        
        // Draw logo
        ctx.font = `${logo.size}px monospace`;
        ctx.fillStyle = `${logo.color}${Math.floor(logo.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fillText(logo.text, logo.x, logo.y);
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', setDimensions);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20"
    />
  );
}
