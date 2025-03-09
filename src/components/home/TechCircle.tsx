
import { useEffect, useRef } from "react";

// List of programming languages and technologies
const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#8CC84B" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#007396" },
  { name: "PHP", color: "#777BB4" },
  { name: "Go", color: "#00ADD8" },
  { name: "Ruby", color: "#CC342D" },
  { name: "Swift", color: "#FFAC45" },
  { name: "C#", color: "#239120" },
  { name: "C++", color: "#F34B7D" },
  { name: "Kotlin", color: "#7F52FF" },
  { name: "Rust", color: "#DEA584" },
  { name: "SQL", color: "#E38C00" },
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" }
];

export function TechCircle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    
    // Radius of the circle
    const radius = Math.min(centerX, centerY) * 0.75;
    
    // Create and position tech elements in a circle
    technologies.forEach((tech, index) => {
      const angle = (index / technologies.length) * Math.PI * 2;
      
      // Calculate position on the circle
      const x = centerX + radius * Math.cos(angle) - 40; // 40 is half the width of the tech element
      const y = centerY + radius * Math.sin(angle) - 40; // 40 is half the height of the tech element
      
      // Create tech element
      const techElement = document.createElement('div');
      techElement.className = 'tech-item absolute w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-125 cursor-pointer';
      techElement.style.left = `${x}px`;
      techElement.style.top = `${y}px`;
      techElement.style.backgroundColor = `${tech.color}20`; // Add transparency
      techElement.style.border = `2px solid ${tech.color}`;
      techElement.style.transform = 'scale(0)';
      techElement.style.opacity = '0';
      techElement.style.boxShadow = `0 0 15px ${tech.color}50`;
      
      // Add tech name
      const nameSpan = document.createElement('span');
      nameSpan.className = 'text-xs font-bold';
      nameSpan.style.color = tech.color;
      nameSpan.textContent = tech.name;
      techElement.appendChild(nameSpan);
      
      // Add data attribute for animation delay
      techElement.dataset.index = index.toString();
      
      container.appendChild(techElement);
    });
    
    // Animate the appearance of tech items
    const techItems = container.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
      setTimeout(() => {
        (item as HTMLElement).style.transform = 'scale(1)';
        (item as HTMLElement).style.opacity = '1';
      }, index * 100);
    });
    
    // Create rotation animation
    let angle = 0;
    const rotationSpeed = 0.0005; // Adjust for faster/slower rotation
    
    const animate = () => {
      angle += rotationSpeed;
      
      techItems.forEach((item, index) => {
        const itemAngle = angle + (index / technologies.length) * Math.PI * 2;
        
        const x = centerX + radius * Math.cos(itemAngle) - 40;
        const y = centerY + radius * Math.sin(itemAngle) - 40;
        
        (item as HTMLElement).style.left = `${x}px`;
        (item as HTMLElement).style.top = `${y}px`;
      });
      
      intervalRef.current = requestAnimationFrame(animate);
    };
    
    intervalRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (intervalRef.current) {
        cancelAnimationFrame(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden" 
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gradient-to-r from-agency-purple to-agency-blue rounded-full w-32 h-32 flex items-center justify-center animate-pulse">
          <span className="text-white font-bold">Tech Stack</span>
        </div>
      </div>
    </div>
  );
}
