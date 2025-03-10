
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
    
    // Create a more lightweight background animation
    // AI-themed with a grid pattern and occasional glowing nodes
    
    // Grid properties
    const gridSize = 30;
    const nodeRadius = 1;
    const activeNodeRadius = 3;
    
    // Active nodes - simulating AI neural network activity
    const activeNodes: { x: number, y: number, life: number, maxLife: number }[] = [];
    const maxActiveNodes = 15;
    
    // Animation
    const draw = () => {
      // Clear canvas with dark background
      ctx.fillStyle = "rgba(10, 10, 15, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = "rgba(80, 80, 120, 0.1)";
      ctx.lineWidth = 0.5;
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw grid nodes
      ctx.fillStyle = "rgba(100, 100, 160, 0.2)";
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Randomly activate new nodes
      if (activeNodes.length < maxActiveNodes && Math.random() > 0.92) {
        const gridX = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        const gridY = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        
        activeNodes.push({
          x: gridX,
          y: gridY,
          life: 0,
          maxLife: 50 + Math.random() * 50
        });
      }
      
      // Draw and update active nodes
      ctx.globalCompositeOperation = "lighter";
      
      for (let i = activeNodes.length - 1; i >= 0; i--) {
        const node = activeNodes[i];
        node.life++;
        
        // Remove dead nodes
        if (node.life > node.maxLife) {
          activeNodes.splice(i, 1);
          continue;
        }
        
        // Calculate alpha based on life cycle
        let alpha = node.life < 10 ? node.life / 10 : 
                   node.life > node.maxLife - 10 ? (node.maxLife - node.life) / 10 : 1;
        
        // Draw active node
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, activeNodeRadius * 3
        );
        
        gradient.addColorStop(0, `rgba(100, 200, 255, ${alpha * 0.8})`);
        gradient.addColorStop(1, "rgba(100, 200, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, activeNodeRadius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections between nearby active nodes
        for (let j = 0; j < activeNodes.length; j++) {
          if (i === j) continue;
          
          const otherNode = activeNodes[j];
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < gridSize * 5) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${alpha * 0.2 * (1 - distance / (gridSize * 5))})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        }
      }
      
      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(draw);
    };
    
    const animationId = requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', setDimensions);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-100 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
