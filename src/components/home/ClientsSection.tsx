
import { cn } from "@/lib/utils";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Walster", logo: "Walster" },
  { name: "JSAT", logo: "JSAT" },
  { name: "Sequid", logo: "Sequid" },
  { name: "Incite", logo: "Incite" },
  { name: "Reapmind", logo: "Reapmind" },
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
                "flex items-center justify-center h-24 w-36 rounded-lg bg-gradient-to-br from-agency-purple/20 to-agency-blue/20 transition-all duration-300 hover:from-agency-purple/40 hover:to-agency-blue/40 animate-fade-in",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-agency-purple to-agency-blue">{client.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
