
import { cn } from "@/lib/utils";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Company 1", logo: "C1" },
  { name: "Company 2", logo: "C2" },
  { name: "Company 3", logo: "C3" },
  { name: "Company 4", logo: "C4" },
  { name: "Company 5", logo: "C5" },
  { name: "Company 6", logo: "C6" },
];

export function ClientsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-10 text-muted-foreground">
          Trusted by innovative companies
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className={cn(
                "flex items-center justify-center h-24 w-36 rounded-lg bg-muted/40 transition-all duration-300 hover:bg-primary/10 animate-fade-in",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-2xl font-bold text-muted-foreground">{client.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
