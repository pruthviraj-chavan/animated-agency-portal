
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter } from "lucide-react";

// Team member data
const teamMembers = [
  {
    name: "Pruthviraj Chavan",
    role: "Founder & CEO",
    bio: "Computer Science Engineering With Data Science Specialisation. Experience at Infomatics & Intellipaat.",
    image: "/me1.png",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Akash Sakhare",
    role: "Co-founder & COO",
    bio: "Founder - Market-Media Solutions , Expertise In Sales & Buisness Operations",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Ketaki Mulik",
    role: "Co-founder & CMO",
    bio: "MBA at York St John University UK , Expertise in Sales & Markettting Operations",
    image: "/kk.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient animate-scale-in">
          Meet Our Team
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in">
          Passionate experts committed to delivering exceptional digital experiences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-agency-purple/20 shadow-lg 
                       hover:shadow-agency-purple/10 hover:border-agency-purple/30 transition-all duration-300
                       group animate-fade-in flex flex-col items-center text-center"
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-agency-purple via-agency-blue to-agency-pink opacity-0 
                             group-hover:opacity-50 rounded-full transition-opacity duration-300"></div>
                <Avatar className="w-32 h-32 border-2 border-border/50 group-hover:border-agency-purple/30 transition-all duration-300">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl bg-gradient-to-r from-agency-purple to-agency-blue text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <Badge variant="outline" className="bg-agency-purple/10 text-foreground mb-3">
                {member.role}
              </Badge>
              
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              
              <div className="flex space-x-3 mt-auto pt-2">
                {member.socialLinks.linkedin && (
                  <a 
                    href={member.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background border border-border hover:bg-agency-purple/10 
                             hover:border-agency-purple/30 transition-colors duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a 
                    href={member.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background border border-border hover:bg-agency-blue/10 
                             hover:border-agency-blue/30 transition-colors duration-300"
                  >
                    <Twitter size={16} />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a 
                    href={member.socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background border border-border hover:bg-agency-pink/10 
                             hover:border-agency-pink/30 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
