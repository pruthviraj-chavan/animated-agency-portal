
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gradient p-2">
          <div className="bg-background rounded-xl p-10 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us today to start your project 
              and take your business to the next level.
            </p>
            <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
