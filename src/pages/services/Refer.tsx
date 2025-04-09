
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, HelpCircle, Users } from "lucide-react";

const Refer = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "9404895667";
    const message = `Hi, I'd like to refer someone for your web development services.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                💸 Refer & Earn with Us!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Know someone who needs a website? Refer them to us and earn 10% to 15% commission on the total deal value — simple as that!
              </p>
              <Button onClick={handleWhatsAppClick} className="bg-gradient button-pop animate-pulse-slow">
                Refer Someone Now
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-background rounded-lg border border-border p-6 text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-agency-purple to-agency-blue flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Make a Referral</h3>
                <p className="text-muted-foreground">
                  Simply introduce us to someone who needs web development services. It could be a friend, colleague, or business contact.
                </p>
              </div>
              
              <div className="bg-background rounded-lg border border-border p-6 text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-agency-blue to-agency-pink flex items-center justify-center text-white mx-auto mb-4">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. We Close the Deal</h3>
                <p className="text-muted-foreground">
                  We'll take care of the consultation, proposal, and project execution. You don't have to be involved in any of the technical details.
                </p>
              </div>
              
              <div className="bg-background rounded-lg border border-border p-6 text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-agency-pink to-agency-purple flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 7v12a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M16 12h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">3. Earn Your Commission</h3>
                <p className="text-muted-foreground">
                  Once the project is confirmed, you'll receive your 10-15% commission. No hassle, no complicated paperwork.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    How much can I earn?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    You'll earn between 10% to 15% of the total project value. For example, if your referral results in a ₹1,00,000 project, you could earn between ₹10,000 to ₹15,000.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    When do I get paid?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Once the project is confirmed and the initial payment is made by the client, we'll arrange your commission payment within 7 business days.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    Is there a limit to referrals?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Not at all! You can refer as many people as you want. The more successful referrals you make, the more you earn.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    How do I make a referral?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Simply contact us via WhatsApp at +91 9404895667 with your referral's details, or ask them to mention your name when they reach out to us.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-agency-purple/20 via-agency-blue/20 to-agency-pink/20 rounded-xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Ready to Start Referring?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                It's our way of saying thank you for spreading the word. No complicated signups, no strings attached — just good vibes and real rewards. Let's grow together while helping others get the website they need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleWhatsAppClick} className="bg-gradient button-pop">
                  Refer Someone Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="button-pop" asChild>
                  <a href="tel:+919404895667">
                    Call Us Directly
                  </a>
                </Button>
              </div>
              
              <p className="mt-8 text-sm text-muted-foreground">
                📞 If you've referred someone, just drop us a message at +91 9404895667 and we'll take it from there!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Refer;
