
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "Working with this agency transformed our online presence completely. Their team delivered a website that not only looks stunning but also performs exceptionally well.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    avatar: "",
  },
  {
    id: 2,
    content: "The team's attention to detail and creativity exceeded our expectations. Our e-commerce store has seen a 40% increase in conversions since the redesign.",
    author: "Michael Chen",
    role: "CEO, StyleBoutique",
    avatar: "",
  },
  {
    id: 3,
    content: "From concept to execution, the agency delivered exactly what we needed. Their expertise in both design and development is truly impressive.",
    author: "Emma Williams",
    role: "Product Manager, SaaS Solutions",
    avatar: "",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500); // Match this with the animation duration

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative px-4">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary/20">
            <Quote size={120} />
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out flex" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-background rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
                        {testimonial.avatar ? (
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        ) : null}
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.author.split(' ').map(name => name[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute -translate-y-1/2 top-1/2 flex justify-between w-full left-0">
            <Button
              onClick={prevTestimonial}
              size="icon" 
              variant="ghost"
              className="rounded-full hover:bg-background hover:text-primary"
              disabled={animating}
            >
              <ArrowLeft size={20} />
            </Button>
            <Button
              onClick={nextTestimonial}
              size="icon" 
              variant="ghost"
              className="rounded-full hover:bg-background hover:text-primary"
              disabled={animating}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
