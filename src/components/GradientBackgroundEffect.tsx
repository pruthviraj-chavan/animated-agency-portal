
import { useEffect, useRef } from "react";

export function GradientBackgroundEffect() {
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
    
    // Colors for our gradients
    const colors = [
      { r: 155, g: 135, b: 245 }, // agency-purple
      { r: 51, g: 195, b: 240 },  // agency-blue
      { r: 217, g: 70, b: 239 },  // agency-pink
      { r: 180, g: 120, b: 255 }, // purple variant
      { r: 80, g: 210, b: 255 },  // blue variant
      { r: 255, g: 90, b: 180 }   // pink variant
    ];
    
    // Create orbs
    const orbs = Array.from({ length: 10 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 200 + 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      alpha: 0.1 + Math.random() * 0.2
    }));
    
    // Animation
    const drawGradients = () => {
      // Clear canvas with a very dark background
      ctx.fillStyle = "rgba(10, 10, 15, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each orb
      orbs.forEach(orb => {
        // Move orb
        orb.x += orb.vx;
        orb.y += orb.vy;
        
        // Boundary check
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;
        
        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        
        gradient.addColorStop(0, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, ${orb.alpha})`);
        gradient.addColorStop(1, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0)`);
        
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Add noise pattern for texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        // Add very subtle noise
        if (Math.random() > 0.99) {
          data[i] = Math.min(255, data[i] + Math.random() * 20);
          data[i+1] = Math.min(255, data[i+1] + Math.random() * 20);
          data[i+2] = Math.min(255, data[i+2] + Math.random() * 20);
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(drawGradients);
    };
    
    // Additional floating code elements
    const codeElements = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      text: Math.random() > 0.5 ? '{' : Math.random() > 0.5 ? '}' : Math.random() > 0.5 ? '<>' : '</>',
      size: 20 + Math.random() * 30,
      opacity: 0.1 + Math.random() * 0.2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    const drawCodeElements = () => {
      codeElements.forEach(el => {
        // Move element
        el.x += el.vx;
        el.y += el.vy;
        
        // Boundary check
        if (el.x < 0) el.x = canvas.width;
        if (el.x > canvas.width) el.x = 0;
        if (el.y < 0) el.y = canvas.height;
        if (el.y > canvas.height) el.y = 0;
        
        // Draw text
        ctx.font = `${el.size}px monospace`;
        ctx.fillStyle = `rgba(${el.color.r}, ${el.color.g}, ${el.color.b}, ${el.opacity})`;
        ctx.fillText(el.text, el.x, el.y);
      });
    };
    
    const animate = () => {
      drawGradients();
      drawCodeElements();
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
      className="fixed top-0 left-0 w-full h-full opacity-100 pointer-events-none z-0"
    />
  );
}
