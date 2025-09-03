import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";

export default function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: "10,000+", label: "Happy Travelers" },
    { value: "50+", label: "Tour Options" },
    { value: "24/7", label: "AI Support" }
  ];

  return (
    <section className="py-20 gradient-bg text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Explore Port Said?</h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          While our AI is here to assist with information and recommendations, don't forget to explore the full range of tours, places, and packages available on the main Egy Safary website.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            asChild
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            data-testid="button-visit-website"
          >
            <a 
              href="https://egy-safary.odoo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2"
            >
              <span>Visit Egy Safary Website</span>
              <ExternalLink size={18} />
            </a>
          </Button>
          <Button
            onClick={() => scrollToSection('chat')}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            data-testid="button-chat-again"
          >
            <span>Chat with AI Again</span>
            <MessageCircle className="ml-2" size={18} />
          </Button>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
